export const isProd = process.env.NODE_ENV === 'production';
export const isLocal = process.env.NODE_ENV === 'development';

export const showLogger = isLocal
  ? true
  : process.env.NEXT_PUBLIC_SHOW_LOGGER === 'true' || false;

export const basePath = isLocal
  ? process.env.NEXT_PUBLIC_BASE_PATH
  : '/capital-of-tomorrow';

export const imagePrefix = isLocal ? '/public' : '/images';
