import type { Metadata } from 'next';
import FlatSteelProductPage from '@/components/FlatSteelProductPage';

export const metadata: Metadata = {
  title: 'Galvannealed Steel - Metal X Steel',
  description: 'Galvannealed (+ZF) iron-zinc coated steel for welding and paint adhesion.',
};

export default function Page() {
  return <FlatSteelProductPage slug="galvanil-sac" />;
}
