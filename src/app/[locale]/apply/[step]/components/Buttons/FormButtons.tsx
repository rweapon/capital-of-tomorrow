import { useTranslations } from 'next-intl';
import React, { memo } from 'react';

import { cn } from '@/lib/utils';

import { Button } from '@/components';

export type FormButtonsProps = {
  numStep: number;
  isValid: boolean;
  onPrevious: VoidFunction;
  onNext: VoidFunction;
};

export const FormButtons = memo(
  ({ numStep, onPrevious, onNext, isValid }: FormButtonsProps) => {
    const t = useTranslations('apply.steps.buttons');

    return (
      <div
        className={cn(
          'flex items-center w-full',
          numStep === 1 ? 'justify-end' : 'justify-between'
        )}
      >
        {numStep > 1 && (
          <Button
            variant='secondary'
            className='font-semibold !text-base sm:!text-xl p-3 md:p-5 lg:py-5 lg:px-14'
            onClick={onPrevious}
          >
            {t('back')}
          </Button>
        )}
        <Button
          className='font-semibold !text-base sm:!text-xl p-3 md:p-5 lg:py-5 lg:px-14 !tracking-normal'
          onClick={onNext}
          disabled={!isValid}
        >
          {numStep !== 4 ? t('next') : t('pay')}
        </Button>
      </div>
    );
  }
);
