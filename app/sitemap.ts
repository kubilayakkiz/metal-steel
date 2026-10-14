import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/contact-departments';

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    '/',
    '/urunler/yassi-celikler',
    '/iletisim',
    '/teklif-al',
    '/kurumsal/hakkimizda',
  ];

  return paths.map((path, index) => ({
    url: `${SITE_URL}${path === '/' ? '' : path}`,
    changeFrequency: 'weekly' as const,
    priority: index === 0 ? 1 : 0.8,
  }));
}
