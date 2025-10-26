import { useTranslations } from 'next-intl';
import React from 'react';

export function ApplyHero() {
  const t = useTranslations('apply.hero');

  return (
    <section className='container text-primary-foreground'>
      <h1 className='font-akira text-2xl md:text-3xl lg:text-5xl mb-6 lg:mb-12'>
        {t('title')}
      </h1>
      <p className='font-mont text-base sm:text-lg md:text-xl lg:text-2xl font-light md:leading-9'>
        {t('content')}
      </p>
    </section>
  );
}
