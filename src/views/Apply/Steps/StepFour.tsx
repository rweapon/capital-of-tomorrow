import React from 'react';

import { Input } from '@/components';
import { Checkbox } from '@/components/Сheckbox/Сheckbox';

const StepFour = () => {
  return (
    <div className='md:max-w-xl md:self-center flex flex-col md:items-start justify-between gap-6'>
      <div className='flex flex-col gap-6 w-full'>
        <Input
          title='Full Name (as per Card)'
          id='full_name'
          autoComplete='name webauthn'
        />
        <Input title='Credit/Debit card *' id='card_number' />
      </div>
      <div className='contents md:flex justify-between md:gap-4 lg:gap-6 w-full '>
        <Input title='Expiry *' id='gender' />
        <Input title='CVC *' id='cvc' />
      </div>
      <h3 className='font-mont font-extrabold text-2xl text-primary-foreground'>
        Application fee £ 19
      </h3>
      <div className='flex gap-4 text-primary-foreground font-mont text-xl'>
        <Checkbox id='personal_data' />
        <label htmlFor='personal_data' className='cursor-pointer'>
          I agree to the processing of my personal data
        </label>
      </div>
    </div>
  );
};

export default StepFour;
