import type { Metadata } from 'next';
import FlatSteelProductPage from '@/components/FlatSteelProductPage';

export const metadata: Metadata = {
  title: 'Electro-galvanized Steel - Metal X Steel',
  description: 'Electrolytically zinc-coated (+ZE) steel. EN 10152 for automotive and appliances.',
};

export default function Page() {
  return <FlatSteelProductPage slug="elektro-galvanizli-sac" />;
}
