import Link from 'next/link';

import {
  buttonContent,
  eventInfo,
  heroContent,
  navigationItems,
} from '@/components/Navbar/data';

export const Navbar = () => {
  return (
    <section className='justify-betwen flex w-full flex-col items-center lg:px-12 xl:px-24 xl:pb-4'>
      <header className='relative w-full lg:pt-4 xl:pt-8'>
        <nav className='h-16 w-full border-t border-[#F8F7F5]/50 '>
          <ul className='shrink-1 flex size-full items-center justify-between gap-x-px xl:gap-x-8'>
            {navigationItems.map((item) => (
              <li className='font-monda flex size-full' key={item.id}>
                <Link
                  href={item.href}
                  className='flex size-full items-center justify-center text-center text-xs font-bold tracking-[-0.96px] text-[#f8f7f5] hover:text-blue-500 xl:text-base'
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <section className='flex w-full max-w-[1186px] flex-col p-2 sm:px-4 xl:px-0 xl:py-[62px]'>
        <div className='relative flex w-full flex-col justify-between gap-y-4 sm:flex-row md:justify-around lg:gap-y-8 xl:justify-between xl:gap-y-64'>
          <div className='flex flex-col gap-2 md:gap-5'>
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

            <button className='font-monda rounded-3xl border-2 border-solid border-[#1e1e1e1a] bg-[#e3af64] text-base font-bold tracking-[-2.40px] text-[#1e1e1e] shadow-[0px_4px_4px_#00000040] hover:bg-[#e3af64]/40 md:w-[267px] lg:h-[43px] lg:leading-[12.6px] xl:h-[73px] xl:text-[2.5rem] xl:leading-[24.6px]'>
              {buttonContent.label}
            </button>
          </div>
        </div>
      </section>
    </section>
  );
};
