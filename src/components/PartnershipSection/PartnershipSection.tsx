import Image from 'next/image';
import React from 'react';

import {
  IPartnerLogo,
  IPartnershipContent,
} from '@/types/PartnershipSection.interfaces';

const partnerLogos: IPartnerLogo[] = [
  { type: 'ad__dad', height: 44 },
  { type: 'club', height: 44 },
  { type: 'ad__dad', height: 44 },
  { type: 'club', height: 44 },
  { type: 'ad__dad', height: 44 },
  { type: 'club', height: 44 },
  { type: 'ad__dad', height: 44 },
];

const partnershipContent: IPartnershipContent = {
  title: 'PARTNERSHIP ADVANTAGES',
  advantages: [
    {
      title: 'Increased brand awareness.',
      text: 'Your brand will gain visibility in front of the target audience through all communication channels of the event - from social media to offline space.',
    },
    {
      title: 'Access to the audience of young entrepreneurs and startups.',
      text: 'This is a chance to interact directly with ambitious founders, innovators, and future business leaders - those who are shaping the next generation economy.',
    },
    {
      title: 'Stand out among colleagues and competitors.',
      text: 'Participation in the forums program gives you the opportunity to declare yourself as a brand that supports development, innovation, and progress.',
    },
    {
      title: 'Direct interaction with participants.',
      text: 'You will be able to present your products, get feedback, network and find new customers or partners.',
    },
  ],
};

export const PartnershipSection: React.FC = () => {
  return (
    <div className='flex w-full items-center justify-center px-12 xl:px-24'>
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
              backgroundImage: 'url(/Partnership__advantages.jpg)',
              maskImage:
                'radial-gradient(ellipse at 79% 30%, black 25%, transparent 68%)',
              WebkitMaskImage:
                'radial-gradient(ellipse at 79% 30%, black 25%, transparent 68%)',
              transform: 'translate(60px, -30px)',
            }}
          />

          <div className='flex w-full flex-col px-4 text-white md:px-8 md:pt-8 lg:pl-4 lg:pr-0 xl:pl-6 xl:pt-12'>
            <h1 className='font-akira leading-auto leading-[1.15] lg:pl-4 lg:text-3xl xl:pl-[22px] xl:text-[40px]'>
              {partnershipContent.title}
            </h1>
            <div className='mt-[32px] xl:pl-9'>
              <ul className='space-y-0'>
                {partnershipContent.advantages.map((item, index) => (
                  <li key={index}>
                    <h2 className='font-mont pb-[10px] text-base font-medium leading-6 text-white'>
                      {item.title}
                    </h2>
                    <p
                      className={`font-mont ${
                        index != 3
                          ? 'mb-[14px] border-b border-[#F8F7F5]/75 pb-[14px]'
                          : ''
                      } text-[13px] font-normal leading-4 text-white/80`}
                    >
                      {item.text}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className='mt-[74px] w-full px-[50px] pb-12'>
          <div className='flex items-center justify-between gap-4'>
            {partnerLogos.map((logo, index) => (
              <div
                key={index}
                className={`hh- flex flex-1 justify-center ${logo.height}px`}
              >
                <Image
                  src={`/${logo.type}.svg`}
                  alt='Partner logo'
                  width={logo.height * 2}
                  height={logo.height}
                  className=' h-full w-auto max-w-full object-contain'
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
