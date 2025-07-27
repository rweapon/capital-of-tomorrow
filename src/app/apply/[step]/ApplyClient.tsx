/* eslint-disable no-console */
/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import React, { useCallback, useEffect, useState } from 'react';

import { clearSavedData, formDataGenerator } from '@/lib/utils';

import {
  StepFourData,
  StepOneData,
  StepThreeData,
  StepTwoData,
} from '@/app/apply/[step]/types';
import { PASSPORT_KEY, PHOTO_KEY } from '@/constant/data';
import { ProgressBar, progressStep } from '@/views/Apply/ProgressBar';
import { getFile } from '@/views/Apply/Steps/fileUtils';

const StepOne = dynamic(
  () => import('@/views/Apply/Steps/StepOne').then((res) => res.default),
  {
    ssr: false,
  }
);
const StepTwo = dynamic(
  () => import('@/views/Apply/Steps/StepTwo').then((res) => res.default),
  {
    ssr: false,
  }
);
const StepThree = dynamic(
  () => import('@/views/Apply/Steps/StepThree').then((res) => res.default),
  {
    ssr: false,
  }
);
const StepFour = dynamic(
  () => import('@/views/Apply/Steps/StepFour').then((res) => res.default),
  {
    ssr: false,
  }
);

type ApplyClientProps = {
  numStep: number;
};

export interface FileData {
  name: string;
  type: string;
  size: number;
  data: string; // base64 encoded
}

interface FormData {
  stepOne?: StepOneData;
  stepTwo?: StepTwoData;
  stepThree?: StepThreeData;
  stepFour?: StepFourData;
}

