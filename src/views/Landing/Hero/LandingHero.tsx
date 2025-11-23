import { useTranslations } from 'next-intl';
import React from 'react';

export const LandingHero = () => {
  const t = useTranslations('landing.hero');

  return (
    <section className='flex flex-col md:flex-row justify-between gap-8 md:gap-24 w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 text-background'>
      <div>
        <h1 className='font-akira text-2xl sm:text-4xl lg:text-6xl 2xl:text-8xl font-extrabold tracking-wider md:mb-3'>
          {t('title')}
        </h1>
        <p className='font-mont md:text-xl lg:text-3xl 2xl:text-4xl font-extralight '>
          {t('subtitle')}
        </p>
      </div>
      <div className='font-mont text-xs md:text-base max-w-72 md:self-center h-min leading-snug '>
        {t('paragraph')}
      </div>
    </section>
  );
};
