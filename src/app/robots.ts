import { MetadataRoute } from 'next';

import { env } from '@/env.mjs';
export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${env.APP_URL}/sitemap.xml`,
  };
}
