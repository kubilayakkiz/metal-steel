import type { Metadata } from 'next';
import ProductCategoryPage from '@/components/ProductCategoryPage';
import { getCategoryBySlug } from '@/lib/productCategories';

export const metadata: Metadata = {
  title: 'Flat Steels - Metal X Industrial',
  description: 'Hot and cold rolled, coated and processed flat steel products. ZAM, galvanized, pre-painted steel and more.',
};

export default function FlatSteelsPage() {
  const category = getCategoryBySlug('yassi-celikler');
  if (!category) return null;

  return <ProductCategoryPage category={category} heroImage="/urunler.jpg" locale="en" />;
}
