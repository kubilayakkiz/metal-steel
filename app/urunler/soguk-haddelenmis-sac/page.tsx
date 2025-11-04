import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Soğuk Haddelenmiş Sac - Metal X Endüstriyel San. ve Tic. LTD. ŞTİ.',
  description: 'Soğuk haddelenmiş sac ürünleri. Yüksek kalite standartları, üretim limitleri ve teknik özellikler hakkında bilgi.',
};

export default function SogukHaddelenmisSacPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 lg:py-40 overflow-hidden text-white">
        <div className="absolute inset-0">
          <img 
            src="/sogukhaddelenmissac.jpg" 
            alt="Soğuk Haddelenmiş Sac"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#261dcf]/90 to-[#1a1a5e]/90"></div>
        </div>
        <div className="relative container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-3xl">
            Soğuk Haddelenmiş Sac
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl">
            Hassas kalınlık toleransları ve mükemmel yüzey kalitesi
          </p>
        </div>
      </section>

      {/* Ürün Hakkında */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 rounded-lg overflow-hidden shadow-lg relative h-[300px] md:h-[400px]">
              <img 
                src="/sogukhaddelenmissac.jpg" 
                alt="Soğuk Haddelenmiş Sac"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#261dcf]/30"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#261dcf] mb-6">
              Ürün Hakkında
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                Soğuk haddelenmiş sac, oda sıcaklığında haddeleme işlemi sonrası yüksek kaliteli 
                yüzey ve hassas kalınlık toleranslarına sahip çelik sac ürünüdür. Bu işlem, 
                ürünün mekanik özelliklerini iyileştirirken mükemmel bir yüzey kalitesi sağlar.
              </p>
              <p>
                Metal X Endüstriyel San. ve Tic. LTD. ŞTİ.'in soğuk haddelenmiş sac ürünleri, otomotiv, beyaz eşya, elektronik, 
                ambalaj ve hassas uygulamalar gerektiren endüstriyel sektörlerde yaygın olarak 
                kullanılmaktadır. Ürünlerimiz, en yüksek kalite standartlarına uygun olarak 
                üretilmekte ve müşterilerimizin en hassas gereksinimlerini karşılamaktadır.
              </p>
              <p>
                Mükemmel yüzey kalitesi, hassas boyut toleransları ve geniş uygulama yelpazesi 
                ile soğuk haddelenmiş sac, birçok endüstriyel uygulama için ideal bir seçimdir.
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
                    <span>Minimum: 0.3 mm</span>
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
                    <span>Standart kalınlıklar: 0.5, 0.7, 0.8, 1.0, 1.2, 1.5, 2.0, 2.5 mm</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#261dcf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Kalınlık toleransı: ±0.05 mm</span>
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
                    <span>Minimum: 300 mm</span>
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
                    <span>Genişlik toleransı: ±2 mm</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#261dcf] mb-4">Uzunluk</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#261dcf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Minimum: 500 mm</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#261dcf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Maksimum: 6000 mm</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#261dcf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Standart uzunluklar: 1000, 2000, 2500, 3000 mm</span>
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
                    <span>Minimum sipariş: 2 ton</span>
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
                    <span><strong>EN 10130:</strong> Soğuk haddelenmiş düşük karbonlu çelikler için Avrupa standardı</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#261dcf] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span><strong>ASTM A1008:</strong> Soğuk haddelenmiş çelik için Amerikan standardı</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#261dcf] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span><strong>DIN 1623:</strong> Alman soğuk haddelenmiş çelik standardı</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#261dcf] mb-3">Kalite Özellikleri</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                  <div>
                    <p className="font-semibold mb-2">Mekanik Özellikler:</p>
                    <ul className="space-y-1 text-sm">
                      <li>• Çekme dayanımı: 270-420 N/mm²</li>
                      <li>• Akma dayanımı: ≥ 140 N/mm²</li>
                      <li>• Uzama: ≥ 22%</li>
                      <li>• Sertlik: HRB 45-65</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Kimyasal Bileşim:</p>
                    <ul className="space-y-1 text-sm">
                      <li>• Karbon (C): ≤ 0.15%</li>
                      <li>• Mangan (Mn): ≤ 0.60%</li>
                      <li>• Fosfor (P): ≤ 0.035%</li>
                      <li>• Kükürt (S): ≤ 0.035%</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#261dcf] mb-3">Yüzey Kalitesi</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#261dcf] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Mükemmel yüzey pürüzlülüğü (Ra ≤ 0.8 μm)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#261dcf] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Parlak ve temiz yüzey kalitesi</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#261dcf] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Boya ve kaplama uygulamalarına mükemmel uyum</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#261dcf] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Derin çekme ve şekillendirme işlemlerine uygun</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#261dcf] mb-3">Kalite Kontrol</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#261dcf] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Her parti ürün için mekanik test sertifikaları</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#261dcf] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Kimyasal analiz raporları</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#261dcf] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Yüzey kalite kontrolü ve görsel muayene</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#261dcf] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>ISO 9001:2015 kalite yönetim sistemi sertifikası</span>
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
              Soğuk haddelenmiş sac ürünlerimiz hakkında detaylı bilgi ve teklif için bizimle iletişime geçin.
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

