import { Locale } from 'i18n/routing';
import { useTranslations } from 'next-intl';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import Card, { ICardProps } from '@/components/Card/Card';

import { NavigationKeys } from '@/constant/data';

type TicketCardsProps = { locale: Locale };

export const TicketCards = ({ locale }: TicketCardsProps) => {
  const t = useTranslations('home.tickets');
  const tickets: ICardProps[] = [
    {
      title: t('fullyAndPartlyFunded.title'),
      listItems: [
        t('fullyAndPartlyFunded.listItems.one'),
        t('fullyAndPartlyFunded.listItems.two'),
        t('fullyAndPartlyFunded.listItems.three'),
        t('fullyAndPartlyFunded.listItems.four'),
        t('fullyAndPartlyFunded.listItems.five'),
      ],
      backgroundType: 'gold-gradient',
      backgroundColor: '#C1A875',
      textColor: '#1e1e1e',
      buttonBackgroundType: 'solid',
      buttonBackgroundColor: '#1e1e1e',
      buttonTextColor: '#D4AF37',
      buttonText: t('fullyAndPartlyFunded.buttonText'),
      borderColor: '#1e1e1e',
      shadow: '0 4px 4px 0 rgba(0, 0, 0, 0.25)',
      link: `/${NavigationKeys.APPLY}/1`,
      locale,
    },
    {
      title: t('scoutingProject.title'),
      opacity: 0.3,
      listItems: [
        t('scoutingProject.listItems.one'),
        t('scoutingProject.listItems.two'),
        t('scoutingProject.listItems.three'),
        t('scoutingProject.listItems.four'),
        t('scoutingProject.listItems.five'),
        t('scoutingProject.listItems.six'),
        t('scoutingProject.listItems.seven'),
      ],
      backgroundType: 'overlay-gradient',
      backgroundColor: '#2D2D2D',
      textColor: '#FFFFFF',
      listTextColor: '#fffc',
      buttonBackgroundType: 'solid',
      buttonBackgroundColor: '#E3AF64',
      buttonTextColor: '#1e1e1e',
      buttonText: t('scoutingProject.buttonText'),
      borderColor: '#c7c1c1',
      link: `/${NavigationKeys.APPLY}/1`,
      locale,
    },
    {
      title: t('invitationLetter.title'),
      opacity: 0.3,
      listItems: [
        t('invitationLetter.listItems.one'),
        t('invitationLetter.listItems.two'),
        t('invitationLetter.listItems.three'),
        t('invitationLetter.listItems.four'),
        t('invitationLetter.listItems.five'),
      ],
      backgroundType: 'overlay-gradient',
      backgroundColor: '#2D2D2D',
      textColor: '#FFFFFF',
      listTextColor: '#fffc',
      buttonBackgroundType: 'solid',
      buttonBackgroundColor: '#E3AF64',
      buttonTextColor: '#1e1e1e',
      buttonText: t('invitationLetter.buttonText'),
      borderColor: '#c7c1c1',
      link: `/${NavigationKeys.APPLY}/1`,
      locale,
    },
    {
      title: t('vip.title'),
      listItems: [
        t('vip.listItems.one'),
        t('vip.listItems.two'),
        t('vip.listItems.three'),
        t('vip.listItems.four'),
        t('vip.listItems.five'),
        t('vip.listItems.six'),
        t('vip.listItems.seven'),
        t('vip.listItems.eight'),
      ],
      backgroundType: 'solid',
      backgroundColor: '#1A1A1A',
      textColor: 'linear-gradient(90deg, #C1A875 0%, #D4AF37 100%)',
      buttonBackgroundType: 'gold-gradient',
      buttonTextColor: '#1e1e1e',
      buttonText: t('vip.buttonText'),
      borderColor: '#D4AF37',
      shadow: '0 8px 32px rgba(212, 175, 55, 0.3)',
      link: `/${NavigationKeys.APPLY}/1`,
      locale,
    },
  ];

  return (
    <section
      className='relative mx-auto w-svw md:w-[unset] md:max-w-[1440px] overflow-hidden py-8 md:px-6 lg:px-8'
      id={NavigationKeys.PARTICIPATE}
    >
      <h2 className='font-akira mb-8 text-center text-2xl leading-snug text-[#f8f7f5] sm:text-3xl md:mb-12 md:text-4xl lg:text-5xl'>
        {t('title')}
      </h2>

      <div className='hidden w-full flex-wrap justify-center gap-8 px-4 md:flex'>
        {tickets.map((ticket) => (
          <Card key={ticket.title} {...ticket} width='280px' height='540px' />
        ))}
      </div>

      <div className='relative flex h-[560px] w-full justify-center md:hidden'>
        <Swiper
          slidesPerView='auto'
          className='timeline-swiper'
          breakpoints={{
            0: { slidesOffsetBefore: 20, slidesOffsetAfter: 20 },
            320: { slidesOffsetBefore: 30, slidesOffsetAfter: 30 },
            420: { slidesOffsetBefore: 50, slidesOffsetAfter: 50 },
            560: { slidesOffsetBefore: 100, slidesOffsetAfter: 100 },
            640: { slidesOffsetBefore: 100, slidesOffsetAfter: 100 },
          }}
        >
          {tickets.map((ticket, index) => (
            <SwiperSlide
              key={index}
              className='flex h-full items-center justify-center !w-[300px] p-4'
            >
              <Card
                key={ticket.title}
                {...ticket}
                width='280px'
                height='540px'
              />
            </SwiperSlide>
          ))}
        </Swiper>
        {/* <div className='relative z-10'>
          <Card {...tickets[0]} width='280px' height='540px' />
        </div> */}

        {/* <div className='absolute left-1/2 top-0 z-0 -translate-x-[160%] translate-y-[-7px] rotate-[5deg]'>
          <Card {...tickets[1]} width='280px' height='540px' />
        </div>

        <div className='absolute left-1/2 top-0 z-0 translate-x-[60%] translate-y-[-7px] rotate-[-5deg]'>
          <Card {...tickets[2]} width='280px' height='540px' />
        </div> */}
      </div>
    </section>
  );
};
