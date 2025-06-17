import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
    server: {
        APP_URL: z.string().url().min(1),
        NEXTAUTH_URL: z.string().url().optional(),
    },
    runtimeEnv: {
        APP_URL: process.env.APP_URL,
        NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    },
});
