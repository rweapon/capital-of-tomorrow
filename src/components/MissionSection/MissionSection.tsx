import Image from 'next/image';
import { useTranslations } from 'next-intl';
import React from 'react';

import { imagePrefix } from '@/constant/env';

export interface IMissionContent {
  description: string[];
  smallDescription: string[];
}

export interface IMissionGoals {
  items: string[];
}

export const MissionSection: React.FC = () => {
  const t = useTranslations('home.mission');

  const missionContent: IMissionContent = {
    description: [t('description.one'), t('description.two')],
    smallDescription: [t('smallDescription.one'), t('smallDescription.two')],
  };

  const missionGoals = [
    t('goals.one'),
    t('goals.two'),
    t('goals.three'),
    t('goals.four'),
  ];

  return (
    <div className='flex w-full items-center justify-center px-4 sm:px-6 md:px-8 xl:px-24'>
      <div
        className='relative w-full max-w-[1440px] overflow-hidden rounded-2xl md:rounded-3xl'
        style={{
          background: 'rgba(248, 247, 245, 0.05)',
          backdropFilter: 'blur(9.6px)',
          boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.25)',
        }}
      >
        <div
          className='pointer-events-none absolute inset-0 rounded-2xl md:rounded-3xl'
          style={{
            background:
              'linear-gradient(to top left, #1f2937, #6b7280, #d1d5db)',
            mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            maskComposite: 'xor',
            WebkitMask:
              'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            padding: '2px',
          }}
        />
        <div className='relative flex flex-row-reverse sm:flex-row min-h-80'>
          <div className='absolute right-0 top-0 sm:static min-h-auto w-1/2 sm:w-full max-w-lg'>
            <Image
              src={`${imagePrefix}/our__mission.png`}
              alt='Dmitry'
              width={502}
              height={415}
              className='h-auto lg:max-w-xs xl:max-w-lg clip-image'
            />
          </div>

          <div className='flex w-full flex-col p-8 pr-2 md:pl-[unset] text-white md:p-14 lg:p-16'>
            <h1 className='font-akira mb-2 text-lg font-extrabold sm:mb-4 sm:text-3xl md:mb-5 md:text-[40px]'>
              {t('title')}
            </h1>
            <p className='hidden lg:block font-mont line-clamp-[9] text-sm font-normal leading-[13px] text-[#F8F7F5E5]/70 lg:line-clamp-[none]  sm:space-y-5 md:text-base'>
              {missionContent.description[0]}
              <br /> {missionContent.description[1]}
            </p>
            <p className='hidden sm:block lg:hidden font-mont text-base text-[#F8F7F5E5]/90   '>
              {t('adaptiveDescription')}
            </p>
            <div className='block sm:hidden font-mont text-base text-[#F8F7F5E5]/90'>
              <p className='w-[220px]'>{missionContent.smallDescription[0]}</p>
              {missionContent.smallDescription[1]}
            </div>
          </div>
        </div>

        <div className='hidden w-full px-5 pb-6 lg:block sm:px-6 sm:pb-8 md:px-20 md:pb-12 md:pt-0'>
          <div className='py-6 sm:py-7 md:py-8 md:pt-0'>
            <div className='h-px w-full bg-white/20' />
          </div>
          <div className='flex flex-col justify-between sm:flex-row'>
            {missionGoals.map((goal, index) => (
              <h2
                key={index}
                className='font-mont xs:text-sm xs:text-left text-start text-xs font-bold text-white/80 sm:text-base'
              >
                {goal}
              </h2>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
