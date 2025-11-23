'use client';

import { Locale } from 'i18n/routing';
import { useTranslations } from 'next-intl';
import React from 'react';

import {
  Accordion,
  AccordionItem,
  MissionSection,
  SimpleTextBlocks,
  Timeline,
} from '@/components';

import { PartnershipCards, TicketCards } from '@/views/Home/Cards';
import HomeHero from '@/views/Home/Hero';
import PartnershipSection from '@/views/Home/PartnershipSection';
import Scroll from '@/views/Home/Scroll';

type HomeContentsProps = {
  locale: Locale;
};

export const HomeContents = ({ locale }: HomeContentsProps) => {
  const t = useTranslations('home.accordions');

  const programData: AccordionItem[] = [
    {
      title: t('program.data.one.title'),
      content: t('program.data.one.content'),
    },
    {
      title: t('program.data.two.title'),
      content: t('program.data.two.content'),
    },
    {
      title: t('program.data.three.title'),
      content: t('program.data.three.content'),
    },
    {
      title: t('program.data.four.title'),
      content: t('program.data.four.content'),
    },
    {
      title: t('program.data.five.title'),
      content: t('program.data.five.content'),
    },
    {
      title: t('program.data.six.title'),
      content: t('program.data.six.content'),
    },
    {
      title: t('program.data.seven.title'),
      content: t('program.data.seven.content'),
    },
  ];

  const qAData: AccordionItem[] = [
    {
      title: t('qa.data.one.title'),
      content: t('qa.data.one.content'),
    },
    {
      title: t('qa.data.two.title'),
      content: t('qa.data.two.content'),
    },
    {
      title: t('qa.data.three.title'),
      content: t('qa.data.three.content'),
    },
    {
      title: t('qa.data.four.title'),
      content: t('qa.data.four.content'),
    },
    {
      title: t('qa.data.five.title'),
      content: t('qa.data.five.content'),
    },
    {
      title: t('qa.data.six.title'),
      content: t('qa.data.six.content'),
    },
    {
      title: t('qa.data.seven.title'),
      content: t('qa.data.seven.content'),
    },
    {
      title: t('qa.data.eight.title'),
      content: t('qa.data.eight.content'),
    },
    {
      title: t('qa.data.nine.title'),
      content: t('qa.data.nine.content'),
    },
    {
      title: t('qa.data.ten.title'),
      content: t('qa.data.ten.content'),
    },
  ];

  return (
    <>
      <HomeHero locale={locale} />
      <Scroll />
      <MissionSection />
      <Accordion
        title={t('program.title')}
        items={programData}
        extraContent={<SimpleTextBlocks />}
      />
      <Timeline />
      <TicketCards locale={locale} />
      <Scroll />
      <PartnershipSection />
      <PartnershipCards locale={locale} />
      {/* <ImageSlider /> */}
      <Accordion title={t('qa.title')} items={qAData} />
    </>
  );
};
