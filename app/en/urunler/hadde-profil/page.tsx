import type { Metadata } from 'next';
import ProductCategoryPage from '@/components/ProductCategoryPage';
import { getCategoryBySlug } from '@/lib/productCategories';

export const metadata: Metadata = {
  title: 'Rolled Profile Group - Metal X Industrial',
  description: 'Rolled profile products. Rebar and other rolled profile solutions.',
};

export default function RolledProfilePage() {
  const category = getCategoryBySlug('hadde-profil');
  if (!category) return null;

  return <ProductCategoryPage category={category} heroImage="/insaatdemiri.jpg" locale="en" />;
}
