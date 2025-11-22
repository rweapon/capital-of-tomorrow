'use client';
import { ReactNode, useState } from 'react';

import { cn } from '@/lib/utils';

export type AccordionItem = {
  title: string;
  content: string;
};

export interface IAccordionProps {
  title: string;
  items: AccordionItem[];
  extraContent?: ReactNode;
  initialActives?: number[];
  textColor?: 'white' | 'black';
}

export const Accordion = ({
  title,
  items,
  extraContent,
  initialActives = [],
  textColor = 'white',
}: IAccordionProps) => {
  const [activeIndices, setActiveIndices] = useState<number[]>(initialActives);

  const toggleAccordion = (index: number) => {
    setActiveIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section className='mx-auto w-full max-w-[1440px] px-3 sm:px-10 lg:px-24'>
      <header className='mx-16 mb-7 sm:mx-0 sm:mb-12'>
        <h1
          className={cn(
            'font-akira text-center text-xl font-extrabold uppercase  sm:text-4xl md:text-5xl',
            textColor === 'white' ? 'text-white' : 'text-black'
          )}
        >
          {title}
        </h1>
      </header>

      <div className='sm:px-4 lg:px-[34px]'>
        {items.map((item, index) => (
          <article
            key={index}
            className={`border-b border-white/20 px-4 py-6 cursor-pointer ${
              index === 0 ? 'border-t' : ''
            }`}
            onClick={() => toggleAccordion(index)}
          >
            <div
              className={cn(
                'flex h-full w-full items-center justify-between text-left transition-colors',
                !activeIndices.includes(index) && textColor === 'white'
                  ? 'hover:text-gray-300'
                  : !activeIndices.includes(index) && textColor === 'black'
                  ? 'hover:text-gray-700'
                  : '',
                textColor === 'white' ? 'text-white' : 'text-black'
              )}
              aria-expanded={activeIndices.includes(index)}
              aria-controls={`accordion-content-${index}`}
            >
              <span className='font-mont text-base font-normal md:text-lg md:leading-[22px]'>
                {item.title}
              </span>
              <svg
                className={`size-6 transition-transform ${
                  activeIndices.includes(index) ? 'rotate-180' : ''
                }`}
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M19 9l-7 7-7-7'
                />
              </svg>
            </div>

            <div
              id={`accordion-content-${index}`}
              className={`overflow-hidden pt-2 transition-all duration-300 ${
                activeIndices.includes(index) ? 'max-h-96' : 'max-h-0'
              }`}
            >
              <p
                className={cn(
                  'font-mont text-sm font-thin md:text-base md:leading-[22px]',
                  textColor === 'white' ? 'text-white/80' : 'text-[#1e1e1e]'
                )}
              >
                {item.content}
              </p>
            </div>
          </article>
        ))}
      </div>

      {extraContent && <div className='mt-12'>{extraContent}</div>}
    </section>
  );
};
