import type { Metadata } from 'next';
import ProductCategoryPage from '@/components/ProductCategoryPage';
import { getCategoryBySlug } from '@/lib/productCategories';

export const metadata: Metadata = {
  title: 'Profilés laminés - Metal X',
  description: 'Armatures et profilés laminés.',
};

export default function HaddeProfilPage() {
  const category = getCategoryBySlug('hadde-profil');
  if (!category) return null;

  return <ProductCategoryPage category={category} heroImage="/insaatdemiri.jpg" locale="fr" />;
}
