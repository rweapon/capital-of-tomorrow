import { Locale, routing } from 'i18n/routing';
import { setRequestLocale } from 'next-intl/server';

import { LandingContents } from '@/app/[locale]/LandingContents';

type ApplyPageProps = {
  params: { locale: Locale };
};

export default function ApplyPage({ params }: ApplyPageProps) {
  const { locale } = params;
  setRequestLocale(locale);

  return <LandingContents locale={locale} />;
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
