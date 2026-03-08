import type { Metadata } from 'next';
import ProductSectionWithImage from '@/components/ProductSectionWithImage';

export const metadata: Metadata = {
  title: 'Boru ve Profil - Metal X Endüstriyel San. ve Tic. LTD. ŞTİ.',
  description: 'Boru ve profil ürünleri. Yüksek kalite standartları, üretim limitleri ve teknik özellikler hakkında bilgi.',
};

export default function BoruVeProfilPage() {
  return (
    <div className="w-full">
      <section className="relative py-20 md:py-32 lg:py-40 overflow-hidden text-white">
        <div className="absolute inset-0">
          <img 
            src="/boru_profil.jpg" 
            alt="Boru ve Profil"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#3d4f5f]/90 to-[#1a1a5e]/90"></div>
        </div>
        <div className="relative container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-3xl">
            Boru ve Profil
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl">
            Yüksek kaliteli boru ve profil ürünleri
          </p>
        </div>
      </section>

      <ProductSectionWithImage src="/boru_profil.jpg" alt="Boru ve Profil" imagePosition="left">
        <h2 className="text-3xl md:text-4xl font-bold text-[#3d4f5f] mb-6">
          Ürün Hakkında
        </h2>
        <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
          <p>
            Boru ve profil ürünlerimiz, yapı, inşaat, otomotiv ve genel endüstriyel uygulamalarda 
            yaygın olarak kullanılmaktadır. Çeşitli boyut ve şekillerde üretilen boru ve profil 
            ürünlerimiz, yüksek kalite standartlarına uygun olarak üretilmektedir.
          </p>
          <p>
            Metal X Endüstriyel San. ve Tic. LTD. ŞTİ.'in boru ve profil ürünleri, yapısal uygulamalar, iletim sistemleri ve 
            genel endüstriyel kullanım için ideal çözümler sunmaktadır. Ürünlerimiz, müşterilerimizin 
            en yüksek beklentilerini karşılamaktadır.
          </p>
        </div>
      </ProductSectionWithImage>

      <ProductSectionWithImage src="/boru_profil.jpg" alt="Boru ve Profil" imagePosition="right" bgColor="gray">
        <h2 className="text-3xl md:text-4xl font-bold text-[#3d4f5f] mb-8">
          Üretim Limitleri
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#3d4f5f] mb-4">Boru Çapı</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#3d4f5f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Minimum: 10 mm</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#3d4f5f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Maksimum: 500 mm</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#3d4f5f] mb-4">Kalınlık</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#3d4f5f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Minimum: 1.0 mm</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#3d4f5f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Maksimum: 20 mm</span>
                  </li>
                </ul>
              </div>
            </div>
      </ProductSectionWithImage>

      <section className="relative py-16 md:py-24 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/bizimleiletisimegecin.jpg" 
            alt="Bizimle İletişime Geçin"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#3d4f5f]/80"></div>
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Bizimle İletişime Geçin
            </h2>
            <p className="text-xl mb-8 text-gray-100">
              Boru ve profil ürünlerimiz hakkında detaylı bilgi ve teklif için bizimle iletişime geçin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/iletisim" className="px-8 py-4 bg-white text-[#3d4f5f] font-bold rounded-lg hover:bg-gray-100 transition-colors">
                İletişime Geç
              </a>
              <a href="/teklif-al" className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors">
                Teklif Al
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

