import Link from 'next/link';

import { buttonContent, eventInfo, heroContent } from '@/views/Home/Hero/data';

export const HomeHero = () => {
  return (
    // max-w-[1186px]
    <section className='flex w-full  flex-col px-4 sm:px-6 md:px-8 xl:px-24'>
      <div className='relative flex w-full flex-col justify-between gap-y-4 sm:flex-row md:justify-around lg:gap-y-8 xl:justify-between xl:gap-y-64'>
        <div className='flex flex-col gap-2 md:gap-5 max-w-lg'>
          <h1 className='font-akira text-base font-bold tracking-[-0.26px] text-[#f8f7f5] md:text-2xl md:leading-[64px] lg:text-3xl lg:leading-[68px] xl:text-[64px]'>
            {heroContent.title}
          </h1>
          <p className='font-monda text-base font-normal tracking-[-1.20px] text-[#ffffffc2] md:w-[464px] md:text-xl'>
            {heroContent.description}
          </p>
        </div>

        <div className='header-l flex flex-col gap-4 md:gap-10'>
          <p className='font-akira xs:leading-[58px] text-base font-bold tracking-[-0.16px] text-[#f8f7f5] sm:text-lg md:text-[33px] xl:text-[40px] xl:leading-[58px]'>
            {eventInfo.location}
            <br />
            {eventInfo.month}
            <br />
            {eventInfo.year}
          </p>

          <Link as='/apply/1' href='/apply/1'>
            <button className='font-monda rounded-3xl border-2 border-solid border-[#1e1e1e1a] bg-[#e3af64] text-base font-bold tracking-[-2.40px] text-[#1e1e1e] shadow-[0px_4px_4px_#00000040] hover:bg-[#e3af64]/40 md:w-[267px] lg:h-[43px] lg:leading-[12.6px] xl:h-[73px] xl:text-[2.5rem] xl:leading-[24.6px]'>
              {buttonContent.label}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};
