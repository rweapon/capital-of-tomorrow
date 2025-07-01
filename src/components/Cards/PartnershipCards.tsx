import Card from './Card';

import { IPartnershipTier } from '@/types/Card.interfaces';

const partnershipTiers: IPartnershipTier[] = [
  {
    title: 'VISIBILITY PARTNER',
    price: '1500',
    listItems: [
      'Logo on the website and printed materials',
      'Roll-up in the welcome area',
      'Partner certificate ',
      'Access to photo and video materials',
      'Access to the chats',
      'Brochure stand in the ballroom, 3 posts in social media',
    ],
  },
  {
    title: 'COLLABORATION PARTNER',
    price: '3000',
    listItems: [
      'Everything from the Official package',
      'Own area for networking/branding ',
      'Stand table with company representative and merchandising',
      "5 posts on social media and 1 vertical video about the company; company brochure added to participants' merchandise",
    ],
  },
  {
    title: 'IMPACT PARTNER',
    price: '7000',
    listItems: [
      'Everything from the Collaboration package',
      'Logo of the company will be provided on our landing and event page forever',
      'Opening and during breaks',
      'Presentation of the grant to the participant',
      'Mention of your logo and slogan in every video on our social media channels for the entire period before the project and 1 month afterwards',
      'Thank-you speech from the head of Vostochnik Events',
    ],
  },
];

export const PartnershipCards = () => {
  return (
    <div className='py-12  lg:px-8'>
      <h2 className='font-akira py-12 text-center text-3xl font-extrabold text-[#f8f7f5] md:text-4xl lg:text-5xl'>
        Conditions of Partnership
      </h2>

      <div className='mx-auto hidden max-w-[1440px] flex-wrap justify-center gap-8 md:flex'>
        {partnershipTiers.map((tier) => (
          <Card
            key={tier.title}
            layout='partnership'
            title={tier.title}
            price={tier.price}
            listItems={tier.listItems}
            width='360px'
            height='524px'
            backgroundType='overlay-gradient'
            backgroundColor='#2D2D2D'
            textColor='#FFFFFF'
            buttonBackgroundType='solid'
            buttonBackgroundColor='#E3AF64'
            buttonTextColor='#1E1E1E'
            borderColor='#c7c1c1'
            shadow='0 4px 4px 0 rgba(0, 0, 0, 0.25)'
            buttonWidth='280px'
            buttonHeight='50px'
            opacity={0.3}
          />
        ))}
      </div>

      <div className='relative flex h-[540px] w-full justify-center overflow-hidden md:hidden'>
        <div className='relative z-10'>
          <Card
            {...partnershipTiers[0]}
            layout='partnership'
            width='360px'
            height='524px'
            backgroundType='overlay-gradient'
            backgroundColor='#2D2D2D'
            textColor='#FFFFFF'
            buttonBackgroundType='solid'
            buttonBackgroundColor='#E3AF64'
            buttonTextColor='#1E1E1E'
            borderColor='#c7c1c1'
            shadow='0 4px 4px 0 rgba(0, 0, 0, 0.25)'
            buttonWidth='280px'
            buttonHeight='50px'
            opacity={0.3}
          />
        </div>

        <div className='absolute left-1/2 top-0 z-0 -translate-x-[160%] translate-y-[-7px] rotate-[5deg]'>
          <Card
            {...partnershipTiers[1]}
            layout='partnership'
            width='360px'
            height='524px'
            backgroundType='overlay-gradient'
            backgroundColor='#2D2D2D'
            textColor='#FFFFFF'
            buttonBackgroundType='solid'
            buttonBackgroundColor='#E3AF64'
            buttonTextColor='#1E1E1E'
            borderColor='#c7c1c1'
            shadow='0 4px 4px 0 rgba(0, 0, 0, 0.25)'
            buttonWidth='280px'
            buttonHeight='50px'
            opacity={0.3}
          />
        </div>

        <div className='absolute left-1/2 top-0 z-0 translate-x-[60%] translate-y-[-7px]  rotate-[-5deg]'>
          <Card
            {...partnershipTiers[2]}
            layout='partnership'
            width='360px'
            height='524px'
            backgroundType='overlay-gradient'
            backgroundColor='#2D2D2D'
            textColor='#FFFFFF'
            buttonBackgroundType='solid'
            buttonBackgroundColor='#E3AF64'
            buttonTextColor='#1E1E1E'
            borderColor='#c7c1c1'
            shadow='0 4px 4px 0 rgba(0, 0, 0, 0.25)'
            buttonWidth='280px'
            buttonHeight='50px'
            opacity={0.3}
          />
        </div>
      </div>
    </div>
  );
};
