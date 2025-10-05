import { Link } from 'i18n/navigation';
import { Locale } from 'i18n/routing';
import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';

import { MobileMenu } from '@/components/Navbar/MobileMenu/MobileMenu';

type NavbarProps = {
  locale: Locale;
};

export const Navbar = ({ locale }: NavbarProps) => {
  const navigation = useTranslations('navigation');
  setRequestLocale(locale);

  const navigationItems = [
    { id: 'about', label: navigation('about'), href: '/' },
    {
      id: 'participate',
      label: navigation('participate'),
      href: '/apply',
    },
    { id: 'event', label: navigation('event'), href: '/' },
    { id: 'partners', label: navigation('partners'), href: '/' },
    { id: 'home', label: navigation('home'), href: '/' },
  ];

  return (
    <header className='relative flex items-center justify-end md:justify-betwen w-full md:flex-col px-2 sm:px-4 md:px-8 lg:px-12 xl:px-24 mt-4'>
      <nav className='hidden md:block h-16 w-full border-b border-primarytext-primary-foreground/50 '>
        <ul className='shrink-1 flex size-full items-center justify-between gap-x-px xl:gap-x-8'>
          {navigationItems.map((item) => (
            <li className='font-monda flex size-full' key={item.id}>
              <Link
                href={item.href}
                className='flex size-full items-center justify-center text-center text-base font-bold tracking-[-0.96px] text-primary-foreground hover:text-blue-500'
                locale={locale}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <MobileMenu
        locale={locale}
        className='block md:hidden relative p-0 w-12 aspect-square bg-transparent border-none cursor-pointer burger-button burger-button_after'
      />
    </header>
  );
};
