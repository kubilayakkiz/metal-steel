import type { Metadata } from 'next';
import FlatSteelProductPage from '@/components/FlatSteelProductPage';

export const metadata: Metadata = {
  title: 'Aluzinc Steel - Metal X Steel',
  description: 'Aluminium-zinc coated (+AZ) steel for roofing, façades and outdoor use.',
};

export default function Page() {
  return <FlatSteelProductPage slug="aluzinc-sac" />;
}
