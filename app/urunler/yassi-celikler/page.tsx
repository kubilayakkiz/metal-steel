import type { Metadata } from 'next';
import ProductCategoryPage from '@/components/ProductCategoryPage';
import { getCategoryBySlug } from '@/lib/productCategories';

export const metadata: Metadata = {
  title: 'Yassı Çelikler - Metal X Endüstriyel San. ve Tic. LTD. ŞTİ.',
  description: 'Sıcak ve soğuk haddelenmiş, kaplamalı ve işlenmiş yassı çelik ürünleri. ZAM, galvanizli sac, boyalı sac ve daha fazlası.',
};

export default function YassiCeliklerPage() {
  const category = getCategoryBySlug('yassi-celikler');
  if (!category) return null;

  return <ProductCategoryPage category={category} heroImage="/urunler.jpg" />;
}
