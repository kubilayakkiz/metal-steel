import type { Metadata } from 'next';
import ProductCategoryPage from '@/components/ProductCategoryPage';
import { getCategoryBySlug } from '@/lib/productCategories';

export const metadata: Metadata = {
  title: 'Hadde Profil Grubu - Metal X Endüstriyel San. ve Tic. LTD. ŞTİ.',
  description: 'Hadde profil ürünleri. İnşaat demiri ve diğer hadde profil çözümleri.',
};

export default function HaddeProfilPage() {
  const category = getCategoryBySlug('hadde-profil');
  if (!category) return null;

  return <ProductCategoryPage category={category} heroImage="/insaatdemiri.jpg" />;
}
