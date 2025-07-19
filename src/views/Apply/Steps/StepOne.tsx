import React from 'react';

import { Input, RadioGroup, RadioGroupItem } from '@/components';
import { Checkbox } from '@/components/Сheckbox/Сheckbox';

const StepOne = () => {
  return (
    <div className='flex flex-col sm:flex-row sm:items-start justify-between gap-6 sm:gap-12 lg:gap-40'>
      <div className='contents sm:flex flex-col sm:gap-7 lg:gap-9 w-full'>
        <Input
          title='Full Name (as per Passport)'
          id='full_name'
          autoComplete='name webauthn'
        />
        <Input
          title='Date of birth *'
          id='birthday'
          autoComplete='bday-day webauthn'
        />
        <Input
          title='Contact number *'
          id='number'
          autoComplete='tel webauthn'
        />
        <Input
          title='Country of residence *'
          id='country'
          autoComplete='country webauthn'
        />
        <div className='order-1 sm:order-[unset] flex flex-col gap-4'>
          <label className='font-mont text-xl text-primary-foreground'>
            Do you need visa? *
          </label>
          <RadioGroup>
            <div className='flex items-center gap-4'>
              <RadioGroupItem value='yes' id='visa_yes' />
              <label
                htmlFor='visa_yes'
                className='font-mont text-xl text-primary-foreground cursor-pointer'
              >
                Yes
              </label>
            </div>
            <div className='flex items-center gap-4'>
              <RadioGroupItem value='no' id='visa_no' />
              <label
                htmlFor='visa_no'
                className='font-mont text-xl text-primary-foreground cursor-pointer'
              >
                No
              </label>
            </div>
          </RadioGroup>
        </div>
        <div className='order-2 sm:order-[unset] flex gap-4 text-primary-foreground font-mont text-xl '>
          <Checkbox id='personal_data' />
          <label htmlFor='personal_data' className='cursor-pointer'>
            I agree to the processing of my personal data
          </label>
        </div>
      </div>
      <div className='contents sm:flex flex-col sm:gap-7 lg:gap-9 w-full'>
        <Input title='Gender *' id='gender' />
        <Input title='Nationality *' id='nationality' />
        <Input
          title='Email address *'
          id='email'
          autoComplete='email webabuthn'
        />
        <Input title='Departure city *' id='depart' />
        <Input
          title='Upload your profile photo *'
          id='photo'
          type='file'
          accept='image/*'
        />
        <Input
          title='Upload your passport/ID *'
          id='passport'
          type='file'
          accept='pdf/*'
        />
      </div>
    </div>
  );
};

export default StepOne;
