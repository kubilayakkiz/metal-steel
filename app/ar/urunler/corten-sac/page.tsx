import type { Metadata } from 'next';
import FlatSteelProductPage from '@/components/FlatSteelProductPage';

export const metadata: Metadata = {
  title: 'Corten Steel - Metal X Steel',
  description: 'Weathering steel (Corten) coil and plate. EN 10025-5 grades and technical specs.',
};

export default function Page() {
  return <FlatSteelProductPage slug="corten-sac" />;
}
