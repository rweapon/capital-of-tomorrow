'use client';

import { usePathname } from 'next/navigation';
import React, { PropsWithChildren } from 'react';

import { VipAccordion } from '@/app/[locale]/apply/vip/components/VipAccordion/VipAccordion';
import { ApplyHero } from '@/views/Apply/Hero';

export default function ApplyLayout({ children }: PropsWithChildren) {
  const pathname = usePathname();

  const isVip = pathname.includes('vip');
  const isFirstStep = pathname.includes('1');

  return (
    <>
      <ApplyHero page={isVip ? 'apply_vip' : 'apply'} />
      {isVip && isFirstStep && <VipAccordion />}
      {children}
    </>
  );
}
