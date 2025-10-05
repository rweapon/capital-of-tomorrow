'use client';
import { useTranslations } from 'next-intl';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { TimelineStep } from '@/components/Timeline/types';

interface TimelineSectionProps {
  step: TimelineStep;
}

const TimelineSection: React.FC<TimelineSectionProps> = ({ step }) => {
  const gradientNumberClass =
    'absolute top-1/2 left-full md:translate-x-[20px] -translate-y-16 md:-translate-y-1/2 text-[100px]  md:text-[180px] font-bold select-none pointer-events-none leading-none ' +
    'bg-gradient-to-b from-white/30 via-white/5 to-transparent bg-clip-text text-transparent';

  return (
    <div className='w-72 text-center md:w-auto'>
      <div className='relative z-10 max-h-[120px] md:max-h-[unset] md:h-auto'>
        <div className='relative inline-block'>
          <h3 className='font-mont relative z-10 mb-4 text-lg font-normal tracking-tighter text-white md:text-xl md:font-bold'>
            {step.title}
          </h3>
          <div className={gradientNumberClass}>{step.number}</div>
        </div>
        <p className='font-mont mx-auto max-w-xs text-sm font-thin leading-4 tracking-wide text-[#F8F7F5BF] md:text-base md:font-light md:uppercase md:leading-relaxed'>
          {step.description}
        </p>
      </div>
    </div>
  );
};

export const Timeline: React.FC = () => {
  const t = useTranslations('home.timeline');

  const dotClass =
    'hidden md:block w-[38px] h-[38px] bg-white rounded-full z-20 ';

  const timelineSteps: TimelineStep[] = [
    {
      number: t('steps.one.number'),
      title: t('steps.one.title'),
      description: t('steps.one.description'),
    },
    {
      number: t('steps.two.number'),
      title: t('steps.two.title'),
      description: t('steps.two.description'),
    },
    {
      number: t('steps.three.number'),
      title: t('steps.three.title'),
      description: t('steps.three.description'),
    },
  ];

  return (
    <section className='flex w-full justify-center px-10 lg:px-24 overflow-hidden'>
      <div className='w-full max-w-7xl'>
        <div className='text-center md:mb-20'>
          <h1 className='font-akira font-bold text-white text-2xl sm:text-3xl md:mb-12 md:text-4xl lg:text-5xl'>
            {t('title')}
          </h1>
        </div>

        <div className='relative md:h-[700px] lg:block'>
          <div className='hidden h-full md:flex flex-col justify-between'>
            <div className='flex first:flex-1 justify-between items-end pb-10 max-h-[330px]'>
              <TimelineSection step={timelineSteps[0]} />
              <TimelineSection step={timelineSteps[2]} />
            </div>
            <div className='relative w-full h-[38px] flex justify-between px-32'>
              <div className={`${dotClass}`}></div>
              <div className={`${dotClass}`}></div>
              <div className={`${dotClass}`}></div>
            </div>
            <div className='flex flex-1 justify-center items-center flex-shrink-0'>
              <TimelineSection step={timelineSteps[1]} />
            </div>
            <div className='absolute left-1/2 top-1/2 z-10 hidden h-[2px] w-screen -translate-x-1/2 bg-white/60 md:block'></div>
          </div>

          <div className='h-full p-6 md:hidden my-6'>
            <Swiper
              slidesPerView={1}
              className='timeline-swiper !overflow-visible'
            >
              {timelineSteps.map((step, index) => (
                <SwiperSlide key={index}>
                  <div className='flex items-end justify-center px-8 py-6 h-[150px] md:h-full'>
                    <TimelineSection step={step} />
                  </div>
                  <div
                    className={`absolute bottom-0 ${
                      index == 2 ? 'left-0 w-1/2' : ''
                    } ${index == 1 ? 'w-full' : ''} ${
                      index == 0 ? 'right-0 w-1/2' : ''
                    } z-10 h-[2px]    bg-white/60`}
                  ></div>
                  <div className='absolute -bottom-2 right-[48%] z-20 size-[15px]  rounded-full bg-white'></div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};
