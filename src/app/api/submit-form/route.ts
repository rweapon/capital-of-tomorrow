/* eslint-disable no-console */

import { Resend } from 'resend';

import {
  formatCardNumber,
  formatDate,
  truncateText,
} from '@/app/api/submit-form/utils';
import {
  StepFourData,
  StepOneData,
  StepThreeData,
  StepTwoData,
} from '@/app/apply/[step]/types';
import { ADMIN_EMAIL, FROM_EMAIL, RESEND_API_KEY } from '@/constant/env';

const resend = new Resend(RESEND_API_KEY);

export interface EmailTemplateData
  extends StepOneData,
    StepTwoData,
    StepThreeData,
    StepFourData {
  submissionDate: string;
  submissionId: string;
}

// Функция для конвертации File в Buffer для Resend
async function fileToBuffer(file: File): Promise<Buffer> {
  const arrayBuffer = await file.arrayBuffer();
  return Buffer.from(arrayBuffer);
}

// Функция для получения файлов из IndexedDB (исправленная версия)
async function getFileFromIndexedDB(fileName: string): Promise<File | null> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('ApplicationFiles', 1);

    request.onerror = () => reject(request.error);

    request.onsuccess = () => {
      const db = request.result;

      // Проверяем, существует ли object store
      if (!db.objectStoreNames.contains('files')) {
        console.warn('Object store "files" не найден');
        resolve(null);
        return;
      }

      const transaction = db.transaction(['files'], 'readonly');
      const store = transaction.objectStore('files');
      const getRequest = store.get(fileName);

      getRequest.onsuccess = () => {
        const result = getRequest.result;
        resolve(result ? result.file : null);
      };

      getRequest.onerror = () => {
        console.error('Ошибка получения файла:', getRequest.error);
        resolve(null); // Возвращаем null вместо reject для продолжения работы
      };
    };

    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains('files')) {
        db.createObjectStore('files');
      }
    };
  });
}

// Функция для подготовки вложений
async function prepareAttachments(data: EmailTemplateData) {
  const attachments = [];

  try {
    // Получаем фото
    if (data.hasPhoto && data.photoName) {
      console.log(`Получение фото: ${data.photoName}`);
      const photoFile = await getFileFromIndexedDB(data.photoName);
      if (photoFile) {
        const buffer = await fileToBuffer(photoFile);
        attachments.push({
          filename: data.photoName,
          content: buffer,
          // Убираем contentType - Resend определит автоматически или используем type
        });
        console.log(`Фото успешно подготовлено: ${data.photoName}`);
      } else {
        console.warn(`Фото не найдено: ${data.photoName}`);
      }
    }

    // Получаем паспорт
    if (data.hasPassport && data.passportName) {
      console.log(`Получение паспорта: ${data.passportName}`);
      const passportFile = await getFileFromIndexedDB(data.passportName);
      if (passportFile) {
        const buffer = await fileToBuffer(passportFile);
        attachments.push({
          filename: data.passportName,
          content: buffer,
        });
        console.log(`Паспорт успешно подготовлен: ${data.passportName}`);
      } else {
        console.warn(`Паспорт не найден: ${data.passportName}`);
      }
    }
  } catch (error) {
    console.error('Ошибка при подготовке вложений:', error);
  }

  return attachments;
}

// Основная функция отправки писем
export async function POST(request: Request) {
  try {
    const formData = await request.json();

    // Добавляем метаинформацию
    const emailData: EmailTemplateData = {
      ...formData,
      submissionDate: new Date().toISOString(),
      submissionId: `APP-${Date.now()}`,
    };

    // Подготавливаем вложения
    // const attachments = await prepareAttachments(emailData);

    // Email для администратора с вложениями
    const adminEmail = {
      from: FROM_EMAIL,
      to: ADMIN_EMAIL,
      subject: `Новая заявка - ${emailData.submissionId} - ${emailData.full_name}`,
      html: generateAdminEmailTemplate(emailData),
      // attachments: attachments.length > 0 ? attachments : undefined,
    };
    // Email подтверждения пользователю (без вложений)
    const userEmail = {
      from: FROM_EMAIL,
      to: [emailData.email],
      subject: 'Заявка получена - Спасибо!',
      html: generateUserConfirmationTemplate(emailData),
    };

    // Отправляем письма
    console.log('Отправка писем...');
    const results = await Promise.allSettled([
      resend.emails.send(adminEmail),
      resend.emails.send(userEmail),
    ]);

    const adminResult = results[0];
    const userResult = results[1];

    // Логируем результаты
    if (adminResult.status === 'rejected') {
      console.error('Ошибка отправки письма админу:', adminResult.reason);
    } else {
      console.log('Письмо админу отправлено успешно:', adminResult.value);
    }

    if (userResult.status === 'rejected') {
      console.error('Ошибка отправки письма пользователю:', userResult.reason);
    } else {
      console.log('Письмо пользователю отправлено успешно:', userResult.value);
    }

    // Определяем общий успех
    const hasErrors =
      adminResult.status === 'rejected' || userResult.status === 'rejected';

    return Response.json({
      success: !hasErrors,
      message: hasErrors
        ? 'Заявка отправлена, но возникли проблемы с отправкой некоторых писем'
        : 'Заявка и письма отправлены успешно!',
      details: {
        // attachmentsCount: attachments.length,
        adminEmailStatus: adminResult.status,
        userEmailStatus: userResult.status,
        emailIds: {
          admin:
            adminResult.status === 'fulfilled'
              ? adminResult.value.data?.id
              : null,
          user:
            userResult.status === 'fulfilled'
              ? userResult.value.data?.id
              : null,
        },
      },
    });
  } catch (error) {
    console.error('Критическая ошибка при отправке:', error);
    return Response.json(
      {
        success: false,
        message: 'Не удалось отправить заявку',
        error: error instanceof Error ? error.message : 'Неизвестная ошибка',
      },
      { status: 500 }
    );
  }
}

