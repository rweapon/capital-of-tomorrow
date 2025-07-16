import Link from 'next/link';
import React from 'react';

import IFooterData from '@/components/Footer/types';

import { basePath } from '@/constant/env';

export const footerData: IFooterData = {
  links: [
    { href: '#', text: 'Home', target: '_self' },
    {
      href: `${basePath}/Public_Offer.pdf`,
      text: 'Public Offer',
      target: '_blank',
    },
    {
      href: `${basePath}/Privacy_Policy.pdf`,
      text: 'PRIVACY POLICY',
      target: '_blank',
    },
  ],
  copyright: '2025, VOSTOCHNIK. \n ALL RIGHTS RESERVED.',
  address: {
    title: 'ADDRESS',
    lines: [
      'Individual Entrepreneur Ositkovskii Dmitrii Sergeevich',
      'TIN: 780721528372',
    ],
  },
};
export function Footer() {
  return (
    <footer className='bg-[#1E1E1E] py-2 text-white sm:mt-20 sm:py-6 '>
      <div className='container mx-auto px-4 sm:px-6 lg:px-7'>
        <div className='grid grid-cols-3 gap-8'>
          <div>
            <ul className=' text-sm sm:space-y-3'>
              {footerData.links.map((link, index) => (
                <li key={index} className='leading-none'>
                  <Link
                    href={link.href}
                    target={link.target}
                    className='font-monda text-[8px] uppercase text-[#F8F7F5]/70 transition-colors hover:text-blue-500 sm:text-sm'
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>

            <p className='font-monda mt-12 hidden whitespace-pre-line text-sm uppercase text-[#F8F7F5]/70 sm:block'>
              {footerData.copyright}
            </p>
          </div>

          <div className='flex flex-col items-center gap-2'>
            <p className='font-monda text-[8px] uppercase text-[#F8F7F5]/70 sm:text-sm'>
              Contact us:
            </p>
            <Link
              href='mailto:vostochnik.solution@gmail.com'
              className='font-monda text-[8px] uppercase text-[#F8F7F5]/70 hover:text-blue-500 sm:text-sm'
            >
              vostochnik.solution@gmail.com
            </Link>
          </div>

          <div className='flex flex-col items-end justify-between'>
            <section className='flex flex-col items-center gap-2'>
              <h3 className='font-monda text-[8px] uppercase text-[#F8F7F5]/70 sm:text-sm'>
                {footerData.address.title}
              </h3>
              <address className='font-monda text-[6px] uppercase not-italic text-[#F8F7F5]/70 sm:text-[10px]'>
                {footerData.address.lines.map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </address>
            </section>
          </div>
        </div>
      </div>
    </footer>
  );
}
