import { Locale } from 'i18n/routing';
import { useTranslations } from 'next-intl';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import Card from '@/components/Card/Card';
import { IPartnershipTier } from '@/components/Card/types';

import { NavigationKeys } from '@/constant/data';

type PartnershipCardsProps = { locale: Locale };

export const PartnershipCards = ({ locale }: PartnershipCardsProps) => {
  const t = useTranslations('home.partnership.tiers');

  const partnershipTiers: IPartnershipTier[] = [
    {
      title: t('one.title'),
      price: t('one.price'),
      listItems: [
        t('one.listItems.one'),
        t('one.listItems.two'),
        t('one.listItems.three'),
        t('one.listItems.four'),
        t('one.listItems.five'),
        t('one.listItems.six'),
      ],
      link: '/',
      locale,
    },
    {
      title: t('two.title'),
      price: t('two.price'),
      listItems: [
        t('two.listItems.one'),
        t('two.listItems.two'),
        t('two.listItems.three'),
        t('two.listItems.four'),
      ],
      link: '/',
      locale,
    },
    {
      title: t('three.title'),
      price: t('three.price'),
      listItems: [
        t('three.listItems.one'),
        t('three.listItems.two'),
        t('three.listItems.three'),
        t('three.listItems.four'),
        t('three.listItems.five'),
        t('three.listItems.six'),
      ],
      link: '/',
      locale,
    },
  ];

  return (
    <section className='py-12  lg:px-8' id={NavigationKeys.PARTNERS}>
      <h2 className='font-akira py-12 text-center text-3xl font-extrabold text-[#f8f7f5] md:text-4xl lg:text-5xl'>
        {t('title')}
      </h2>

      <div className='mx-auto hidden max-w-[1440px] flex-wrap justify-center gap-8 md:flex'>
        {partnershipTiers.map((tier) => (
          <Card
            key={tier.title}
            layout='partnership'
            title={tier.title}
            price={tier.price}
            listItems={tier.listItems}
            link={tier.link}
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
            locale={locale}
          />
        ))}
      </div>
      <div className='relative flex h-[560px] w-full justify-center md:hidden'>
        <Swiper
          slidesPerView='auto'
          className='timeline-swiper'
          breakpoints={{
            0: { slidesOffsetBefore: 0, slidesOffsetAfter: 0 },
            420: { slidesOffsetBefore: 30, slidesOffsetAfter: 30 },
            560: { slidesOffsetBefore: 100, slidesOffsetAfter: 100 },
            640: { slidesOffsetBefore: 150, slidesOffsetAfter: 150 },
          }}
        >
          {partnershipTiers.map((tier, index) => (
            <SwiperSlide
              key={index}
              className='flex h-full items-center justify-center !w-[380px] p-2'
            >
              <Card
                key={tier.title}
                layout='partnership'
                title={tier.title}
                price={tier.price}
                listItems={tier.listItems}
                link={tier.link}
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
                locale={locale}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
