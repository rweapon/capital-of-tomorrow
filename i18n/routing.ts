import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'ru'],

  // Used when no locale matches
  defaultLocale: 'en',
  localePrefix: 'as-needed',
});

export type Locale = (typeof routing.locales)[number];
