import { Locale, routing } from 'i18n/routing';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { hasLocale } from 'next-intl';
import { NextIntlClientProvider } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import * as React from 'react';

import './globals.css';

import { fonts } from '@/lib/fonts';
import { cn } from '@/lib/utils';

import { BlobsParallaxGroup, Footer, Navbar } from '@/components';

import { siteConfig } from '@/constant/config';
import { blobs } from '@/constant/data';
import { isProd } from '@/constant/env';

// export async function generateMetadata(
//   props: Omit<LayoutProps<'/[locale]'>, 'children'>
// ) {
//   const {locale} = await props.params;

//   const t = await getTranslations({
//     locale: locale as Locale,
//     namespace: 'LocaleLayout'
//   });

//   return {
//     title: t('title')
//   };
// }

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  robots: { index: true, follow: true },
  manifest: `/favicon/site.webmanifest`,
  openGraph: {
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
  },
};

type LocaleLayoutProps = Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}>;

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const modifiedFonts = fonts
    .filter((font) => !font.style.fontFamily.toLowerCase().includes('akira'))
    .map((font) => font.variable);

  return (
    <html suppressHydrationWarning>
      <body
        className={cn(
          'relative box-border min-h-screen overflow-x-hidden flex flex-col gap-8 md:gap-12 lg:gap-20 ',
          locale === 'ru' ? modifiedFonts : fonts,
          isProd ? 'prod' : 'local'
        )}
      >
        {isProd && <BlobsParallaxGroup blobs={blobs} />}
        <NextIntlClientProvider>
          <Navbar locale={locale} />
          {children}
          <Footer locale={locale} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
