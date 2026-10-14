import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';

export const metadata: Metadata = {
  title: 'Çerez Politikası - Metal X Endüstriyel San. ve Tic. LTD. ŞTİ.',
  description: 'Metal X web sitesinde kullanılan çerezler ve tercihleriniz hakkında bilgi.',
};

export default function CerezPolitikasiPage() {
  return <LegalPage documentId="cerez" />;
}
