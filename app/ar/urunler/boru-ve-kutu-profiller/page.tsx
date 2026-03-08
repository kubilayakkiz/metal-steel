import type { Metadata } from 'next';
import ProductCategoryPage from '@/components/ProductCategoryPage';
import { getCategoryBySlug } from '@/lib/productCategories';

export const metadata: Metadata = {
  title: 'الأنابيب والملفات - Metal X',
  description: 'منتجات الأنابيب والملفات الفولاذية.',
};

export default function BoruVeKutuProfillerPage() {
  const category = getCategoryBySlug('boru-ve-kutu-profiller');
  if (!category) return null;

  return <ProductCategoryPage category={category} heroImage="/boru_profil.jpg" locale="ar" />;
}
