import { Link } from 'i18n/navigation';
import { Locale } from 'i18n/routing';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import React from 'react';

import { Button } from '@/components';

import { NavigationKeys } from '@/constant/data';
import { imagePrefix } from '@/constant/env';
import { FlipClock } from '@/views/Home/FlipClock/FlipClock';

type HomeHeroProps = { locale: Locale };

export const HomeHero = ({ locale }: HomeHeroProps) => {
  const t = useTranslations('home.hero');

  return (
    <section className='flex w-full flex-col px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 mb-2 sm:mb-20 md:mb-22 overflow-hidden sm:overflow-visible header-buffer'>
      <div className='relative flex w-full flex-col justify-between gap-4 sm:flex-row xl:gap-20 xl:px-10'>
        <div className='flex flex-col gap-2 md:gap-5 max-w-80 sm:max-w-sm md:max-w-md xl:max-w-2xl'>
          <h1 className='font-akira text-4xl font-bold tracking-[-0.26px] text-[#f8f7f5] sm:text-5xl sm:font-extrabold sm:tracking-normal xl:text-[64px]'>
            {t('title')}
          </h1>
          <p className='font-monda text-base font-normal tracking-[-1.20px] text-[#ffffffc2] md:text-lg lg:text-xl'>
            {t('description')}
          </p>
          <FlipClock />
        </div>
        <div className='absolute right-4 top-0 sm:right-[unset] sm:relative sm:w-full min-w-10 md:max-w-32 xl:max-w-52'>
          <Image
            src={`${imagePrefix}/tower_test.svg`}
            alt='Burj Khalifa'
            width={237}
            height={929}
            className='max-w-[unset] !w-40 md:max-w-40 lg:max-w-52 absolute top-0 -left-12 md:-left-10 lg:-left-12 2xl:left-0 tower'
          />
        </div>
        <div className='flex flex-col gap-14 sm:gap-4 md:gap-10 flex-shrink-0'>
          <p className='w-fit leading-normal  font-mont sm:font-akira text-base sm:font-bold tracking-[-0.16px] text-[#f8f7f5] sm:text-2xl md:text-3xl lg:4xl sm:!leading-[120%] md:!leading-[140%]'>
            {t('location')}
            <br />
            {t('month')}
            <br />
            {t('year')}
          </p>

          <Link
            href={`/${NavigationKeys.EVENT}#${NavigationKeys.PARTICIPATE}`}
            locale={locale}
          >
            <Button className='w-full tracking-tight ' size='lg'>
              {t('button')}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
