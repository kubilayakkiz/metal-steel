import type { Metadata } from 'next';
import ProductSectionWithImage from '@/components/ProductSectionWithImage';

export const metadata: Metadata = {
  title: 'Kare ve Dikdörtgen Kutu Profil - Metal X Endüstriyel San. ve Tic. LTD. ŞTİ.',
  description: 'Kare ve dikdörtgen kutu profil. Yapısal çelik, inşaat ve endüstriyel uygulamalar için kutu profiller.',
};

export default function KareDikdortgenKutuProfilPage() {
  return (
    <div className="w-full">
      <section className="relative py-20 md:py-32 lg:py-40 overflow-hidden text-white">
        <div className="absolute inset-0">
          <img src="/boru_profil.jpg" alt="Kare ve Dikdörtgen Kutu Profil" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#3d4f5f]/90 to-[#1a1a5e]/90" />
        </div>
        <div className="relative container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-3xl">Kare ve Dikdörtgen Kutu Profil</h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl">
            Yüksek mukavemetli kare ve dikdörtgen kesitli kutu profiller
          </p>
        </div>
      </section>

      <ProductSectionWithImage src="/boru_profil.jpg" alt="Kare ve Dikdörtgen Kutu Profil" imagePosition="left">
        <h2 className="text-3xl md:text-4xl font-bold text-[#3d4f5f] mb-6">Ürün Hakkında</h2>
        <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
          <p>
            Kare ve dikdörtgen kutu profiller, kapalı kesitli çelik profillerdir. Yüksek burulma ve eğilme
            dayanımı sayesinde yapısal çelik konstrüksiyonlarda, köprü ve kule yapılarında, makine imalatında
            ve genel endüstriyel uygulamalarda yaygın kullanılır.
          </p>
          <p>
            Metal X olarak kaynaklı kutu profilleri geniş boyut yelpazesiyle tedarik etmekteyiz. Ürünlerimiz
            EN 10219 ve EN 10210 standartlarına uygun olarak üretilmektedir.
          </p>
        </div>
      </ProductSectionWithImage>

      <ProductSectionWithImage src="/boru_profil.jpg" alt="Kare ve Dikdörtgen Kutu Profil" imagePosition="right" bgColor="gray">
        <h2 className="text-3xl md:text-4xl font-bold text-[#3d4f5f] mb-8">Standart Boyutlar</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-[#3d4f5f] mb-4">Profil Tipleri</h3>
            <ul className="space-y-2 text-gray-700">
              <li>Kare kutu profil (eşit kenar)</li>
              <li>Dikdörtgen kutu profil</li>
              <li>EN 10219 / EN 10210</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-[#3d4f5f] mb-4">Uygulama Alanları</h3>
            <ul className="space-y-2 text-gray-700">
              <li>Yapısal çelik binalar</li>
              <li>Köprü ve kule yapıları</li>
              <li>Makine ve ekipman imalatı</li>
            </ul>
          </div>
        </div>
      </ProductSectionWithImage>

      <section className="relative py-16 md:py-24 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img src="/bizimleiletisimegecin.jpg" alt="Bizimle İletişime Geçin" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#3d4f5f]/80" />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Bizimle İletişime Geçin</h2>
            <p className="text-xl mb-8 text-gray-100">Kare ve dikdörtgen kutu profil hakkında detaylı bilgi ve teklif için bizimle iletişime geçin.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/iletisim" className="px-8 py-4 bg-white text-[#3d4f5f] font-bold rounded-lg hover:bg-gray-100 transition-colors">İletişime Geç</a>
              <a href="/teklif-al" className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors">Teklif Al</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
