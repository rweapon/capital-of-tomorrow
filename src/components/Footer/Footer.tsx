import Link from 'next/link';
import React from 'react';

import IFooterData from '@/components/Footer/types';

export const footerData: IFooterData = {
  links: [
    { href: '#', text: 'Home' },
    { href: '#', text: 'Present the Investment Fund at the Forum' },
    { href: '#', text: 'Public Offer' },
    { href: '#', text: 'Pricing' },
    { href: '#', text: 'Contact Us' },
  ],
  copyright: '2025, VOSTOKTECH SOLUTIONS. \n ALL RIGHTS RESERVED.',
  social: {
    title: 'FOLLOW US',
    terms: 'TERMS & CONDITIONS',
  },
  address: {
    title: 'ADDRESS',
    lines: [
      "Bol'shayayushun'skaya street №1A,B.3,",
      'MOSCOW, RUSSIAN FEDERATION, 117303',
    ],
  },
  privacy: 'PRIVACY POLICY',
};
export function Footer() {
  return (
    <footer className='bg-[#1E1E1E] py-2 text-white sm:mt-20 sm:py-6 lg:mt-44'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-7'>
        <div className='grid grid-cols-3 gap-8'>
          <div>
            <ul className=' text-sm sm:space-y-3'>
              {footerData.links.map((link, index) => (
                <li key={index} className='leading-none'>
                  <Link
                    href={link.href}
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

          <div className='flex flex-col items-center justify-between'>
            <Link
              href='#'
              className='font-monda text-[8px] uppercase text-[#F8F7F5]/70 hover:text-blue-500 sm:text-sm'
            >
              {footerData.social.title}
            </Link>
            <Link
              href='#'
              className='font-monda hidden text-sm uppercase text-[#F8F7F5]/70 transition-colors hover:text-blue-500 sm:block'
            >
              {footerData.social.terms}
            </Link>
          </div>

          <div className='flex flex-col items-end justify-between'>
            <section className='flex flex-col items-center'>
              <h3 className='font-monda mb-4 text-[8px] uppercase text-[#F8F7F5]/70 sm:text-sm'>
                {footerData.address.title}
              </h3>
              <address className='font-monda text-[6px] uppercase not-italic text-[#F8F7F5]/70 sm:text-[10px]'>
                {footerData.address.lines.map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </address>
            </section>
            <Link
              href='#'
              className='font-monda hidden text-sm uppercase text-[#F8F7F5]/70 hover:text-blue-500 sm:block'
            >
              {footerData.privacy}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
