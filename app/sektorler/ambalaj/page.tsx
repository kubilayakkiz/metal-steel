import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ambalaj Sektörü - Metal X Endüstriyel San. ve Tic. LTD. ŞTİ.',
  description: 'Ambalaj sektörü için çelik çözümleri. Konserve kutuları, ambalaj malzemeleri ve paketleme endüstrisi için yüksek kaliteli çelik ürünleri.',
};

export default function AmbalajPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 lg:py-40 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/ambalaj.jpg" 
            alt="Ambalaj Sektörü"
            className="w-full h-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#261dcf]/90 via-[#261dcf]/80 to-[#261dcf]/70"></div>
        </div>
        
        {/* Content */}
        <div className="relative container mx-auto px-4 text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-3xl">
            Ambalaj Sektörü
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl">
            Ambalaj endüstrisi için güvenilir çelik çözümleri
          </p>
        </div>
      </section>

      {/* Açıklama */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#261dcf] mb-6">
              Ambalaj Sektöründe Metal X Endüstriyel San. ve Tic. LTD. ŞTİ.
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                Metal X Endüstriyel San. ve Tic. LTD. ŞTİ., ambalaj sektörünün önde gelen çelik tedarikçilerinden biridir. Konserve 
                kutuları, ambalaj malzemeleri, paketleme endüstrisi ve gıda saklama çözümlerinde 
                kullanılan yüksek kaliteli çelik ürünleri sunuyoruz.
              </p>
              <p>
                Modern ambalaj endüstrisi, hijyen, güvenlik ve sürdürülebilirlik gereksinimlerini 
                bir arada karşılamalıdır. Metal X Endüstriyel San. ve Tic. LTD. ŞTİ.'in çelik ürünleri, bu gereksinimleri karşılayarak 
                ambalaj üreticilerinin yüksek kaliteli ve güvenli ürünler sunmalarına katkı sağlar.
              </p>
              <p>
                Geniş ürün yelpazemiz ve kalite standartlarımız ile ambalaj sektöründe faaliyet 
                gösteren firmalara kapsamlı çözümler sunuyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hizmet Alanları */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#261dcf] mb-8 text-center">
              Hizmet Alanları
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#261dcf] mb-3">
                  Gıda Ambalajları
                </h3>
                <p className="text-gray-700">
                  Konserve kutuları, gıda saklama kutuları ve gıda ambalajları için 
                  hijyenik çelik çözümleri.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#261dcf] mb-3">
                  Endüstriyel Ambalaj
                </h3>
                <p className="text-gray-700">
                  Endüstriyel ürün ambalajları, kimyasal ambalajları ve özel uygulamalar 
                  için çelik çözümleri.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#261dcf] mb-3">
                  Nakliye Konteynerleri
                </h3>
                <p className="text-gray-700">
                  Lojistik ve nakliye için dayanıklı çelik konteyner ve palet çözümleri.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#261dcf] mb-3">
                  Özel Ambalaj Tasarımları
                </h3>
                <p className="text-gray-700">
                  Müşteri özel ihtiyaçlarına göre özel tasarım ve üretim hizmetleri. 
                  Prototip geliştirme desteği.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#261dcf] mb-3">
                  Ambalaj Kapakları ve Kapatma Sistemleri
                </h3>
                <p className="text-gray-700">
                  Konserve kapakları, sızdırmazlık sistemleri ve kapatma çözümleri 
                  için özel çelik ürünleri.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#261dcf] mb-3">
                  Kalite Kontrol ve Sertifikasyon
                </h3>
                <p className="text-gray-700">
                  Gıda güvenliği standartlarına uygun ürünler. Kalite kontrol ve 
                  sertifikasyon desteği.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Çeliğin Avantajları */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#261dcf] mb-8 text-center">
              Ambalaj Sektöründe Çeliğin Avantajları
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#261dcf]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#261dcf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Hijyen ve Güvenlik</h3>
                  <p className="text-gray-700">
                    Gıda güvenliği standartlarına uygunluk. Temiz ve hijyenik ambalaj 
                    çözümleri sunar.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#261dcf]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#261dcf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Koruma Özelliği</h3>
                  <p className="text-gray-700">
                    Işık, oksijen ve dış etkenlere karşı mükemmel koruma. Ürünlerin 
                    uzun süre taze kalmasını sağlar.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#261dcf]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#261dcf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Geri Dönüşüm</h3>
                  <p className="text-gray-700">
                    %100 geri dönüştürülebilir malzeme. Sürdürülebilir ambalaj 
                    çözümleri sunar.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#261dcf]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#261dcf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Maliyet Etkinliği</h3>
                  <p className="text-gray-700">
                    Rekabetçi fiyatlar ve yüksek üretim hızı. Seri üretimde ekonomik 
                    avantajlar sağlar.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#261dcf]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#261dcf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Dayanıklılık</h3>
                  <p className="text-gray-700">
                    Zorlu taşıma ve depolama koşullarına dayanıklılık. Ürünlerin 
                    hasar görmeden ulaşmasını sağlar.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#261dcf]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#261dcf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Tasarım Esnekliği</h3>
                  <p className="text-gray-700">
                    Özel şekiller ve boyutlarda üretim imkanı. Marka kimliğinize 
                    uygun ambalaj tasarımları.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* İlgili Ürünler */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#261dcf] mb-8 text-center">
              Ambalaj Sektörü İçin İlgili Ürünler
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-[#261dcf] mb-3">
                  Teneke Sac
                </h3>
                <p className="text-gray-700 mb-4">
                  Konserve ve ambalaj üretimi için yüksek kaliteli teneke sac ürünleri.
                </p>
                <a href="/urunler/soguk-haddelenmis-sac" className="text-[#261dcf] font-semibold hover:underline">
                  Detayları Gör →
                </a>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-[#261dcf] mb-3">
                  Soğuk Haddelenmiş Sac
                </h3>
                <p className="text-gray-700 mb-4">
                  Hassas toleranslar ve mükemmel yüzey kalitesi ile ambalaj üretimi.
                </p>
                <a href="/urunler/soguk-haddelenmis-sac" className="text-[#261dcf] font-semibold hover:underline">
                  Detayları Gör →
                </a>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-[#261dcf] mb-3">
                  Galvanizli Sac
                </h3>
                <p className="text-gray-700 mb-4">
                  Korozyona dayanıklı galvanizli sac, dayanıklı ambalaj çözümleri için.
                </p>
                <a href="/urunler/galvanizli-sac" className="text-[#261dcf] font-semibold hover:underline">
                  Detayları Gör →
                </a>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-[#261dcf] mb-3">
                  Özel Kaplamalı Sac
                </h3>
                <p className="text-gray-700 mb-4">
                  Gıda güvenliği standartlarına uygun özel kaplama çözümleri.
                </p>
                <a href="/urunler/boyali-sac" className="text-[#261dcf] font-semibold hover:underline">
                  Detayları Gör →
                </a>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-[#261dcf] mb-3">
                  İnce Sac Ürünleri
                </h3>
                <p className="text-gray-700 mb-4">
                  Hafif ambalaj uygulamaları için ince sac ürünleri ve özel boyutlar.
                </p>
                <a href="/urunler/soguk-haddelenmis-sac" className="text-[#261dcf] font-semibold hover:underline">
                  Detayları Gör →
                </a>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-[#261dcf] mb-3">
                  Kalite Sertifikasyonu
                </h3>
                <p className="text-gray-700 mb-4">
                  Gıda güvenliği ve kalite standartlarına uygun sertifikasyon desteği.
                </p>
                <a href="/iletisim" className="text-[#261dcf] font-semibold hover:underline">
                  İletişime Geç →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 md:py-24 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/bizimleiletisimegecin.jpg" 
            alt="Bizimle İletişime Geçin"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#261dcf]/80"></div>
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Bizimle İletişime Geçin
            </h2>
            <p className="text-xl mb-8 text-gray-100">
              Ambalaj sektörü için çelik çözümlerimiz hakkında daha fazla bilgi almak veya teklif almak için bizimle iletişime geçin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/iletisim" className="px-8 py-4 bg-white text-[#261dcf] font-bold rounded-lg hover:bg-gray-100 transition-colors">
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

