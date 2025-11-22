import { useTranslations } from 'next-intl';
import React from 'react';

export const LandingHero = () => {
  const t = useTranslations('landing.hero');

  return (
    <section className='flex justify-between gap-24 w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 text-background'>
      <div>
        <h1 className='font-akira text-8xl font-extrabold tracking-wider mb-3'>
          {t('title')}
        </h1>
        <p className='font-mont text-4xl font-extralight '>{t('subtitle')}</p>
      </div>
      <div className='font-mont text-base max-w-72 self-center h-min leading-snug '>
        {t('paragraph')}
      </div>
    </section>
  );
};
