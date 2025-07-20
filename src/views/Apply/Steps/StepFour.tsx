import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';

import { Input } from '@/components';
import { Checkbox } from '@/components/Сheckbox/Сheckbox';

import { FormButtons } from '@/app/apply/[step]/components';
import {
  StepComponentProps,
  StepFourData,
  stepFourSchema,
} from '@/app/apply/[step]/types';

const StepFour = ({
  onNext,
  defaultValues,
  ...buttonProps
}: StepComponentProps<StepFourData>) => {
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<StepFourData>({
    resolver: zodResolver(stepFourSchema),
    mode: 'onSubmit',
    defaultValues: {
      full_name_card: '',
      card_number: '',
      expiry: '',
      cvc: '',
      payment_consent: false,
      ...defaultValues,
    },
  });

  const onSubmit = (data: StepFourData) => {
    // Save to localStorage as backup
    localStorage.setItem('stepFourData', JSON.stringify(data));
    onNext(data);
  };

  return (
    <>
      <form className='md:max-w-xl md:self-center flex flex-col md:items-start justify-between gap-6'>
        <div className='flex flex-col gap-6 w-full'>
          <Controller
            name='full_name_card'
            control={control}
            render={({ field, fieldState: { error } }) => (
              <Input
                {...field}
                title='Full Name (as per Card)'
                id='full_name_card'
                autoComplete='name webauthn'
                error={error?.message}
              />
            )}
          />

          <Controller
            name='card_number'
            control={control}
            render={({ field, fieldState: { error } }) => (
              <Input
                {...field}
                title='Credit/Debit card *'
                id='card_number'
                placeholder='1234 5678 9012 3456'
                autoComplete='cc-number'
                error={error?.message}
              />
            )}
          />
        </div>

        <div className='contents md:flex justify-between md:gap-4 lg:gap-6 w-full'>
          <Controller
            name='expiry'
            control={control}
            render={({ field, fieldState: { error } }) => (
              <Input
                {...field}
                title='Expiry *'
                id='expiry'
                placeholder='MM/YY'
                autoComplete='cc-exp'
                error={error?.message}
              />
            )}
          />

          <Controller
            name='cvc'
            control={control}
            render={({ field, fieldState: { error } }) => (
              <Input
                {...field}
                title='CVC *'
                id='cvc'
                placeholder='123'
                autoComplete='cc-csc'
                error={error?.message}
              />
            )}
          />
        </div>

        <h3 className='font-mont font-extrabold text-2xl text-primary-foreground'>
          Application fee £ 19
        </h3>

        <Controller
          name='payment_consent'
          control={control}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <div className='w-full'>
              <div className='flex gap-4 text-primary-foreground font-mont text-xl'>
                <Checkbox
                  id='payment_consent'
                  checked={value}
                  onCheckedChange={onChange}
                />
                <label htmlFor='payment_consent' className='cursor-pointer'>
                  I agree to the processing of my personal data and payment
                  information
                </label>
              </div>
              {error && (
                <p className='font-mont text-red-500 text-sm mt-2'>
                  {error.message}
                </p>
              )}
            </div>
          )}
        />
      </form>
      <FormButtons
        numStep={4}
        onNext={handleSubmit(onSubmit)}
        isValid={isValid}
        {...buttonProps}
      />
    </>
  );
};

export default StepFour;
