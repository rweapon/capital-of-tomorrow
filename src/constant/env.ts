export const isProd = process.env.NODE_ENV === 'production';
export const isLocal = process.env.NODE_ENV === 'development';

export const showLogger = isLocal
  ? true
  : process.env.NEXT_PUBLIC_SHOW_LOGGER === 'true' || false;

export const imagePrefix = '/images';

export const RESEND_API_KEY = process.env.RESEND_API_KEY || '';
export const FROM_EMAIL = process.env.FROM_EMAIL || '';
export const ADMIN_EMAIL = process.env.ADMIN_EMAIL || '';
