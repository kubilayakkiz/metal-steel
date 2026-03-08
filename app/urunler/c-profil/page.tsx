import type { Metadata } from 'next';
import ProductSectionWithImage from '@/components/ProductSectionWithImage';

export const metadata: Metadata = {
  title: 'C Profil - Metal X Endüstriyel San. ve Tic. LTD. ŞTİ.',
  description: 'C profil (soğuk haddelenmiş kanal). Yapısal çelik, çatı ve cephe sistemleri için C profiller.',
};

export default function CProfilPage() {
  return (
    <div className="w-full">
      <section className="relative py-20 md:py-32 lg:py-40 overflow-hidden text-white">
        <div className="absolute inset-0">
          <img src="/boru_profil.jpg" alt="C Profil" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#3d4f5f]/90 to-[#1a1a5e]/90" />
        </div>
        <div className="relative container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-3xl">C Profil</h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl">
            Soğuk haddelenmiş C (kanal) profiller
          </p>
        </div>
      </section>

      <ProductSectionWithImage src="/boru_profil.jpg" alt="C Profil" imagePosition="left">
        <h2 className="text-3xl md:text-4xl font-bold text-[#3d4f5f] mb-6">Ürün Hakkında</h2>
        <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
          <p>
            C profiller (soğuk haddelenmiş kanal profiller), U kesitli açık profillerdir. Hafif çelik yapılar,
            çatı makasları, cephe sistemleri, raf ve depolama sistemlerinde yaygın olarak kullanılır. Soğuk
            haddeleme ile üretildiği için yüksek boyutsal hassasiyet ve yüzey kalitesi sunar.
          </p>
          <p>
            Metal X olarak çeşitli boyut ve kalınlıklarda C profiller tedarik etmekteyiz. Ürünlerimiz yapısal
            uygulamalar ve hafif çelik konstrüksiyon için uygundur.
          </p>
        </div>
      </ProductSectionWithImage>

      <ProductSectionWithImage src="/boru_profil.jpg" alt="C Profil" imagePosition="right" bgColor="gray">
        <h2 className="text-3xl md:text-4xl font-bold text-[#3d4f5f] mb-8">Standart Boyutlar</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-[#3d4f5f] mb-4">Profil Özellikleri</h3>
            <ul className="space-y-2 text-gray-700">
              <li>Soğuk haddelenmiş</li>
              <li>Çeşitli yükseklik ve genişlikler</li>
              <li>0,8–3,0 mm kalınlık aralığı</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-[#3d4f5f] mb-4">Uygulama Alanları</h3>
            <ul className="space-y-2 text-gray-700">
              <li>Hafif çelik yapılar</li>
              <li>Çatı ve cephe sistemleri</li>
              <li>Raf ve depolama sistemleri</li>
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
            <p className="text-xl mb-8 text-gray-100">C profil ürünlerimiz hakkında detaylı bilgi ve teklif için bizimle iletişime geçin.</p>
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
