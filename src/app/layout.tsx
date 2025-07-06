import { Metadata } from 'next';
import * as React from 'react';

import './globals.css';

import { fonts } from '@/lib/fonts';
import { cn } from '@/lib/utils';

import { Footer, Navbar } from '@/components';

import { siteConfig } from '@/constant/config';
import { basePath, isProd } from '@/constant/env';

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

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={cn(
          'bg-custom-dark relative box-border min-h-screen overflow-x-hidden lg:gap-30 flex flex-col gap-8 md:gap-12 xl:gap-28',
          fonts,
          isProd ? 'prod' : 'local'
        )}
      >
        {/* <BlobsParallaxGroup blobs={blobs} /> */}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
