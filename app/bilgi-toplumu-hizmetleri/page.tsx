import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';

export const metadata: Metadata = {
  title: 'Bilgi Toplumu Hizmetleri - Metal X Endüstriyel San. ve Tic. LTD. ŞTİ.',
  description: '6563 sayılı kanun kapsamında Metal X ticari kimlik ve iletişim bilgileri.',
};

export default function BilgiToplumuPage() {
  return <LegalPage documentId="bilgi" />;
}
