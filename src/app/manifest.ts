import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'OptiFlow Digital Agency',
    short_name: 'OptiFlow',
    description: 'OptiFlow is a premium digital agency specializing in web development, AI automation, Meta Ads management, app development, and data scraping.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#0a0e27',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
