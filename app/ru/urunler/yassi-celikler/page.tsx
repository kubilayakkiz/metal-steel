import type { Metadata } from 'next';
import ProductCategoryPage from '@/components/ProductCategoryPage';
import { getCategoryBySlug } from '@/lib/productCategories';

export const metadata: Metadata = {
  title: 'Плоская сталь - Metal X',
  description: 'Горячекатаная и холоднокатаная, с покрытием и обработанная плоская сталь.',
};

export default function YassiCeliklerPage() {
  const category = getCategoryBySlug('yassi-celikler');
  if (!category) return null;

  return <ProductCategoryPage category={category} heroImage="/urunler.jpg" locale="ru" />;
}
