import { redirect } from 'i18n/navigation';
import { Locale, routing } from 'i18n/routing';
import { setRequestLocale } from 'next-intl/server';

type ApplyPageProps = {
  params: { locale: Locale };
};

export default function ApplyPage({ params }: ApplyPageProps) {
  const { locale } = params;
  setRequestLocale(locale);
  redirect({ href: { pathname: '/apply/1' }, locale });
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