// Основная функция генерации email шаблона для админа
function generateAdminEmailTemplate(data: EmailTemplateData) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <title>Новая заявка - ${data.submissionId}</title>
        <style>
            body { 
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; 
                line-height: 1.6; 
                color: #333; 
                background-color: #f8f9fa;
                margin: 0;
                padding: 20px;
            }
            .container { 
                max-width: 900px; 
                margin: 0 auto; 
                background: white; 
                border-radius: 12px; 
                box-shadow: 0 4px 6px rgba(0,0,0,0.1);
                overflow: hidden;
            }
            .header { 
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
                color: white; 
                padding: 30px; 
                text-align: center;
            }
            .header h1 { margin: 0 0 10px 0; font-size: 28px; }
            .submission-info { 
                background: rgba(255,255,255,0.1); 
                padding: 15px; 
                border-radius: 8px; 
                margin-top: 15px;
            }
            .content { padding: 30px; }
            .section { 
                margin-bottom: 35px; 
                border: 1px solid #e9ecef; 
                border-radius: 8px; 
                overflow: hidden;
            }
            .section-header { 
                background-color: #f8f9fa; 
                padding: 15px 20px; 
                border-bottom: 1px solid #e9ecef;
            }
            .section-header h3 { 
                margin: 0; 
                color: #495057; 
                font-size: 18px;
                display: flex;
                align-items: center;
            }
            .section-content { padding: 20px; }
            .info-grid { 
                display: grid; 
                grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); 
                gap: 15px; 
            }
            .info-item { 
                display: flex; 
                padding: 12px 0; 
                border-bottom: 1px solid #f1f3f4; 
            }
            .info-item:last-child { border-bottom: none; }
            .label { 
                font-weight: 600; 
                color: #495057; 
                min-width: 140px;
                margin-right: 15px;
            }
            .value { 
                flex: 1; 
                color: #212529;
                word-break: break-word;
            }
            .file-info { 
                background: linear-gradient(45deg, #e8f5e8, #f0f8f0); 
                padding: 15px; 
                border-radius: 8px; 
                margin: 10px 0; 
                border-left: 4px solid #28a745;
            }
            .no-file { 
                background: linear-gradient(45deg, #ffe6e6, #fff0f0); 
                padding: 15px; 
                border-radius: 8px; 
                margin: 10px 0; 
                border-left: 4px solid #dc3545;
            }
            .text-area { 
                background-color: #f8f9fa; 
                padding: 15px; 
                border-radius: 6px; 
                border: 1px solid #e9ecef;
                white-space: pre-wrap;
                font-family: inherit;
                line-height: 1.5;
            }
            .status-badge { 
                display: inline-block; 
                padding: 4px 12px; 
                border-radius: 20px; 
                font-size: 12px; 
                font-weight: 600; 
                text-transform: uppercase;
            }
            .status-yes { background-color: #d4edda; color: #155724; }
            .status-no { background-color: #f8d7da; color: #721c24; }
            .footer { 
                background-color: #f8f9fa; 
                padding: 20px; 
                text-align: center; 
                color: #6c757d; 
                font-size: 14px;
                border-top: 1px solid #e9ecef;
            }
            .icon { margin-right: 8px; }
            .attachment-note {
                background: linear-gradient(45deg, #fff3cd, #ffeaa7);
                border: 1px solid #ffc107;
                border-radius: 8px;
                padding: 15px;
                margin: 15px 0;
                font-size: 14px;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>🆕 Новая заявка</h1>
                <div class="submission-info">
                    <div><strong>ID заявки:</strong> ${data.submissionId}</div>
                    <div><strong>Дата подачи:</strong> ${formatDate(
                      data.submissionDate
                    )}</div>
                </div>
            </div>

            <div class="content">
                <!-- Личная информация -->
                <div class="section">
                    <div class="section-header">
                        <h3><span class="icon">👤</span>Личная информация</h3>
                    </div>
                    <div class="section-content">
                        <div class="info-grid">
                            <div class="info-item">
                                <span class="label">ФИО:</span>
                                <span class="value">${data.full_name}</span>
                            </div>
                            <div class="info-item">
                                <span class="label">Дата рождения:</span>
                                <span class="value">${new Date(
                                  data.birthday
                                ).toLocaleDateString('ru-RU')}</span>
                            </div>
                            <div class="info-item">
                                <span class="label">Email:</span>
                                <span class="value"><a href="mailto:${
                                  data.email
                                }">${data.email}</a></span>
                            </div>
                            <div class="info-item">
                                <span class="label">Телефон:</span>
                                <span class="value"><a href="tel:${
                                  data.number
                                }">${data.number}</a></span>
                            </div>
                            <div class="info-item">
                                <span class="label">Пол:</span>
                                <span class="value">${data.gender}</span>
                            </div>
                            <div class="info-item">
                                <span class="label">Национальность:</span>
                                <span class="value">${data.nationality}</span>
                            </div>
                            <div class="info-item">
                                <span class="label">Страна:</span>
                                <span class="value">${data.country}</span>
                            </div>
                            <div class="info-item">
                                <span class="label">Город отправления:</span>
                                <span class="value">${data.depart}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Детали заявки -->
                <div class="section">
                    <div class="section-header">
                        <h3><span class="icon">📋</span>Детали заявки</h3>
                    </div>
                    <div class="section-content">
                        <div class="info-item">
                            <span class="label">Нужна виза:</span>
                            <span class="value">
                                <span class="status-badge ${
                                  data.visa ? 'status-yes' : 'status-no'
                                }">
                                    ${data.visa ? 'Да' : 'Нет'}
                                </span>
                            </span>
                        </div>
                        <div class="info-item">
                            <span class="label">Согласие на обработку данных:</span>
                            <span class="value">
                                <span class="status-badge ${
                                  data.personal_data
                                    ? 'status-yes'
                                    : 'status-no'
                                }">
                                    ${data.personal_data ? 'Да' : 'Нет'}
                                </span>
                            </span>
                        </div>
                        <div class="info-item">
                            <span class="label">Источник:</span>
                            <span class="value">${
                              data.source || 'Не указан'
                            }</span>
                        </div>
                        <div class="info-item">
                            <span class="label">Социальные сети:</span>
                            <span class="value">${
                              data.socials
                                ? `<a href="${data.socials}" target="_blank">${data.socials}</a>`
                                : 'Не указаны'
                            }</span>
                        </div>
                        <div class="info-item">
                            <span class="label">Декларация:</span>
                            <span class="value">
                                <span class="status-badge ${
                                  data.declaration ? 'status-yes' : 'status-no'
                                }">
                                    ${
                                      data.declaration
                                        ? 'Принята'
                                        : 'Не принята'
                                    }
                                </span>
                            </span>
                        </div>
                    </div>
                </div>

                <!-- Текстовые поля -->
                <div class="section">
                    <div class="section-header">
                        <h3><span class="icon">✍️</span>Дополнительная информация</h3>
                    </div>
                    <div class="section-content">
                        <div style="margin-bottom: 25px;">
                            <div class="label" style="margin-bottom: 8px;">Опыт:</div>
                            <div class="text-area">${
                              data.experience
                                ? truncateText(data.experience, 500)
                                : 'Не указан'
                            }</div>
                        </div>
                        <div style="margin-bottom: 25px;">
                            <div class="label" style="margin-bottom: 8px;">Мотивация:</div>
                            <div class="text-area">${
                              data.motivation
                                ? truncateText(data.motivation, 500)
                                : 'Не указана'
                            }</div>
                        </div>
                        <div>
                            <div class="label" style="margin-bottom: 8px;">Будущие цели:</div>
                            <div class="text-area">${
                              data.future_goals
                                ? truncateText(data.future_goals, 500)
                                : 'Не указаны'
                            }</div>
                        </div>
                    </div>
                </div>

                <!-- Информация об оплате -->
                <div class="section">
                    <div class="section-header">
                        <h3><span class="icon">💳</span>Платежная информация</h3>
                    </div>
                    <div class="section-content">
                        <div class="info-grid">
                            <div class="info-item">
                                <span class="label">Имя на карте:</span>
                                <span class="value">${
                                  data.full_name_card || 'Не указано'
                                }</span>
                            </div>
                            <div class="info-item">
                                <span class="label">Номер карты:</span>
                                <span class="value">${
                                  data.card_number
                                    ? formatCardNumber(data.card_number)
                                    : 'Не указан'
                                }</span>
                            </div>
                            <div class="info-item">
                                <span class="label">Срок действия:</span>
                                <span class="value">${
                                  data.expiry || 'Не указан'
                                }</span>
                            </div>
                            <div class="info-item">
                                <span class="label">Согласие на оплату:</span>
                                <span class="value">
                                    <span class="status-badge ${
                                      data.payment_consent
                                        ? 'status-yes'
                                        : 'status-no'
                                    }">
                                        ${data.payment_consent ? 'Да' : 'Нет'}
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Загруженные файлы -->
                <div class="section">
                    <div class="section-header">
                        <h3><span class="icon">📁</span>Загруженные файлы</h3>
                    </div>
                    <div class="section-content">
                        ${
                          data.hasPhoto
                            ? `<div class="file-info">📷 <strong>Фото профиля:</strong> ${
                                data.photoName || 'Загружено'
                              }</div>`
                            : '<div class="no-file">❌ Фото профиля не загружено</div>'
                        }
                        ${
                          data.hasPassport
                            ? `<div class="file-info">📄 <strong>Паспорт/ID:</strong> ${
                                data.passportName || 'Загружен'
                              }</div>`
                            : '<div class="no-file">❌ Паспорт/ID не загружен</div>'
                        }
                        
                        ${
                          data.hasPhoto || data.hasPassport
                            ? `<div class="attachment-note">
                                📎 <strong>Внимание:</strong> Файлы прикреплены к этому письму как вложения.
                            </div>`
                            : ''
                        }
                    </div>
                </div>
            </div>

            <div class="footer">
                <p>Это письмо было автоматически сгенерировано системой подачи заявок.</p>
                <p>Время генерации: ${new Date().toLocaleString('ru-RU')}</p>
            </div>
        </div>
    </body>
    </html>
    `;
}

// Email template для пользователя (без изменений)
function generateUserConfirmationTemplate(data: EmailTemplateData) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <title>Заявка получена</title>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 8px; margin-bottom: 30px; }
            .content { background-color: #f9f9f9; padding: 30px; border-radius: 8px; }
            .success-icon { font-size: 48px; margin-bottom: 20px; }
            .button { display: inline-block; background-color: #3498db; color: white; padding: 12px 25px; text-decoration: none; border-radius: 5px; margin: 20px 0; }
            .footer { text-align: center; margin-top: 30px; color: #7f8c8d; font-size: 14px; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <div class="success-icon">✅</div>
                <h1>Заявка получена!</h1>
                <p>Спасибо, ${data.full_name}!</p>
            </div>

            <div class="content">
                <h2>Что дальше?</h2>
                <p>Мы успешно получили вашу заявку. Вот что вас ожидает:</p>
                
                <ul>
                    <li>🔍 Наша команда рассмотрит вашу заявку в течение 2-3 рабочих дней</li>
                    <li>📧 Вы получите email с обновлением статуса заявки</li>
                    <li>📞 При необходимости мы свяжемся с вами по номеру ${
                      data.number
                    }</li>
                </ul>

                <h3>Сводка заявки:</h3>
                <p><strong>ФИО:</strong> ${data.full_name}</p>
                <p><strong>Email:</strong> ${data.email}</p>
                <p><strong>Город отправления:</strong> ${data.depart}</p>
                <p><strong>Нужна виза:</strong> ${data.visa ? 'Да' : 'Нет'}</p>
                <p><strong>Дата подачи:</strong> ${new Date(
                  data.submissionDate
                ).toLocaleDateString('ru-RU')}</p>
                <p><strong>ID заявки:</strong> ${data.submissionId}</p>

                <div style="text-align: center;">
                    <a href="mailto:support@yourcompany.com" class="button">Связаться с поддержкой</a>
                </div>
            </div>

            <div class="footer">
                <p>Если у вас есть вопросы, не стесняйтесь обращаться к нам.</p>
                <p>С наилучшими пожеланиями,<br>Команда по работе с заявками</p>
            </div>
        </div>
    </body>
    </html>
    `;
}
