import { Link } from 'i18n/navigation';
import { Locale } from 'i18n/routing';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import React from 'react';

import { NavigationKeys } from '@/constant/data';
import { imagePrefix } from '@/constant/env';

type LandingEventsProps = {
  locale: Locale;
};

export const LandingEvents = ({ locale }: LandingEventsProps) => {
  const t = useTranslations('landing.events');

  return (
    <section className='z-10 bg-background w-full py-8 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 flex flex-col gap-3 landing-section'>
      <h2 className='font-akira font-extrabold text-xl sm:text-3xl xl:text-5xl w-min'>
        {t('title')}
      </h2>
      <p className='font-mont font-light text-base sm:text-lg lg:text-2xl'>
        {t('paragraph')}
      </p>
      <div className='h-72 flex'>
        <Link
          href={`/${NavigationKeys.EVENT}`}
          locale={locale}
          className='hover:opacity-90 transition-all'
        >
          <Image
            src={`${imagePrefix}/landing_event.svg`}
            alt='badge'
            width={247}
            height={400}
            className='h-auto lg:max-w-xs xl:max-w-lg'
          />
        </Link>
      </div>
    </section>
  );
};
