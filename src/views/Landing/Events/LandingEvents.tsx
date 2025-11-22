import Image from 'next/image';
import { useTranslations } from 'next-intl';
import React from 'react';

import { imagePrefix } from '@/constant/env';

export const LandingEvents = () => {
  const t = useTranslations('landing.events');

  return (
    <section className='relative'>
      <div className=' mb-96'>
        <div className='z-[-1] absolute top-0 w-full rounded-full aspect-square landing-circle' />
      </div>
      <div className='z-10 bg-background w-full py-8 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 flex flex-col gap-3'>
        <h2 className='font-akira font-extrabold text-5xl w-min'>
          {t('title')}
        </h2>
        <p className='font-mont font-light text-2xl'>{t('paragraph')}</p>
        <div className='h-72'>
          <Image
            src={`${imagePrefix}/landing_event.svg`}
            alt='badge'
            width={247}
            height={400}
            className='h-auto lg:max-w-xs xl:max-w-lg'
          />
        </div>
      </div>
    </section>
  );
};
