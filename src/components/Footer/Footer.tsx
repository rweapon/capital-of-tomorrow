import Link from 'next/link';
import React from 'react';

import IFooterData from '@/types/Footer.interfaces';

export const footerData: IFooterData = {
  links: [
    { href: '/', text: 'Home' },
    { href: '/', text: 'Present the Investment Fund at the Forum' },
    { href: '/', text: 'Public Offer' },
    { href: '/', text: 'Pricing' },
    { href: '/', text: 'Contact Us' },
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
    <footer className='bg-[#1E1E1E] py-6 text-white sm:mt-20 lg:mt-44'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-7'>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
          <div>
            <ul className='space-y-3 text-sm'>
              {footerData.links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className='font-monda text-sm uppercase text-[#F8F7F5]/70 transition-colors hover:text-blue-500'
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>

            <p className='font-monda mt-12 whitespace-pre-line text-sm uppercase text-[#F8F7F5]/70'>
              {footerData.copyright}
            </p>
          </div>

          <div className='flex flex-col items-center justify-between'>
            <Link
              href='#'
              className='font-monda text-sm uppercase text-[#F8F7F5]/70 hover:text-blue-500'
            >
              {footerData.social.title}
            </Link>
            <Link
              href='#'
              className='font-monda text-sm uppercase text-[#F8F7F5]/70 transition-colors hover:text-blue-500'
            >
              {footerData.social.terms}
            </Link>
          </div>

          <div className='flex flex-col items-end justify-between'>
            <section className='flex flex-col items-center'>
              <h3 className='font-monda mb-4 text-sm uppercase text-[#F8F7F5]/70'>
                {footerData.address.title}
              </h3>
              <address className='font-monda text-[10px] uppercase not-italic text-[#F8F7F5]/70'>
                {footerData.address.lines.map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </address>
            </section>
            <Link
              href='#'
              className='font-monda text-sm uppercase text-[#F8F7F5]/70 hover:text-blue-500'
            >
              {footerData.privacy}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
