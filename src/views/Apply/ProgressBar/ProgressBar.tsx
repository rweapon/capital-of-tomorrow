import React from 'react';

export const progressStep = {
  1: 'Personal Information',
  2: 'Motivation & Goals',
  3: 'Terms & Conditions',
  4: 'Payment',
};

type ProgressBarProps = {
  step: 1 | 2 | 3 | 4;
};

export const ProgressBar = ({ step }: ProgressBarProps) => {
  return (
    <div className='w-full max-w-4xl mx-auto p-8 text-primary-foreground'>
      <div className='flex items-center justify-center mb-12'>
        <h2 className='text-4xl font-bold'>{progressStep[step]}</h2>
      </div>
      <div className='relative flex items-center justify-between'>
        <div className='w-[99%] absolute top-1/2 left-0 h-1 bg-gray-300 rounded-full -translate-y-1/2' />
        <div
          className={`absolute top-1/2 left-0 h-1 bg-orange-400 rounded-full -translate-y-1/2 transition-all duration-500 ease-out ${
            step === 1
              ? 'w-0'
              : step === 2
              ? 'w-1/3'
              : step === 3
              ? 'w-2/3'
              : 'w-full'
          }`}
        />
        {[1, 2, 3, 4].map((num) => (
          <div
            key={num}
            className={`relative w-12 h-12 rounded-full flex items-center justify-center text-lg font-semibold font-mont z-10 transition-all duration-300 shadow-inner ${
              num <= step
                ? 'text-primary-foreground bg-secondary scale-100'
                : 'text-primary/85 bg-primary-foreground scale-90'
            }`}
          >
            {num}
          </div>
        ))}
      </div>
    </div>
  );
};
