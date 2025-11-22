import { useTranslations } from 'next-intl';
import React, { memo } from 'react';

import { cn } from '@/lib/utils';

import { Button } from '@/components';

export type FormButtonsProps = {
  numStep: number;
  isValid: boolean;
  isVip?: boolean;
  onPrevious: VoidFunction;
  onNext: VoidFunction;
};

export const FormButtons = memo(
  ({ numStep, onPrevious, onNext, isValid, isVip }: FormButtonsProps) => {
    const t = useTranslations('apply.steps.buttons');

    return (
      <div
        className={cn(
          'flex items-center w-full',
          numStep === 1 ? 'justify-end' : 'justify-between'
        )}
      >
        {numStep > 1 && (
          <div className='flex relative'>
            <Button
              variant='secondary'
              className={cn(
                'font-semibold !text-base sm:!text-xl p-3 md:p-5 lg:py-5 lg:px-14',
                isVip && 'previous-button text-foreground z-10'
              )}
              onClick={onPrevious}
            >
              {t('back')}
            </Button>
            {isVip && (
              <div className='absolute left-0 top-1  h-full w-full previous-button-bg rounded-3xl'></div>
            )}
          </div>
        )}
        <div className='flex relative'>
          <Button
            className={cn(
              'font-semibold !text-base sm:!text-xl p-3 md:p-5 lg:py-5 lg:px-14',
              isVip && 'next-button text-foreground z-10'
            )}
            onClick={onNext}
            disabled={!isValid}
          >
            {numStep !== 4 ? t('next') : t('pay')}
          </Button>
          {isVip && (
            <div className='absolute left-0 top-1  h-full w-full next-button-bg rounded-3xl'></div>
          )}
        </div>
      </div>
    );
  }
);
