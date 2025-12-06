import { MetadataRoute } from 'next';
import { robotsConfig } from '../seo';

export default function robots(): MetadataRoute.Robots {
  return robotsConfig;
}
