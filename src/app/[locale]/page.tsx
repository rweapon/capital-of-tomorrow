import { Locale, routing } from 'i18n/routing';
import { setRequestLocale } from 'next-intl/server';

import { HomeContents } from '@/app/[locale]/pageContents';

type HomePageProps = {
  params: { locale: Locale };
};

const Home = ({ params }: HomePageProps) => {
  const { locale } = params;
  setRequestLocale(locale);

  return <HomeContents locale={locale} />;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default Home;
