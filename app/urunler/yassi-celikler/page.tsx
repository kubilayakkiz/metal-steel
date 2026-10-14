import type { Metadata } from 'next';
import ProductCategoryPage from '@/components/ProductCategoryPage';
import { getCategoryBySlug } from '@/lib/productCategories';

export const metadata: Metadata = {
  title: 'Yassı Çelikler - Metal X Endüstriyel San. ve Tic. LTD. ŞTİ.',
  description: 'Corten, sıcak ve soğuk hadde, asitlenmiş, galvaniz, elektro galvaniz, boyalı, Alusi, Aluzinc, Galvanil, Galfan ve Magnelis yassı çelik ürünleri.',
};

export default function YassiCeliklerPage() {
  const category = getCategoryBySlug('yassi-celikler');
  if (!category) return null;

  return <ProductCategoryPage category={category} heroImage="/urunler.jpg" />;
}
