import Image from 'next/image';
import { useTranslations } from 'next-intl';
import React from 'react';

import { cn } from '@/lib/utils';

import { imagePrefix } from '@/constant/env';
import { partnerLogos } from '@/views/Home/PartnershipSection/data';
import { IPartnershipContent } from '@/views/Home/PartnershipSection/types';

export const PartnershipSection: React.FC = () => {
  const t = useTranslations('home.partnership.advantages');

  const partnershipContent: IPartnershipContent = {
    title: t('title'),
    advantages: [
      {
        title: t('one.title'),
        text: t('one.text'),
      },
      {
        title: t('two.title'),
        text: t('two.text'),
      },
      {
        title: t('three.title'),
        text: t('three.text'),
      },
      {
        title: t('four.title'),
        text: t('four.text'),
      },
    ],
  };

  return (
    <section className='flex w-full items-center justify-center px-3 sm:px-12 xl:px-24'>
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
        <div className='relative contents sm:flex min-h-[400px] flex-col sm:min-h-[450px] md:min-h-[500px] lg:min-h-[500px] lg:flex-row-reverse'>
          <div className='sm:content self-end'>
            <Image
              src={`${imagePrefix}/Partnership__advantages.jpg`}
              alt='Daria'
              width={557}
              height={561}
              className='absolute right-0 top-0 md:top-20 lg:top-10 w-40 md:w-72 lg:w-full lg:max-w-md h-auto xl:max-w-lg clip-image-partnership'
            />
          </div>

          <div className='flex h-full w-full flex-col justify-end gap-10 md:gap-4 lg:gap-8  text-white p-6 lg:p-12'>
            <h1 className='font-akira leading-auto w-[145px] leading-[1.15] sm:w-auto text-xl md:text-2xl lg:text-3xl xl:text-[40px]'>
              {partnershipContent.title}
            </h1>
            <ul className='space-y-0 max-w-screen-md'>
              {partnershipContent.advantages.map((item, index) => (
                <li
                  key={index}
                  className={cn(index < 2 && 'md:max-w-sm lg:max-w-[unset]')}
                >
                  <div>
                    <label className='font-mont flex items-center justify-between pb-2 text-sm md:text-lg font-medium leading-none  text-white sm:cursor-auto sm:pb-2 sm:text-base'>
                      {item.title}
                    </label>

                    <p
                      className={`font-mont ${
                        index !== 3
                          ? 'mb-3 border-b border-[#F8F7F5]/75 pb-[5px] sm:mb-4 sm:pb-4'
                          : ''
                      } text-xs font-normal leading-4 text-white/80 sm:text-sm lg:text-base`}
                    >
                      {item.text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className='w-full px-6 pb-4 sm:mt-4 sm:px-[50px] sm:pb-6 xl:mt-2 xl:pb-12'>
          <div className='flex  items-center justify-between gap-4'>
            {partnerLogos.map((logo, index) => (
              <div
                key={index}
                className={`h-[ flex${
                  logo.height
                }px] w-[calc(25%-1rem)] justify-center md:w-auto md:flex-1 ${
                  index >= 5 ? 'hidden md:flex' : 'flex'
                }`}
              >
                <Image
                  src={`${imagePrefix}/${logo.type}.svg`}
                  alt='Partner logo'
                  width={logo.height * 2}
                  height={logo.height}
                  className='h-full w-auto max-w-full object-contain'
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
