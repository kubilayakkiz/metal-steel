import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';

export const metadata: Metadata = {
  title: 'Information Society Services - Metal X Steel',
  description: 'Commercial identity information of Metal X.',
};

export default function Page() {
  return <LegalPage documentId="bilgi" />;
}
