import { MetadataRoute } from 'next';

export default async function manifest(): Promise<MetadataRoute.Manifest> {

  return {
    name: 'Capital of Tomorrow',
    start_url: '/',
    theme_color: '#101E33'
  };
}