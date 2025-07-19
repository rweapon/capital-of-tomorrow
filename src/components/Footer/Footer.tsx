import Link from 'next/link';
import React from 'react';

import IFooterData from '@/components/Footer/types';

import { basePath } from '@/constant/env';

export const footerData: IFooterData = {
  navigation: {
    title: 'Navigation:',
    data: [
      { id: 'home', label: 'HOME', href: '/' },
      { id: 'participate', label: 'PARTICIPATE', href: '/apply' },
      { id: 'event', label: 'EVENT', href: '/' },
      { id: 'partners', label: 'PARTNERS', href: '/' },
    ],
  },
  contacts: {
    title: 'Contacts:',
    data: [
      {
        href: 'mailto:vostochnik.solution@gmail.com',
        label: 'vostochnik.solution@gmail.com',
        id: 'mail',
      },
    ],
  },
  information: {
    title: 'Information:',
    data: [
      "Bol'shaya Yushun'skaya street №1A, b. 3,",
      'Moscow, Russian Federation, 117303',
      'Individual Entrepreneur Ositkovskii Dmitrii Sergeevich',
      'TIN: 780721528372',
    ],
  },
};
export function Footer() {
  return (
    <footer className='bg-[#1E1E1E]/70 text-white/70 sm:mt-20 pt-6 font-monda uppercase'>
      <section className='container pb-4'>
        <div className='flex flex-col md:flex-row md:*:flex-1 gap-8'>
          <div className='flex flex-col gap-2'>
            <h4 className='text-base sm:text-lg font-semibold '>
              {footerData.navigation.title}
            </h4>
            {footerData.navigation.data.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className='text-sm transition-colors hover:text-blue-500 sm:text-base'
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className='flex flex-col md:items-center gap-2  '>
            <h4 className='text-base sm:text-lg font-semibold '>
              {footerData.contacts.title}
            </h4>
            {footerData.contacts.data.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className='text-sm transition-colors hover:text-blue-500 sm:text-base'
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className='flex flex-col md:items-end gap-2'>
            <h4 className='text-base sm:text-lg font-semibold'>
              {footerData.information.title}
            </h4>
            {footerData.information.data.map((line, index) => (
              <p key={index} className='text-sm sm:text-base'>
                {line}
              </p>
            ))}
          </div>
        </div>
      </section>
      <section className='bg-black/30 py-4'>
        <div className='container text-white  text-sm sm:text-base  flex flex-col md:flex-row md:items-center justify-between gap-2'>
          <Link
            href={`${basePath}/Public_Offer.pdf`}
            className='hover:text-blue-500 font-semibold order-2 md:order-[unset]'
            target='_blank'
          >
            Public Offer
          </Link>
          <p className='text-base'>2025, VOSTOCHNIK. ALL RIGHTS RESERVED.</p>
          <Link
            href={`${basePath}/Privacy_Policy.pdf`}
            className='hover:text-blue-500 font-semibold'
            target='_blank'
          >
            PRIVACY POLICY
          </Link>
        </div>
      </section>
    </footer>
  );
}
