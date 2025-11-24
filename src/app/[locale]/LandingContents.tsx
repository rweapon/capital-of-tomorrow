import { Locale } from 'i18n/routing';
import React from 'react';

import { LandingEvents } from '@/views/Landing/Events/LandingEvents';
import { LandingHero } from '@/views/Landing/Hero/LandingHero';
import { LandingPlanet } from '@/views/Landing/LandingPlanet/LandingPlanet';
import { LandingPartners } from '@/views/Landing/Partners/LandingPartners';
import { LandingSolutions } from '@/views/Landing/Solutions/LandingSolutions';
import { LandingValues } from '@/views/Landing/Values/LandingValues';

type LandingContentsProps = {
  locale: Locale;
};

export const LandingContents = ({ locale }: LandingContentsProps) => {
  return (
    <>
      <LandingHero />
      <LandingPlanet />
      <LandingEvents locale={locale} />
      <LandingValues />
      <LandingSolutions />
      <LandingPartners />
    </>
  );
};
