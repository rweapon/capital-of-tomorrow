import '@/styles/globals.css';

import { PropsWithChildren } from 'react';
import { LanguageProvider } from '@inlang/paraglide-next';
import type { Metadata } from 'next';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { siteConfig } from '@/lib/constant';
import { fonts } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import { languageTag } from '@/paraglide/runtime.js';

export const generateMetadata = (): Metadata => ({
    metadataBase: new URL(siteConfig.url()),
    title: {
        default: siteConfig.title(),
        template: `%s | ${siteConfig.title()}`,
    },
    description: siteConfig.description(),
    keywords: siteConfig.keywords(),
    robots: { index: true, follow: true },
    icons: {},
    openGraph: {
        url: siteConfig.url(),
        title: siteConfig.title(),
        description: siteConfig.description(),
        siteName: siteConfig.title(),
        images: '/opengraph-image.png',
        type: 'website',
        locale: languageTag(),
    },
    twitter: {
        card: 'summary_large_image',
        title: siteConfig.title(),
        description: siteConfig.description(),
        images: '/opengraph-image.png',
    },
});

const RootLayout = ({ children }: PropsWithChildren) => {
    return (
        <LanguageProvider>
            <html lang={languageTag()} suppressHydrationWarning>
                <body
                    className={cn(
                        ' bg-custom-dark relative box-border min-h-screen overflow-x-hidden',
                        fonts
                    )}
                >
                    <div
                        style={{
                            backgroundImage: 'url(/bg.svg)',
                            width: '100%',
                            height: '100%',
                        }}
                        className="min-w-100% min-h-100% absolute left-0 top-0 z-[-1] blur-3xl"
                    />

                    <div className="lg:gap-30 flex flex-col gap-8 md:gap-12 xl:gap-[168px] ">
                        <Navbar />
                        {children}
                        <Footer></Footer>
                    </div>
                </body>
            </html>
        </LanguageProvider>
    );
};

export default RootLayout;
