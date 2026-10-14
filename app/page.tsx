import type { Metadata } from 'next';
import HomePage from '@/components/HomePage';
import { COMPANY_BRAND } from '@/lib/contact-departments';

export const metadata: Metadata = {
  title: `${COMPANY_BRAND} | Yassı Çelik Tedarik`,
  description:
    'Metal X Endüstriyel San. ve Tic. LTD. ŞTİ. — yassı çelik, galvaniz, Magnelis ve çelik servis hizmetleri.',
};

export default function Page() {
  return <HomePage />;
}
