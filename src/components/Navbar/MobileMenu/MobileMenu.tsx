'use client';

import { Link } from 'i18n/navigation';
import { Locale } from 'i18n/routing';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

import { LanguageSwitcher } from '@/components';
import { Button } from '@/components/Button/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import { flatNavigationItems } from '@/constant/data';

type MobileMenuProps = {
  locale: Locale;
  className?: string;
  isLanguageSwitcherChecked: boolean;
  onChangeLanguage: (value: boolean) => void;
};

export const MobileMenu = ({
  locale,
  className,
  isLanguageSwitcherChecked,
  onChangeLanguage,
}: MobileMenuProps) => {
  const [open, setOpen] = useState(false);
  const navigation = useTranslations('navigation');

  const navigationItems = flatNavigationItems.map((item) => ({
    ...item,
    label: navigation(item.id),
  }));

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className={className} />
      </DialogTrigger>
      <DialogContent
        className='w-full h-full m-0 p-5 bg-primary border-none max-w-full max-h-full'
        onCloseAutoFocus={(e) => e.preventDefault()}
      >
        <DialogHeader>
          <DialogTitle className='invisible'>Mobile Menu</DialogTitle>
          <DialogDescription></DialogDescription>
          <Button onClick={() => setOpen(false)} className='cross-button' />
        </DialogHeader>
        <ul className='flex flex-col size-full items-center justify-between gap-px xl:gap-8'>
          {navigationItems.map((item) => (
            <li
              className='font-monda flex size-full active:text-opacity-70 hover:text-opacity-70'
              key={item.id}
            >
              <Link
                href={item.href}
                locale={locale}
                className='flex size-full items-center justify-center text-center text-xl font-bold text-primary-foreground'
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <LanguageSwitcher
            checked={isLanguageSwitcherChecked}
            onChangeLanguage={onChangeLanguage}
          />
        </ul>
      </DialogContent>
    </Dialog>
  );
};
