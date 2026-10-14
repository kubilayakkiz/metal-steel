import type { Metadata } from 'next';
import FlatSteelProductPage from '@/components/FlatSteelProductPage';

export const metadata: Metadata = {
  title: 'Galfan Steel - Metal X Steel',
  description: 'Zinc-aluminium coated (+ZA) Galfan steel for corrosion resistance and forming.',
};

export default function Page() {
  return <FlatSteelProductPage slug="galfan-sac" />;
}
