import type { Metadata } from 'next';
import FlatSteelProductPage from '@/components/FlatSteelProductPage';

export const metadata: Metadata = {
  title: 'Corten Sac - Metal X Endüstriyel San. ve Tic. LTD. ŞTİ.',
  description: 'Atmosferik korozyona dayanıklı corten (weathering steel) sac. EN 10025-5 kaliteler, teknik özellikler.',
};

export default function Page() {
  return <FlatSteelProductPage slug="corten-sac" />;
}
