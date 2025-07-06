import Image from 'next/image';
import React from 'react';

import { basePath, imagePrefix } from '@/constant/env';
import {
  partnerLogos,
  partnershipContent,
} from '@/views/Home/PartnershipSection/data';

export const PartnershipSection: React.FC = () => {
  return (
    <div className='flex w-full items-center justify-center px-3 sm:px-12 xl:px-24'>
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
        <div className='relative flex min-h-[400px] flex-col sm:min-h-[450px] md:min-h-[500px] lg:h-[500px] lg:flex-row-reverse'>
          <div
            className='h-64 w-full bg-cover bg-top sm:h-72 md:h-96 lg:h-full lg:w-[567px] lg:min-w-[567px]'
            style={{
              backgroundImage: `url(${basePath}${imagePrefix}/Partnership__advantages.jpg)`,
              maskImage:
                'radial-gradient(ellipse at 79% 30%, black 25%, transparent 68%)',
              WebkitMaskImage:
                'radial-gradient(ellipse at 79% 30%, black 25%, transparent 68%)',
              transform: 'translate(60px, -30px)',
            }}
          />

          <div className='flex w-full flex-col px-6 py-[28px] text-white md:px-8 md:py-0 md:pt-8 lg:pl-4 lg:pr-0 xl:pl-6 xl:pt-12'>
            <h1 className='font-akira leading-auto w-[145px] text-[14px] leading-[1.15] sm:w-auto lg:pl-4 lg:text-3xl xl:pl-[22px] xl:text-[40px]'>
              {partnershipContent.title}
            </h1>
            <div className='mt-12 md:mt-[32px] xl:pl-9'>
              <ul className='space-y-0'>
                {partnershipContent.advantages.map((item, index) => (
                  <li key={index} className='group'>
                    <div className='sm:block'>
                      <input
                        type='checkbox'
                        id={`accordion-${index}`}
                        className='peer absolute opacity-0'
                      />
                      <label
                        htmlFor={`accordion-${index}`}
                        className='font-mont flex cursor-pointer items-center justify-between pb-[4px] text-[12px] font-medium leading-none  text-white sm:cursor-auto sm:pb-[10px] sm:text-base'
                      >
                        <span>{item.title}</span>
                        <span className='ml-2 inline-block size-2 rotate-45 border-b border-r border-white transition-transform duration-300 group-has-[input:checked]:rotate-[225deg] sm:hidden'></span>
                      </label>

                      <div className='max-h-0 overflow-hidden transition-all duration-300 peer-checked:max-h-[500px] sm:max-h-none'>
                        <p
                          className={`font-mont ${
                            index !== 3
                              ? 'mb-[5px] border-b border-[#F8F7F5]/75 pb-[5px] sm:mb-[14px] sm:pb-[14px]'
                              : ''
                          } text-[10px] font-normal leading-4 text-white/80 sm:text-[13px]`}
                        >
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className='mt-6 w-full px-6 pb-4 sm:mt-12 sm:px-[50px] sm:pb-6 xl:mt-[74px] xl:pb-12'>
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
                  src={`${basePath}${imagePrefix}/${logo.type}.svg`}
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
    </div>
  );
};
