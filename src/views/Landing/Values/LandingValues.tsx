import { useTranslations } from 'next-intl';
import React from 'react';

export const LandingValues = () => {
  const t = useTranslations('landing.values');

  return (
    <section className='flex flex-col gap-10 w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 text-background'>
      <h2 className='font-akira font-extrabold text-5xl'>{t('title')} </h2>
      <div>
        <ul className='w-full *:w-full *:border-t-background *:border-t-[1px] last:border-b-[1px] font-mont font-medium text-xl *:py-2'>
          <li>{t('list.one')}</li>
          <li>{t('list.two')}</li>
          <li>{t('list.three')}</li>
          <li>{t('list.four')}</li>
          <li>{t('list.five')}</li>
          <li>{t('list.six')}</li>
          <li>{t('list.seven')}</li>
          <li>{t('list.eight')}</li>
        </ul>
      </div>
    </section>
  );
};
