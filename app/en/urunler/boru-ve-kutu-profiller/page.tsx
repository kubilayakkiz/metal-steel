import type { Metadata } from 'next';
import ProductCategoryPage from '@/components/ProductCategoryPage';
import { getCategoryBySlug } from '@/lib/productCategories';

export const metadata: Metadata = {
  title: 'Pipe and Box Profiles - Metal X Industrial',
  description: 'Steel pipe and box profile products. High quality standards and wide product range.',
};

export default function PipeAndBoxProfilesPage() {
  const category = getCategoryBySlug('boru-ve-kutu-profiller');
  if (!category) return null;

  return <ProductCategoryPage category={category} heroImage="/boru_profil.jpg" locale="en" />;
}
