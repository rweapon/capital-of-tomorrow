import { Locale, routing } from 'i18n/routing';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';

import ApplyClient from '@/app/[locale]/apply/[step]/ApplyClient';

type Props = {
  params: { step: string; locale: Locale };
};

export function generateStaticParams() {
  const steps = [{ step: '1' }, { step: '2' }, { step: '3' }, { step: '4' }];
  const locales = routing.locales.map((locale) => ({ locale }));

  return steps.map((step, i) => ({ ...step, ...locales[i] }));
}

const ApplyPage = ({ params }: Props) => {
  const numStep = parseInt(params.step);
  const { locale } = params;
  setRequestLocale(locale);

  // Validate step on server side
  if (![1, 2, 3, 4].includes(numStep)) {
    notFound();
  }

  return <ApplyClient numStep={numStep} locale={locale} />;
};

export default ApplyPage;
