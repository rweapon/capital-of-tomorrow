import { Monda, Montserrat } from 'next/font/google';
import localFont from 'next/font/local';

const fontMonda = Monda({
  subsets: ['latin'],
  variable: '--font-monda',
  fallback: ['system-ui', 'arial'],
  weight: '400',
});

const fontMont = Montserrat({
  subsets: ['latin'],
  variable: '--font-mont',
  fallback: ['system-ui', 'arial'],
});

const fontAkira = localFont({
  src: [
    {
      path: '../../public/fonts/Akira-Expanded-Demo.woff',
      weight: '800',
      style: 'normal',
    },
  ],
  variable: '--font-akira',
});

export const fonts = [fontMonda, fontAkira, fontMont];
