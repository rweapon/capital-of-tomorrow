'use client';

import { PropsWithChildren } from 'react';
import { LanguageProvider } from '@inlang/paraglide-next';

export default function ClientProvider({ children }: PropsWithChildren) {
  return <LanguageProvider>{children}</LanguageProvider>;
}
