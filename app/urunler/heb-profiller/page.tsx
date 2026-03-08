import type { Metadata } from 'next';
import ProductSectionWithImage from '@/components/ProductSectionWithImage';

export const metadata: Metadata = {
  title: 'HEB Profiller - Metal X Endüstriyel San. ve Tic. LTD. ŞTİ.',
  description: 'HEB (geniş flanşlı I-kiriş) profiller. Yapısal çelik ve ağır yük taşıma uygulamaları için HEB profiller.',
};

export default function HEBProfillerPage() {
  return (
    <div className="w-full">
      <section className="relative py-20 md:py-32 lg:py-40 overflow-hidden text-white">
        <div className="absolute inset-0">
          <img src="/insaatdemiri.jpg" alt="HEB Profiller" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#3d4f5f]/90 to-[#1a1a5e]/90" />
        </div>
        <div className="relative container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-3xl">HEB Profiller</h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl">
            Geniş flanşlı HEB I-kiriş profiller
          </p>
        </div>
      </section>

      <ProductSectionWithImage src="/insaatdemiri.jpg" alt="HEB Profiller" imagePosition="left">
        <h2 className="text-3xl md:text-4xl font-bold text-[#3d4f5f] mb-6">Ürün Hakkında</h2>
        <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
          <p>
            HEB profiller, HEA profillere göre daha geniş flanşlı I-kiriş profillerdir. Daha yüksek mukavemet ve
            moment taşıma kapasitesi sunar. Ağır yük taşıma gerektiren endüstriyel tesisler, depo yapıları ve büyük
            açıklıklı yapılarda tercih edilir.
          </p>
          <p>
            Metal X olarak HEB 100’den HEB 1000’e kadar standart boyutlarda HEB profiller tedarik etmekteyiz.
          </p>
        </div>
      </ProductSectionWithImage>

      <ProductSectionWithImage src="/insaatdemiri.jpg" alt="HEB Profiller" imagePosition="right" bgColor="gray">
        <h2 className="text-3xl md:text-4xl font-bold text-[#3d4f5f] mb-8">Standart Boyutlar</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-[#3d4f5f] mb-4">Profil Serileri</h3>
            <ul className="space-y-2 text-gray-700">
              <li>HEB 100 – HEB 1000</li>
              <li>EN 10365 standardı</li>
              <li>Geniş flanş avantajı</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-[#3d4f5f] mb-4">Uygulama Alanları</h3>
            <ul className="space-y-2 text-gray-700">
              <li>Endüstriyel tesisler</li>
              <li>Depo ve hangar yapıları</li>
              <li>Ağır yük taşıma sistemleri</li>
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
            <p className="text-xl mb-8 text-gray-100">HEB profil ürünlerimiz hakkında detaylı bilgi ve teklif için bizimle iletişime geçin.</p>
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
