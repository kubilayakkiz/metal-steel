import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';

export const metadata: Metadata = {
  title: 'Privacy Notice - Metal X Steel',
  description: 'Metal X privacy and personal data notice.',
};

export default function Page() {
  return <LegalPage documentId="kvkk" />;
}
