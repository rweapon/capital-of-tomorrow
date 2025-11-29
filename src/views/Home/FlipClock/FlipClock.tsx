import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import { useTranslations } from 'next-intl';
import React from 'react';

import '@leenguyen/react-flip-clock-countdown/dist/index.css';

export const FlipClock = () => {
  const t = useTranslations('home.hero.timer');
  const to = new Date('2026-01-29').getTime();

  const labels: [string, string, string, string] = [
    t('one'),
    t('two'),
    t('three'),
    t('four'),
  ];
  return (
    <FlipClockCountdown
      to={to}
      showLabels
      labels={labels}
      showSeparators={false}
      className='flip-clock !font-monda !font-bold text-[#ffffffc2]'
    />
  );
};
