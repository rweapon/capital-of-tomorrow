import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import React from 'react';

import '@leenguyen/react-flip-clock-countdown/dist/index.css';

export const FlipClock = () => {
  const to = new Date('2026-01-01').getTime();
  return (
    <FlipClockCountdown
      to={to}
      daysInHours
      showLabels={false}
      showSeparators={false}
      className='flip-clock !font-monda !font-bold'
    />
  );
};
