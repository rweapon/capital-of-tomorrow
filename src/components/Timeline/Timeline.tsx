'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

interface TimelineStep {
  number: string;
  title: string;
  description: string;
}

const timelineSteps: TimelineStep[] = [
  {
    number: '1',
    title: 'APPLICATION SUBMISSION',
    description:
      'Complete the online application form and pay the required application fee to confirm your submission.',
  },
  {
    number: '2',
    title: 'EVALUATION AND SELECTION',
    description:
      'Applications will be reviewed by an independent selection committee considering leadership potential, impact, and alignment with the summit’s vision.',
  },
  {
    number: '3',
    title: 'RESULTS DISTRIBUTION',
    description:
      'Shortlisted candidates will be notified via email with further details on their selection and next steps.',
  },
];

interface TimelineSectionProps {
  top: boolean;
  step: TimelineStep;
}

const TimelineSection: React.FC<TimelineSectionProps> = ({ top, step }) => {
  const gradientNumberClass =
    'absolute top-1/2 left-full md:translate-x-[20px] -translate-y-16 md:-translate-y-1/2 text-[100px]  md:text-[180px] font-bold select-none pointer-events-none leading-none ' +
    'bg-gradient-to-b from-white/30 via-white/5 to-transparent bg-clip-text text-transparent';

  return (
    <div className={`w-[179px] text-center md:w-auto ${top ? '' : 'self-end'}`}>
      <div className='relative z-10 h-[120px] md:h-auto'>
        <div className='relative inline-block'>
          <h3 className='font-mont relative z-10 mb-4 text-sm font-normal tracking-tighter  text-white md:text-lg md:font-bold'>
            {step.title}
          </h3>
          <div className={gradientNumberClass}>{step.number}</div>
        </div>
        <p className='font-mont mx-auto max-w-xs text-[12px] font-thin leading-3 tracking-wide text-[#F8F7F5BF] md:text-sm md:font-light md:uppercase md:leading-relaxed'>
          {step.description}
        </p>
      </div>
    </div>
  );
};

export const Timeline: React.FC = () => {
  const dotClass =
    'hidden md:block absolute top-1/2 w-[38px] h-[38px] bg-white rounded-full z-20 transform -translate-x-1/2 -translate-y-1/2';

  return (
    <div className='flex w-full justify-center px-3 md:px-24'>
      <div className='w-full max-w-7xl'>
        <div className='text-center md:mb-20'>
          <h1 className='font-akira text-xl font-bold text-white  md:mb-4 md:text-5xl lg:text-6xl'>
            APPLICATION TIMELINE
          </h1>
        </div>

        <div className='relative'>
          <div className='relative  md:h-[600px] lg:block'>
            <div className='hidden h-full flex-row justify-between p-16 md:flex'>
              <TimelineSection top={true} step={timelineSteps[0]} />
              <TimelineSection top={false} step={timelineSteps[1]} />
              <TimelineSection top={true} step={timelineSteps[2]} />
              <div className={`${dotClass} left-[17.66%]`}></div>
              <div className={`${dotClass} left-1/2`}></div>
              <div className={`${dotClass} left-[82.7%]`}></div>
              <div className='absolute left-1/2 top-1/2 z-10 hidden h-[2px] w-screen -translate-x-1/2 bg-white/60 md:block'></div>
            </div>

            <div className='h-full p-4 md:hidden'>
              <Swiper slidesPerView={1} className='timeline-swiper'>
                {timelineSteps.map((step, index) => (
                  <SwiperSlide key={index}>
                    <div className='flex h-full items-center justify-center px-8 py-6'>
                      <TimelineSection top={true} step={step} />
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
      </div>
    </div>
  );
};