const ApplyClient: React.FC<ApplyClientProps> = ({ numStep }) => {
  const router = useRouter();

  // State to store form data from all steps
  const [formData, setFormData] = useState<FormData>({});
  const [isLoading, setIsLoading] = useState(true);

  const restartData = () => {
    const stepThreeData = localStorage.getItem('stepThreeData') || '{}';
    const stepTwoData = localStorage.getItem('stepTwoData') || '{}';
    const stepFourData = localStorage.getItem('stepFourData') || '{}';
    const stepOneData = localStorage.getItem('stepOneData') || '{}';
    return {
      ...{ stepOne: JSON.parse(stepOneData) },
      ...{ stepTwo: JSON.parse(stepTwoData) },
      ...{ stepThree: JSON.parse(stepThreeData) },
      ...{ stepFour: JSON.parse(stepFourData) },
    } as FormData;
  };

  // Load saved form data from localStorage on component mount
  useEffect(() => {
    const savedData = restartData();

    if (savedData) {
      try {
        setFormData(savedData);
      } catch (error) {
        console.error('Error loading saved form data:', error);
      }
    }
    setIsLoading(false);
  }, []);

  // Save form data to localStorage whenever it changes
  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem('applicationFormData', JSON.stringify(formData));
    }
  }, [formData, isLoading]);

  const sendEmail = async (data: FormData) => {
    try {
      setIsLoading(true);

      // Собираем все данные формы
      const completeFormData = {
        ...data.stepOne,
        ...data.stepTwo,
        ...data.stepThree,
        ...data.stepFour,
        submissionDate: new Date().toISOString(),
        submissionId: `APP-${Date.now()}`,
      };

      // Конвертируем объект в массив пар ключ-значение для formDataGenerator
      const requestDataArr = Object.entries(completeFormData).map(
        ([key, value]) => {
          // Если значение - объект, преобразуем в строку
          if (typeof value === 'object' && value !== null) {
            return [key, JSON.stringify(value)] as [string, string];
          }
          return [key, value] as [string, string | number | undefined | null];
        }
      );

      // Создаем FormData используя вашу утилиту
      const formDataToSend = formDataGenerator(requestDataArr);

      // Получаем файлы из IndexedDB и добавляем их в FormData
      const savedPhoto = await getFile(PHOTO_KEY);
      const savedPassport = await getFile(PASSPORT_KEY);

      if (savedPhoto) {
        formDataToSend.append('photo', savedPhoto);
        console.log('Photo added to FormData:', savedPhoto.name);
      }

      if (savedPassport) {
        formDataToSend.append('passport', savedPassport);
        console.log('Passport added to FormData:', savedPassport.name);
      }

      console.log('Отправляем FormData с файлами:', {
        hasPhoto: !!savedPhoto,
        hasPassport: !!savedPassport,
        photoName: savedPhoto?.name,
        passportName: savedPassport?.name,
      });

      const response = await fetch('/api/submit-form', {
        method: 'POST',
        body: formDataToSend, // Отправляем FormData (не JSON!)
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Ошибка при отправке данных');
      }

      if (result.success) {
        await clearSavedData();
        alert('Данные успешно отправлены!');
        console.log('Результат отправки:', result.details);

        // Redirect to success page
        router.replace('/');
      } else {
        throw new Error(result.message || 'Неизвестная ошибка');
      }
    } catch (error) {
      console.error('Error saving form data:', error);
      alert(
        `Ошибка при отправке: ${
          error instanceof Error ? error.message : 'Неизвестная ошибка'
        }`
      );
    } finally {
      setIsLoading(false);
    }
  };

  // Handle navigation to next step with form data
  const handleNext = useCallback(
    <T,>(stepData: T, currentStep: number) => {
      const updatedFormData = {
        ...formData,
        [`step${['One', 'Two', 'Three', 'Four'][currentStep - 1]}`]: stepData,
      };

      setFormData(updatedFormData);

      // Navigate to next step
      if (currentStep < 4) {
        router.push(`/apply/${currentStep + 1}`);
      } else {
        sendEmail(updatedFormData);
      }
    },
    [formData, router]
  );

  // Handle navigation to previous step
  const handlePrevious = useCallback(() => {
    if (numStep > 1) {
      router.push(`/apply/${numStep - 1}`);
    }
  }, [numStep]);

  // Check if user can access current step (has completed previous steps)
  const canAccessStep = (step: number): boolean => {
    if (step === 1) return true;

    const requiredSteps = [
      'stepOne',
      'stepTwo',
      'stepThree',
      'stepFour',
    ] as const;
    for (let i = 0; i < step - 1; i++) {
      if (!formData[requiredSteps[i]]) {
        return false;
      }
    }
    return true;
  };

  // Redirect to first incomplete step if accessing invalid step
  useEffect(() => {
    if (!isLoading && !canAccessStep(numStep)) {
      // Find the first incomplete step
      let redirectStep = 1;
      if (formData.stepOne) redirectStep = 2;
      if (formData.stepTwo) redirectStep = 3;
      if (formData.stepThree) redirectStep = 4;

      router.push(`/apply/${redirectStep}`);
    }
  }, [numStep, formData, isLoading, router]);

  if (isLoading) {
    return (
      <section className='font-monda text-lg text-white container flex items-center justify-center min-h-[400px]'>
        <div className='text-center'>Loading...</div>
      </section>
    );
  }

  // Don't render if user can't access this step
  if (!canAccessStep(numStep)) {
    return null;
  }

  const stepComponent: Record<number, React.ReactElement> = {
    1: (
      <StepOne
        onNext={(data) => handleNext(data, 1)}
        onPrevious={handlePrevious}
        defaultValues={formData.stepOne}
      />
    ),
    2: (
      <StepTwo
        onNext={(data) => handleNext(data, 2)}
        onPrevious={handlePrevious}
        defaultValues={formData.stepTwo}
      />
    ),
    3: (
      <StepThree
        onNext={(data) => handleNext(data, 3)}
        onPrevious={handlePrevious}
        defaultValues={formData.stepThree}
      />
    ),
    4: (
      <StepFour
        onNext={(data) => handleNext(data, 4)}
        onPrevious={handlePrevious}
        defaultValues={formData.stepFour}
      />
    ),
  };

  return (
    <section className='container flex flex-col gap-8 md:gap-12 sm:gap-20'>
      <ProgressBar step={numStep as keyof typeof progressStep} />
      {stepComponent[numStep]}
    </section>
  );
};

export default ApplyClient;
