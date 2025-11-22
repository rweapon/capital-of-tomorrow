import { useTranslations } from 'next-intl';
import React from 'react';

import { Accordion, AccordionItem } from '@/components';

export const VipAccordion = () => {
  const t = useTranslations('apply_vip.vipData');

  const vipData: AccordionItem[] = [
    {
      title: t('one.title'),
      content: t('one.content'),
    },
    {
      title: t('two.title'),
      content: t('two.content'),
    },
    {
      title: t('three.title'),
      content: t('three.content'),
    },
    {
      title: t('four.title'),
      content: t('four.content'),
    },
    {
      title: t('five.title'),
      content: t('five.content'),
    },
    {
      title: t('six.title'),
      content: t('six.content'),
    },
    {
      title: t('seven.title'),
      content: t('seven.content'),
    },
    {
      title: t('eight.title'),
      content: t('eight.content'),
    },
    {
      title: t('nine.title'),
      content: t('nine.content'),
    },
  ];

  const initialActives = Array.from({ length: vipData.length }, (_, i) => i);

  return (
    <>
      <Accordion
        title={t('title')}
        items={vipData}
        initialActives={initialActives}
      />
      <div className='container text-primary-foreground'>
        <h1 className='font-akira text-xl md:text-2xl lg:text-3xl'>
          {t('paragraph')}
        </h1>
      </div>
    </>
  );
};
