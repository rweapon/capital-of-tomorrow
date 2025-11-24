import { useTranslations } from 'next-intl';
import React from 'react';

import { Accordion, AccordionItem } from '@/components';

export const LandingSolutions = () => {
  const t = useTranslations('landing.solutions');

  const solutions: AccordionItem[] = [
    {
      title: t('list.one.title'),
      content: t('list.one.content'),
    },
    {
      title: t('list.two.title'),
      content: t('list.two.content'),
    },
    {
      title: t('list.three.title'),
      content: t('list.three.content'),
    },
    {
      title: t('list.four.title'),
      content: t('list.four.content'),
    },
  ];

  return (
    <section className='bg-background w-full py-10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 flex flex-col gap-4 !text-foreground'>
      <h2 className='font-akira font-extrabold text-xl lg:text-3xl xl:text-5xl '>
        {t('title')}
      </h2>
      <p className='font-mont font-light text-base md:text-xl'>
        {t('subtitle')}
      </p>
      <div className='accordion-wrapper'>
        <Accordion title='' items={solutions} textColor='black' />
      </div>
    </section>
  );
};
