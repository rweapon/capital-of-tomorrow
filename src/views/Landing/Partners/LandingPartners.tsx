import Image from 'next/image';
import { useTranslations } from 'next-intl';
import React from 'react';

import { imagePrefix } from '@/constant/env';

export const LandingPartners = () => {
  const t = useTranslations('landing.partners');

  return (
    <section className='flex gap-9 *:py-10'>
      <article className='flex items-center w-full bg-background pl-4 sm:pl-6 md:pl-8 lg:pl-12 xl:pl-24 pr-12'>
        <div className='flex flex-col gap-3 mr-4'>
          <h3 className='font-akira text-lg'>{t('inex.title')}</h3>
          <p className='font-mont'> {t('inex.paragraph')}</p>
        </div>
        <div className='justify-self-end'>
          <Image
            src={`${imagePrefix}/inex.svg`}
            alt='INEX Service Design'
            width={350}
            height={85}
            className='h-auto lg:max-w-xs xl:max-w-lg'
          />
        </div>
      </article>
      <article className='flex items-center w-full bg-background pr-4 sm:pr-6 md:pr-8 lg:pr-12 xl:pr-24 pl-12'>
        <div>
          <Image
            src={`${imagePrefix}/psychGeo.svg`}
            alt='Psych Geo'
            width={152}
            height={116}
            className='h-auto lg:max-w-xs xl:max-w-lg'
          />
        </div>
        <div className='flex flex-col gap-3 ml-4'>
          <h3 className='font-akira text-lg'> {t('psychgeo.title')}</h3>
          <p className='font-mont'> {t('psychgeo.paragraph')}</p>
        </div>
      </article>
    </section>
  );
};
