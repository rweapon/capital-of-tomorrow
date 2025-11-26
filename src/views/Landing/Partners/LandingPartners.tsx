import Image from 'next/image';
import { useTranslations } from 'next-intl';
import React, { ReactElement } from 'react';

import { cn } from '@/lib/utils';

import { imagePrefix } from '@/constant/env';

type PartnerCardProps = {
  title: string;
  paragraph: string;
  image: ReactElement;
  isFirst?: boolean;
};

const PartnerCard = ({
  title,
  paragraph,
  image,
  isFirst = false,
}: PartnerCardProps) => {
  return (
    <article
      className={cn(
        'flex flex-col-reverse sm:flex-row items-center w-full bg-background px-4 sm:px-6 md:px-8 lg:px-12 gap-6',
        !isFirst && 'sm:flex-row-reverse'
      )}
    >
      <div className='flex flex-col gap-3'>
        <h3 className='font-akira text-base lg:text-lg'>{title}</h3>
        <p className='font-mont'>{paragraph}</p>
      </div>
      <div className={cn(!isFirst && 'justify-self-end')}>{image}</div>
    </article>
  );
};

export const LandingPartners = () => {
  const t = useTranslations('landing.partners');

  return (
    <section className='flex flex-col gap-4 bg-primary -landing-buffer landing-buffer landing-bottom-buffer -landing-bottom-buffer'>
      <h2 className='ml-4 sm:ml-6 md:ml-8 lg:ml-12 xl:ml-24 font-akira font-extrabold text-xl sm:text-3xl xl:text-5xl text-background'>
        {t('title')}
      </h2>
      <div className='flex flex-col md:flex-row gap-9 *:py-10'>
        <PartnerCard
          title={t('inex.title')}
          paragraph={t('inex.paragraph')}
          image={
            <Image
              src={`${imagePrefix}/inex.svg`}
              alt='INEX Service Design'
              width={350}
              height={85}
              className='h-auto lg:max-w-xs xl:max-w-lg'
            />
          }
          isFirst
        />
        <PartnerCard
          title={t('psychgeo.title')}
          paragraph={t('psychgeo.paragraph')}
          image={
            <Image
              src={`${imagePrefix}/psychGeo.svg`}
              alt='Psych Geo'
              width={152}
              height={116}
              className='h-auto lg:max-w-xs xl:max-w-lg'
            />
          }
        />
      </div>
    </section>
  );
};
