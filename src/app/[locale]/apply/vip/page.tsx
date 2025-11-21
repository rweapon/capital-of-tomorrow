import { redirect } from 'i18n/navigation';
import { Locale, routing } from 'i18n/routing';
import { setRequestLocale } from 'next-intl/server';

import { NavigationKeys } from '@/constant/data';

type ApplyPageProps = {
  params: { locale: Locale };
};

export default function ApplyPage({ params }: ApplyPageProps) {
  const { locale } = params;
  setRequestLocale(locale);
  redirect({ href: `/${NavigationKeys.APPLY}/vip/1`, locale });
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
