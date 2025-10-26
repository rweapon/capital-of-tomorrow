import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { Controller, useForm } from 'react-hook-form';

import { Input, Textarea } from '@/components';

import { FormButtons } from '@/app/[locale]/apply/[step]/components';
import {
  StepComponentProps,
  StepTwoData,
  stepTwoSchema,
} from '@/app/[locale]/apply/[step]/types';

const StepTwo = ({
  onNext,
  defaultValues,
  ...buttonProps
}: StepComponentProps<StepTwoData>) => {
  const t = useTranslations('apply.steps.two');

  const {
    control,
    handleSubmit,
    formState: { isValid },
    watch,
  } = useForm<StepTwoData>({
    resolver: zodResolver(stepTwoSchema),
    mode: 'onChange',
    defaultValues: {
      experience: '',
      motivation: '',
      future_goals: '',
      socials: '',
      source: '',
      ...defaultValues,
    },
  });

  const onSubmit = (data: StepTwoData) => {
    // Save to localStorage as backup
    localStorage.setItem('stepTwoData', JSON.stringify(data));
    onNext(data);
  };

  // Watch field values to show word count
  const experienceValue = watch('experience') || '';
  const motivationValue = watch('motivation') || '';
  const futureGoalsValue = watch('future_goals') || '';

  // Helper function to count words
  const countWords = (text: string): number => {
    return text
      .trim()
      .split(/\s+/)
      .filter((word) => word.length > 0).length;
  };

  return (
    <>
      <form className='flex flex-col sm:items-start justify-between gap-7 sm:gap-24'>
        <div className='contents sm:flex flex-col gap-9 w-full'>
          <Controller
            name='experience'
            control={control}
            render={({ field, fieldState: { error } }) => (
              <div>
                <Textarea
                  {...field}
                  title={t('experience')}
                  id='experience'
                  rows={6}
                  error={error?.message}
                />
                <div className='flex justify-between items-center mt-2 text-sm text-gray-500'>
                  <span>
                    {countWords(experienceValue)}
                    {t('words')}
                  </span>
                  <span>
                    {experienceValue.length} {t('char')}
                  </span>
                </div>
              </div>
            )}
          />

          <Controller
            name='motivation'
            control={control}
            render={({ field, fieldState: { error } }) => (
              <div>
                <Textarea
                  {...field}
                  title={t('motivation')}
                  id='motivation'
                  rows={6}
                  error={error?.message}
                />
                <div className='flex justify-between items-center mt-2 text-sm text-gray-500'>
                  <span>
                    {countWords(motivationValue)}
                    {t('words')}
                  </span>
                  <span>
                    {motivationValue.length} {t('char')}
                  </span>
                </div>
              </div>
            )}
          />

          <Controller
            name='future_goals'
            control={control}
            render={({ field, fieldState: { error } }) => (
              <div>
                <Textarea
                  {...field}
                  title={t('future_goals')}
                  id='future_goals'
                  rows={6}
                  error={error?.message}
                />
                <div className='flex justify-between items-center mt-2 text-sm text-gray-500'>
                  <span>
                    {countWords(futureGoalsValue)}
                    {t('words')}
                  </span>
                  <span>
                    {futureGoalsValue.length} {t('char')}
                  </span>
                </div>
              </div>
            )}
          />
        </div>

        <div className='contents sm:flex flex-col gap-12 w-full'>
          <h3 className='font-mont font-bold text-2xl md:text-3xl lg:text-4xl text-primary-foreground uppercase self-center'>
            {t('add_info')}
          </h3>

          <Controller
            name='socials'
            control={control}
            render={({ field, fieldState: { error } }) => (
              <Input
                {...field}
                title={t('socials')}
                id='socials'
                type='url'
                placeholder='https://linkedin.com/in/yourprofile'
                className='md:w-1/2'
                error={error?.message}
              />
            )}
          />

          <Controller
            name='source'
            control={control}
            render={({ field, fieldState: { error } }) => (
              <Input
                {...field}
                title={t('source')}
                id='source'
                placeholder={t('sourcePlaceholder')}
                className='md:w-1/2'
                error={error?.message}
              />
            )}
          />
        </div>
      </form>
      <FormButtons
        numStep={2}
        onNext={handleSubmit(onSubmit)}
        isValid={isValid}
        {...buttonProps}
      />
    </>
  );
};

export default StepTwo;
