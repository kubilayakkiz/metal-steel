import type { Metadata } from 'next';
import FlatSteelProductPage from '@/components/FlatSteelProductPage';

export const metadata: Metadata = {
  title: 'Alusi Steel - Metal X Steel',
  description: 'Aluminium-silicon coated (+AS) steel for high-temperature service.',
};

export default function Page() {
  return <FlatSteelProductPage slug="alusi-sac" />;
}
