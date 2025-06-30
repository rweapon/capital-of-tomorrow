'use client';
import React from 'react';

import { ITimelineContent } from '@/types/Timeline.interfaces';

const timelineContent: ITimelineContent = {
  title: 'application timeline',
  events: [
    {
      date: '11',
      month: 'JUNE',
      subtitle: 'TITLE',
      description:
        'Yes, each participant has the opportunity to present their idea on the Global Pitch stage. You will hear success stories and approaches to realizing various international businesses from experienced business people.',
    },
    {
      date: '17',
      month: 'JUNE',
      subtitle: 'TITLE',
      description:
        'Yes, each participant has the opportunity to present their idea on the Global Pitch stage. You will hear success stories and approaches to realizing various international businesses from experienced business people.',
    },
    {
      date: '21',
      month: 'JUNE',
      subtitle: 'TITLE',
      description:
        'Yes, each participant has the opportunity to present their idea on the Global Pitch stage. You will hear success stories and approaches to realizing various international businesses from experienced business people.',
    },
  ],
};

export const Timeline = () => {
  return (
    <section className='mx-7 flex flex-col gap-3 sm:gap-5 md:gap-7 lg:gap-8 xl:mx-[124px] xl:gap-10'>
      <div className='flex flex-col gap-1 sm:gap-2 md:gap-3 lg:gap-4 xl:gap-5'>
        <h1 className='font-akira whitespace-nowrap font-bold  uppercase tracking-wider text-white sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>
          {timelineContent.title}
        </h1>
      </div>
      <ul className='flex flex-col gap-2 md:flex-row md:gap-4 lg:gap-5 xl:gap-7'>
        {timelineContent.events.map((event, index) => (
          <li
            key={index}
            className={`rounded-lg bg-[#F8F7F5]/[0.05] shadow-[inset_0_0_15px_0_rgba(0,0,0,0.1)] ${
              index == 1 ? 'text-[#E3AF64]' : 'text-[#F8F7F5]'
            }`}
          >
            <header
              className={`flex flex-col border-b border-dotted ${
                index === 1 ? 'border-[#E3AF64]' : 'border-[#F8F7F5]'
              } p-5 sm:p-6 md:p-8 lg:p-7 xl:px-8 xl:pb-8 xl:pt-10`}
            >
              <h2 className='font-akira text-2xl uppercase md:text-3xl lg:text-4xl xl:text-5xl'>
                {event.date}
              </h2>
              <h2 className='font-mont text-xs md:text-sm'>{event.month}</h2>
            </header>
            <section className='flex flex-col gap-3 p-5 text-sm leading-[140%] sm:p-6 md:p-8 lg:gap-4 lg:p-7 xl:gap-6 xl:p-8 xl:pb-10'>
              <h3 className='text-lg uppercase'>{event.subtitle}</h3>
              <p>{event.description}</p>
            </section>
          </li>
        ))}
      </ul>
    </section>
  );
};
