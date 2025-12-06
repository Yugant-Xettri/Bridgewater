import { MetadataRoute } from 'next';
import { generateSitemap } from '../seo';

export default function sitemap(): MetadataRoute.Sitemap {
  return generateSitemap();
}
