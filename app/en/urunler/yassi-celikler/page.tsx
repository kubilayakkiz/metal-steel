import type { Metadata } from 'next';
import ProductCategoryPage from '@/components/ProductCategoryPage';
import { getCategoryBySlug } from '@/lib/productCategories';

export const metadata: Metadata = {
  title: 'Flat Steels - Metal X Industrial',
  description: 'Corten, hot and cold rolled, pickled, galvanized, electro-galvanized, pre-painted, Alusi, Aluzinc, galvannealed, Galfan and Magnelis flat steel products.',
};

export default function FlatSteelsPage() {
  const category = getCategoryBySlug('yassi-celikler');
  if (!category) return null;

  return <ProductCategoryPage category={category} heroImage="/urunler.jpg" locale="en" />;
}
