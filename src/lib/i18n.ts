import { Middleware, Navigation, PrefixStrategy } from '@inlang/paraglide-next';

import type { AvailableLanguageTag } from '@/paraglide/runtime';

const strategy = PrefixStrategy<AvailableLanguageTag>({
  prefixDefault: 'never',

  exclude: (pathname) => {
    return pathname.startsWith('/api/') || pathname === '/api';
  },
});

export const middleware = Middleware({ strategy });
export const { Link, useRouter, usePathname, redirect, permanentRedirect } = Navigation({
  strategy,
});
