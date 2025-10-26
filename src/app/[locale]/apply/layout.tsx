import React, { PropsWithChildren } from 'react';

import { ApplyHero } from '@/views/Apply/Hero';

export default async function ApplyLayout({ children }: PropsWithChildren) {
  return (
    <>
      <ApplyHero />
      {children}
    </>
  );
}
