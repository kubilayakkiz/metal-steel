import type { Metadata } from 'next';
import ProductCategoryPage from '@/components/ProductCategoryPage';
import { getCategoryBySlug } from '@/lib/productCategories';

export const metadata: Metadata = {
  title: 'Трубы и профили - Metal X',
  description: 'Стальные трубы и профили.',
};

export default function BoruVeKutuProfillerPage() {
  const category = getCategoryBySlug('boru-ve-kutu-profiller');
  if (!category) return null;

  return <ProductCategoryPage category={category} heroImage="/boru_profil.jpg" locale="ru" />;
}
