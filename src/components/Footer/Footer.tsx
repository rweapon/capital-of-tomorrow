import { Link } from 'i18n/navigation';
import { useTranslations } from 'next-intl';
import React from 'react';

import IFooterData from '@/components/Footer/types';

import { basePath } from '@/constant/env';

export function Footer() {
  const t = useTranslations('footer');
  const navigation = useTranslations('navigation');

  const footerData: IFooterData = {
    navigation: {
      title: t('navigation.title'),
      data: [
        { id: 'about', label: navigation('about'), href: '/' },
        {
          id: 'participate',
          label: navigation('participate'),
          href: '/apply',
        },
        { id: 'event', label: navigation('event'), href: '/' },
        { id: 'partners', label: navigation('partners'), href: '/' },
        { id: 'home', label: navigation('home'), href: '/' },
      ],
    },
    contacts: {
      title: t('contacts.title'),
      data: [
        {
          href: 'mailto:vostochnik.solution@gmail.com',
          label: t('contacts.data.mail'),
          id: 'mail',
        },
      ],
    },
    information: {
      title: t('information.title'),
      data: [
        t('information.data.0'),
        t('information.data.1'),
        t('information.data.2'),
        t('information.data.3'),
      ],
    },
    legal: {
      publicOffer: t('legal.publicOffer'),
      privacyPolicy: t('legal.privacyPolicy'),
      copyright: t('legal.copyright'),
    },
  };

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
            {t('legal.publicOffer')}
          </Link>
          <p className='text-base'>{t('legal.copyright')}</p>
          <Link
            href={`${basePath}/Privacy_Policy.pdf`}
            className='hover:text-blue-500 font-semibold'
            target='_blank'
          >
            {t('legal.privacyPolicy')}
          </Link>
        </div>
      </section>
    </footer>
  );
}
