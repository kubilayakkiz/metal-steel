import type { Metadata } from 'next';
import FlatSteelProductPage from '@/components/FlatSteelProductPage';

export const metadata: Metadata = {
  title: 'Galvanil Sac - Metal X Endüstriyel San. ve Tic. LTD. ŞTİ.',
  description: 'Galvannealed (+ZF) demir-çinko alaşım kaplamalı sac. Kaynak ve boya uyumu.',
};

export default function Page() {
  return <FlatSteelProductPage slug="galvanil-sac" />;
}
