import type { Metadata } from 'next';
import ProductCategoryPage from '@/components/ProductCategoryPage';
import { getCategoryBySlug } from '@/lib/productCategories';

export const metadata: Metadata = {
  title: 'الصلب المسطح - Metal X',
  description: 'الصلب المسطح المدلفن الساخن والبارد والمطلي والمعالج.',
};

export default function YassiCeliklerPage() {
  const category = getCategoryBySlug('yassi-celikler');
  if (!category) return null;

  return <ProductCategoryPage category={category} heroImage="/urunler.jpg" locale="ar" />;
}
