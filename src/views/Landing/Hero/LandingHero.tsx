'use client';

import { ChevronDown } from 'lucide-react';
import { useTranslations } from 'next-intl';
import React, { useEffect, useRef } from 'react';

export const LandingHero = () => {
  const t = useTranslations('landing.hero');
  const heroText = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (!heroText.current) return;
      const scrollY = window.scrollY;
      if (scrollY < window.innerHeight) {
        heroText.current.style.transform = `translateY(${scrollY * 0.2}px)`;
        const opacity = 1 - scrollY / 400;
        heroText.current.style.opacity = Math.max(opacity, 0).toString();
      }
    });
  }, []);

  const onClick = () => {
    if (typeof window === 'undefined') return;

    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <section
      className='flex flex-col md:flex-row justify-between gap-8 md:gap-24 w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 mt-16 text-background relative pb-20 sm:pb-40 md:pb-56 xl:pb-96 2xl:pb-[510px] header-buffer'
      ref={heroText}
    >
      <div>
        <h1 className='font-akira text-2xl sm:text-4xl lg:text-6xl 2xl:text-8xl font-extrabold tracking-wider md:mb-3'>
          {t('title')}
        </h1>
        <p className='font-mont md:text-xl lg:text-3xl 2xl:text-4xl font-extralight '>
          {t('subtitle')}
        </p>
      </div>
      <div className='font-mont text-xs md:text-base max-w-72 md:self-center h-min leading-snug '>
        {t('paragraph')}
      </div>
      <div
        className='w-full flex justify-center items-end opacity-70 absolute bottom-0 left-0'
        id='scroll-hint-container'
      >
        <div
          className='flex flex-col items-center gap-2 scroll-hint pointer-events-auto cursor-pointer'
          onClick={onClick}
        >
          <span className='text-xs uppercase tracking-widest text-gray-400'>
            {t('scroll')}
          </span>
          <ChevronDown className='w-6 h-6 text-white' />
        </div>
      </div>
    </section>
  );
};
