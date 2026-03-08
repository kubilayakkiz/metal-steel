import type { Metadata } from 'next';
import ProductCategoryPage from '@/components/ProductCategoryPage';
import { getCategoryBySlug } from '@/lib/productCategories';

export const metadata: Metadata = {
  title: 'Boru ve Kutu Profiller - Metal X Endüstriyel San. ve Tic. LTD. ŞTİ.',
  description: 'Çelik boru ve kutu profil ürünleri. Yüksek kalite standartları ve geniş ürün yelpazesi.',
};

export default function BoruVeKutuProfillerPage() {
  const category = getCategoryBySlug('boru-ve-kutu-profiller');
  if (!category) return null;

  return <ProductCategoryPage category={category} heroImage="/boru_profil.jpg" />;
}
