import type { Metadata } from 'next';
import FlatSteelProductPage from '@/components/FlatSteelProductPage';

export const metadata: Metadata = {
  title: 'Aluzinc Sac - Metal X Endüstriyel San. ve Tic. LTD. ŞTİ.',
  description: 'Alüminyum-çinko-silikon kaplamalı (+AZ) sac. Çatı, cephe ve dış ortam.',
};

export default function Page() {
  return <FlatSteelProductPage slug="aluzinc-sac" />;
}
