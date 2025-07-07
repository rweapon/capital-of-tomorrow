import dynamic from 'next/dynamic';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import React from 'react';

import { cn } from '@/lib/utils';

import { Button } from '@/components';

import { ProgressBar, progressStep } from '@/views/Apply/ProgressBar';
const StepOne = dynamic(
  () => import('./StepOne').then((res) => res.default as React.FC),
  {
    ssr: false,
  }
);
type Props = {
  params: { step: string };
};

export function generateStaticParams() {
  return [{ step: '1' }, { step: '2' }, { step: '3' }, { step: '4' }];
}

const Apply = ({ params }: Props) => {
  const numStep = parseInt(params.step);

  // Validate step
  if (![1, 2, 3, 4].includes(numStep)) {
    notFound();
  }

  return (
    <section className='container flex flex-col gap-20'>
      <ProgressBar step={numStep as keyof typeof progressStep} />
      {numStep === 1 && <StepOne />}
      <div
        className={cn(
          'flex items-center w-full',
          numStep === 1 ? 'justify-end' : 'justify-between'
        )}
      >
        {numStep > 1 && (
          <Link href={`/apply/${numStep - 1}`}>
            <Button
              variant='secondary'
              className='font-semibold !text-xl py-5 px-14'
            >
              Previous
            </Button>
          </Link>
        )}
        {numStep < 4 && (
          <Link href={`/apply/${numStep + 1}`}>
            <Button className='font-semibold !text-xl py-5 px-14'>Next</Button>
          </Link>
        )}
      </div>
    </section>
  );
};

export default Apply;
