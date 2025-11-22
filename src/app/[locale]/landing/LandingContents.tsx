import React from 'react';

import { LandingEvents } from '@/views/Landing/Events/LandingEvents';
import { LandingHero } from '@/views/Landing/Hero/LandingHero';
import { LandingPartners } from '@/views/Landing/Partners/LandingPartners';
import { LandingSolutions } from '@/views/Landing/Solutions/LandingSolutions';
import { LandingValues } from '@/views/Landing/Values/LandingValues';

export const LandingContents = () => {
  return (
    <>
      <LandingHero />
      <LandingEvents />
      <LandingValues />
      <LandingSolutions />
      <LandingPartners />
    </>
  );
};
