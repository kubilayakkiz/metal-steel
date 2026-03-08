import type { Metadata } from 'next';
import ProductSectionWithImage from '@/components/ProductSectionWithImage';

export const metadata: Metadata = {
  title: 'Boru Profilleri - Metal X Endüstriyel San. ve Tic. LTD. ŞTİ.',
  description: 'Çelik boru profilleri. Yuvarlak, kare ve dikdörtgen boru profilleri, yüksek kalite standartları.',
};

export default function BoruProfilleriPage() {
  return (
    <div className="w-full">
      <section className="relative py-20 md:py-32 lg:py-40 overflow-hidden text-white">
        <div className="absolute inset-0">
          <img src="/boru_profil.jpg" alt="Boru Profilleri" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#3d4f5f]/90 to-[#1a1a5e]/90" />
        </div>
        <div className="relative container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-3xl">Boru Profilleri</h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl">
            Yuvarlak, kare ve dikdörtgen çelik boru profilleri
          </p>
        </div>
      </section>

      <ProductSectionWithImage src="/boru_profil.jpg" alt="Boru Profilleri" imagePosition="left">
        <h2 className="text-3xl md:text-4xl font-bold text-[#3d4f5f] mb-6">Ürün Hakkında</h2>
        <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
          <p>
            Boru profillerimiz, yapısal uygulamalar, iletim sistemleri, otomotiv ve genel endüstriyel kullanım için
            üretilmektedir. Yuvarlak (dairesel), kare ve dikdörtgen kesitli boru profilleri geniş boyut yelpazesiyle
            sunulmaktadır.
          </p>
          <p>
            Metal X olarak kaynaklı ve dikişsiz boru profilleri tedarik etmekteyiz. Ürünlerimiz yüksek kalite
            standartlarına uygun olarak üretilmektedir.
          </p>
        </div>
      </ProductSectionWithImage>

      <ProductSectionWithImage src="/boru_profil.jpg" alt="Boru Profilleri" imagePosition="right" bgColor="gray">
        <h2 className="text-3xl md:text-4xl font-bold text-[#3d4f5f] mb-8">Üretim Limitleri</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-[#3d4f5f] mb-4">Boru Çapı</h3>
            <ul className="space-y-2 text-gray-700">
              <li>Yuvarlak boru: 10–500 mm</li>
              <li>Kare/dikdörtgen: çeşitli boyutlar</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-[#3d4f5f] mb-4">Uygulama Alanları</h3>
            <ul className="space-y-2 text-gray-700">
              <li>Yapısal çelik konstrüksiyon</li>
              <li>İletim ve taşıma sistemleri</li>
              <li>Otomotiv ve makine sanayi</li>
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
            <p className="text-xl mb-8 text-gray-100">Boru profilleri hakkında detaylı bilgi ve teklif için bizimle iletişime geçin.</p>
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
