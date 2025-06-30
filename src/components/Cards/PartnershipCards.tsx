'use client';
import Card from './Card';

import { IPartnershipTier } from '@/types/Card.interfaces';

const partnershipTiers: IPartnershipTier[] = [
  {
    title: 'VISIBILITY PARTNER',
    price: '1500',
    listItems: [
      'Logo on the website and printed materials',
      'Branding in the welcome zone',
      'Partner certificate',
      'Access to photo and video materials',
    ],
  },
  {
    title: 'COLLABORATION PARTNER',
    price: '3000',
    listItems: [
      'Everything from the Visibility package',
      'Interactive brand activity',
      'Invitation to a private partner dinner',
      'Own area for networking/branding',
      'Possibility to provide a mentor or speaker',
    ],
  },
  {
    title: 'IMPACT PARTNER',
    price: '7000',
    listItems: [
      'Everything from the Collaboration package',
      'General partner status',
      'Brand video at the opening',
      'Presentation of the grant to the participant',
      'Personal promotional zone',
    ],
  },
];

export const PartnershipCards = () => {
  return (
    <div className=' mx-auto mb-4 flex max-w-[1440px]  flex-col items-center sm:mx-24 sm:mb-10 lg:mb-[90px]'>
      <h2 className='font-akira pb-4 text-center text-3xl font-extrabold text-[#f8f7f5] sm:pb-8 md:text-4xl lg:pb-12 lg:text-5xl'>
        Conditions of Partnership
      </h2>
      <div className='flex flex-wrap justify-center gap-8'>
        {partnershipTiers.map((tier) => (
          <Card
            key={tier.title}
            layout='partnership'
            title={tier.title}
            price={tier.price}
            listItems={tier.listItems}
            width='360px'
            height='380px'
            backgroundType='overlay-gradient'
            backgroundColor='#2D2D2D'
            textColor='#FFFFFF'
            buttonBackgroundType='solid'
            buttonBackgroundColor='#E3AF64'
            buttonTextColor='#1E1E1E'
            borderColor='#606060'
            shadow='0 4px 4px 0 rgba(0, 0, 0, 0.25)'
            buttonWidth='280px'
            buttonHeight='50px'
            opacity={0.5}
          />
        ))}
      </div>
    </div>
  );
};
