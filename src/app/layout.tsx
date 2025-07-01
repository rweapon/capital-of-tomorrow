import { Metadata } from 'next';
import * as React from 'react';

import '@/styles/globals.css';

import { fonts } from '@/lib/fonts';
import { cn } from '@/lib/utils';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

import { siteConfig } from '@/constant/config';
import { basePath } from '@/constant/env';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  robots: { index: true, follow: true },
  manifest: `${basePath}/favicon/site.webmanifest`,
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={cn(
          ' bg-custom-dark relative box-border min-h-screen overflow-x-hidden',
          fonts
        )}
      >
        <div
          style={{
            backgroundImage: 'url(/capital-of-tomorrow/images/bg.svg)',
            width: '100%',
            height: '100%',
          }}
          className='min-w-100% min-h-100% absolute left-0 top-0 z-[-1] blur-3xl'
        />
        <div className='lg:gap-30 flex flex-col gap-8 md:gap-12 xl:gap-[168px] '>
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
