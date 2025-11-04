import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ZAM (Min 25 Yıl Yüksek Korozyon Dayanımı) - Metal X Endüstriyel San. ve Tic. LTD. ŞTİ.',
  description: 'ZAM kaplamalı çelik sac ürünleri. Minimum 25 yıl yüksek korozyon dayanımı, üretim limitleri ve kalite standartları hakkında bilgi.',
};

export default function ZAMPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 lg:py-40 overflow-hidden text-white">
        <div className="absolute inset-0">
          <img 
            src="/ZAM.jpg" 
            alt="ZAM Ürünü"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#261dcf]/90 to-[#1a1a5e]/90"></div>
        </div>
        <div className="relative container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-3xl">
            ZAM (Min 25 Yıl Yüksek Korozyon Dayanımı)
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl">
            Çinko, Alüminyum ve Magnezyum alaşımı ile üstün korozyon koruması
          </p>
        </div>
      </section>

      {/* Ürün Hakkında */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 rounded-lg overflow-hidden shadow-lg relative h-[300px] md:h-[400px]">
              <img 
                src="/ZAM.jpg" 
                alt="ZAM Ürünü"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#261dcf]/30"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#261dcf] mb-6">
              Ürün Hakkında
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                ZAM (Zinc-Aluminum-Magnesium) kaplamalı çelik sac, gelişmiş korozyon koruması 
                sağlayan üstün bir kaplama teknolojisidir. Çinko, alüminyum ve magnezyum 
                alaşımından oluşan bu kaplama, minimum 25 yıl yüksek korozyon dayanımı sunar.
              </p>
              <p>
                ZAM kaplamalı sac ürünlerimiz, özellikle zorlu çevre koşullarında ve uzun ömürlü 
                uygulamalarda tercih edilmektedir. Otomotiv, yapı, tarım makineleri ve genel 
                endüstriyel uygulamalarda yaygın olarak kullanılmaktadır.
              </p>
              <p>
                Metal X Endüstriyel San. ve Tic. LTD. ŞTİ.'in ZAM kaplamalı sac ürünleri, yüksek kalite standartlarına uygun 
                olarak üretilmekte ve müşterilerimizin en yüksek beklentilerini karşılamaktadır.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Üretim Limitleri */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#261dcf] mb-8 text-center">
              Üretim Limitleri
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#261dcf] mb-4">Kalınlık</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#261dcf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Minimum: 0.4 mm</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#261dcf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Maksimum: 3.0 mm</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#261dcf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Standart kalınlıklar: 0.5, 0.7, 0.8, 1.0, 1.2, 1.5, 2.0, 2.5, 3.0 mm</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#261dcf] mb-4">Genişlik</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#261dcf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Minimum: 600 mm</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#261dcf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Maksimum: 1500 mm</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#261dcf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Özel genişlikler için müşteri hizmetlerimizle iletişime geçin</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#261dcf] mb-4">Kaplama Kalınlığı</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#261dcf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Minimum: 100 g/m²</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#261dcf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Maksimum: 350 g/m²</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#261dcf] mb-4">Ağırlık</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#261dcf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Minimum sipariş: 3 ton</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#261dcf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Maksimum sipariş: 300 ton</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kalite Standartları */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#261dcf] mb-8 text-center">
              Kalite Standartları
            </h2>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#261dcf] mb-3">Uluslararası Standartlar</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#261dcf] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span><strong>EN 10346:</strong> Sürekli kaplama ile sıcak daldırma çelik ürünleri</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#261dcf] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span><strong>ASTM A653:</strong> Çinko kaplamalı çelik standardı</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#261dcf] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span><strong>JIS G 3315:</strong> Japon çelik kaplama standardı</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#261dcf] mb-3">Korozyon Koruma Özellikleri</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#261dcf] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Minimum 25 yıl korozyon dayanımı garantisi</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#261dcf] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Geleneksel galvanizli saca göre 3-4 kat daha yüksek koruma</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#261dcf] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Kesme kenarlarında bile üstün koruma</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#261dcf] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Çevresel koşullara karşı üstün dayanım</span>
                  </li>
                </ul>
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
              ZAM kaplamalı sac ürünlerimiz hakkında detaylı bilgi ve teklif için bizimle iletişime geçin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/iletisim" className="px-8 py-4 bg-white text-[#261dcf] font-bold rounded-lg hover:bg-gray-100 transition-colors">
                İletişime Geç
              </a>
              <a href="#teklif" className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors">
                Teklif Al
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

