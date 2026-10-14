import type { Metadata } from 'next';
import FlatSteelProductPage from '@/components/FlatSteelProductPage';

export const metadata: Metadata = {
  title: 'Alusi Sac - Metal X Endüstriyel San. ve Tic. LTD. ŞTİ.',
  description: 'Alüminyum-silikon kaplamalı (+AS) sac. Yüksek sıcaklık uygulamaları.',
};

export default function Page() {
  return <FlatSteelProductPage slug="alusi-sac" />;
}
