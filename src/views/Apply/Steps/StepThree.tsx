import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { Controller, useForm } from 'react-hook-form';

import { Checkbox } from '@/components/Сheckbox/Сheckbox';

import { FormButtons } from '@/app/[locale]/apply/[step]/components';
import {
  StepComponentProps,
  StepThreeData,
  stepThreeSchema,
} from '@/app/[locale]/apply/[step]/types';

const StepThree = ({
  onNext,
  defaultValues,
  ...buttonProps
}: StepComponentProps<StepThreeData>) => {
  const t = useTranslations('apply.steps.three');

  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<StepThreeData>({
    resolver: zodResolver(stepThreeSchema),
    mode: 'onChange',
    defaultValues: {
      declaration: false,
      ...defaultValues,
    },
  });

  const onSubmit = (data: StepThreeData) => {
    // Save to localStorage as backup
    localStorage.setItem('stepThreeData', JSON.stringify(data));
    onNext(data);
  };

  return (
    <>
      <form className='flex flex-col items-start gap-6 text-primary-foreground text-base sm:text-xl lg:text-2xl font-mont'>
        <Controller
          name='declaration'
          control={control}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <div className='w-full'>
              <div className='flex gap-6'>
                <Checkbox
                  id='declaration'
                  checked={value}
                  onCheckedChange={onChange}
                />
                <label htmlFor='declaration' className='cursor-pointer'>
                  <strong>{t('declaration.strong')}</strong>{' '}
                  {t('declaration.content')}
                </label>
              </div>
              {error && (
                <p className='font-mont text-red-500 text-sm mt-2 ml-12'>
                  {error.message}
                </p>
              )}
            </div>
          )}
        />

        <ul className='font-inherit list-disc *:mb-2 text-sm sm:text-base lg:text-lg leading-relaxed pl-6 ml-12'>
          <li>{t('terms.one')}</li>
          <li>{t('terms.two')}</li>
          <li>{t('terms.three')}</li>
          <li>{t('terms.four')}</li>
          <li>{t('terms.five')}</li>
          <li>{t('terms.six')}</li>
          <li>{t('terms.seven')}</li>
          <li>{t('terms.eight')}</li>
          <li>{t('terms.nine')}</li>
          <li>{t('terms.ten')}</li>
        </ul>
      </form>
      <FormButtons
        numStep={3}
        onNext={handleSubmit(onSubmit)}
        isValid={isValid}
        {...buttonProps}
      />
    </>
  );
};

export default StepThree;
