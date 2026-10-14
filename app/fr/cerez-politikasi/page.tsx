import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';

export const metadata: Metadata = {
  title: 'Cookie Policy - Metal X Steel',
  description: 'Cookie policy for the Metal X website.',
};

export default function Page() {
  return <LegalPage documentId="cerez" />;
}
