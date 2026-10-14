import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';

export const metadata: Metadata = {
  title: 'KVKK Aydınlatma Metni - Metal X Endüstriyel San. ve Tic. LTD. ŞTİ.',
  description: '6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında Metal X aydınlatma metni.',
};

export default function KvkkPage() {
  return <LegalPage documentId="kvkk" />;
}
