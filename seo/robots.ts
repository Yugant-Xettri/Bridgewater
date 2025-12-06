import { MetadataRoute } from 'next';
import { SEO_CONFIG } from './config';

const { baseUrl } = SEO_CONFIG;

export const robotsConfig: MetadataRoute.Robots = {
  rules: [
    {
      userAgent: 'Googlebot',
      allow: '/',
      disallow: ['/api/', '/portal/', '/_next/static/'],
    },
    {
      userAgent: 'Bingbot',
      allow: '/',
      disallow: ['/api/', '/portal/', '/_next/static/'],
    },
    {
      userAgent: 'Slurp',
      allow: '/',
      disallow: ['/api/', '/portal/', '/_next/static/'],
    },
    {
      userAgent: 'DuckDuckBot',
      allow: '/',
      disallow: ['/api/', '/portal/', '/_next/static/'],
    },
    {
      userAgent: 'Baiduspider',
      allow: '/',
      disallow: ['/api/', '/portal/', '/_next/static/'],
    },
    {
      userAgent: 'YandexBot',
      allow: '/',
      disallow: ['/api/', '/portal/', '/_next/static/'],
    },
    {
      userAgent: 'facebookexternalhit',
      allow: '/',
    },
    {
      userAgent: 'Twitterbot',
      allow: '/',
    },
    {
      userAgent: 'LinkedInBot',
      allow: '/',
    },
    {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/portal/', '/_next/static/', '/private/'],
    },
  ],
  sitemap: `${baseUrl}/sitemap.xml`,
  host: new URL(baseUrl).hostname,
};
