import type { Metadata } from 'next';
import FlatSteelProductPage from '@/components/FlatSteelProductPage';

export const metadata: Metadata = {
  title: 'Elektro Galvanizli Sac - Metal X Endüstriyel San. ve Tic. LTD. ŞTİ.',
  description: 'Elektrolitik çinko kaplamalı (+ZE) sac. EN 10152, otomotiv ve beyaz eşya.',
};

export default function Page() {
  return <FlatSteelProductPage slug="elektro-galvanizli-sac" />;
}
