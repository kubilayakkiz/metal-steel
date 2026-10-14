import type { Metadata } from 'next';
import FlatSteelProductPage from '@/components/FlatSteelProductPage';

export const metadata: Metadata = {
  title: 'Galfan Sac - Metal X Endüstriyel San. ve Tic. LTD. ŞTİ.',
  description: 'Çinko-alüminyum kaplamalı (+ZA) Galfan sac. Korozyon direnci ve şekillendirme.',
};

export default function Page() {
  return <FlatSteelProductPage slug="galfan-sac" />;
}
