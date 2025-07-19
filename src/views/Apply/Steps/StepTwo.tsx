import React from 'react';

import { Input, Textarea } from '@/components';

const StepTwo = () => {
  return (
    <div className='flex flex-col sm:items-start justify-between gap-7 sm:gap-24'>
      <div className='contents sm:flex flex-col gap-9 w-full'>
        <Textarea
          title='Can you provide a brief overview of your background, including your education, professional or busibusiness experience? (250 words or less) *'
          id='experience'
        />
        <Textarea
          title='What motivates you to join the event (250 words or less) *'
          id='motivation'
        />
        <Textarea
          title='Describe your future goals (250 words or less) *'
          id='future_goals'
        />
      </div>
      <div className='contents sm:flex flex-col gap-12 w-full'>
        <h3 className='font-mont font-bold text-2xl md:text-3xl lg:text-4xl text-primary-foreground uppercase self-center'>
          Additional Information
        </h3>
        <Input
          title='Facebook/LinkedIn Profile link (optional)'
          id='socials'
          className='md:w-1/2'
        />
        <Input
          title='Where did you hear about Capital of Tomorrow? *'
          id='source'
          className='md:w-1/2'
        />
      </div>
    </div>
  );
};

export default StepTwo;
