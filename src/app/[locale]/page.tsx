import { Locale, routing } from 'i18n/routing';
import { setRequestLocale } from 'next-intl/server';

import { BlobsParallaxGroup } from '@/components';

import { HomeContents } from '@/app/[locale]/homeContents';
import { blobs } from '@/constant/data';

type HomePageProps = {
  params: { locale: Locale };
};

const Home = ({ params }: HomePageProps) => {
  const { locale } = params;
  setRequestLocale(locale);

  return (
    <>
      <BlobsParallaxGroup blobs={blobs} />
      <HomeContents locale={locale} />;
    </>
  );
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default Home;
