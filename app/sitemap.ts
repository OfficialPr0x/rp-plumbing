import type { MetadataRoute } from 'next';
import { rpAreas, rpServices } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    '',
    '/services',
    '/about',
    '/contact',
    ...rpServices.map((service) => service.href),
    ...rpAreas.map((area) => area.href),
  ];
  return paths.map((path) => ({
    url: `https://rpplumbing.ca${path || '/'}`,
    changeFrequency: 'monthly',
    priority: path === '' ? 1 : 0.7,
  }));
}
