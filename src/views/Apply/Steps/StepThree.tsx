import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';

import { Checkbox } from '@/components/Сheckbox/Сheckbox';

import { FormButtons } from '@/app/apply/[step]/components';
import {
  StepComponentProps,
  StepThreeData,
  stepThreeSchema,
} from '@/app/apply/[step]/types';

const StepThree = ({
  onNext,
  defaultValues,
  ...buttonProps
}: StepComponentProps<StepThreeData>) => {
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<StepThreeData>({
    resolver: zodResolver(stepThreeSchema),
    mode: 'onSubmit',
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
                  <strong>Declaration:</strong> I declare that the information
                  provided in this application is true and accurate to the best
                  of my knowledge. I hereby consent & agree to abide by the
                  aforementioned terms and conditions. I understand that any
                  false information may result in disqualification from the
                  scholarship.
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

        <div className='mt-4'>
          <h4 className='font-bold text-xl sm:text-2xl mb-4 text-primary-foreground'>
            Terms and Conditions:
          </h4>
          <ul className='font-inherit list-disc *:mb-2 text-sm sm:text-base lg:text-lg leading-relaxed pl-6'>
            <li>
              The application fee is mandatory, non-refundable under any
              circumstances, and applies to this category as it covers the
              associated costs of event participation as a self-funded delegate.
              Incomplete applications will not be considered for evaluation or
              selection.
            </li>
            <li>
              After submission, applicants will be notified via email and must
              confirm their participation within the specified timeframe.
              Failure to confirm within the given period may result in the
              forfeiture of the opportunity.
            </li>
            <li>
              By submitting an application, participants grant the organisers of
              Capital of Tomorrow 2025 the right to use their name, biography,
              and submitted materials for promotional purposes related to the
              event.
            </li>
            <li>
              Personal information provided in the application will be used
              solely for the purpose of evaluation and event organisation. The
              organisers will handle personal data in compliance with applicable
              data protection laws and regulations.
            </li>
            <li>
              Delegate selection will be conducted by an independent panel of
              judges, including high-profile board members from European
              countries. All selection outcomes are final and non-negotiable.
            </li>
            <li>
              Vostocnik Solution is not liable for any loss, injury, damage, or
              theft during the event.
            </li>
            <li>
              Attendees are responsible for their personal belongings and must
              adhere to safety regulations and instructions. The organising team
              will be available to provide assistance when needed.
            </li>
            <li>
              By participating, attendees agree not to pursue legal action
              against the organisation regarding application fee refunds.
            </li>
            <li>
              Participants also commit to refraining from any oral, visual, or
              auditory defamation of the organisation, particularly if they
              disagree with their assigned category. Any violation of this
              provision will lead to legal consequences.
            </li>
            <li>
              By submitting an application, participants acknowledge that they
              have read, understood, and agreed to these terms and conditions.
            </li>
          </ul>
        </div>
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
