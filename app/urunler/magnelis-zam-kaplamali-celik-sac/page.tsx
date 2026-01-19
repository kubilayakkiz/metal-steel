import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Magnelis (ZAM) Kaplamalı Çelik Sac - Metal X Endüstriyel San. ve Tic. LTD. ŞTİ.',
  description: 'Magnelis (ZAM) kaplamalı çelik sac ürünleri. Zorlu çevre koşullarında uzun ömür, yüksek korozyon dayanımı ve düşük bakım ihtiyacı.',
};

export default function MagnelisZAMPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 lg:py-40 overflow-hidden text-white">
        <div className="absolute inset-0">
          <img 
            src="/ZAM.jpg" 
            alt="Magnelis (ZAM) Kaplamalı Çelik Sac"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#261dcf]/90 to-[#1a1a5e]/90"></div>
        </div>
        <div className="relative container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-3xl">
            Magnelis (ZAM) Kaplamalı Çelik Sac
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl">
            Zorlu çevre koşullarında uzun ömür, yüksek korozyon dayanımı ve düşük bakım ihtiyacı.
          </p>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mt-2">
            Metal X Steel – Endüstriyel Çeliğin Gücü
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
                alt="Magnelis (ZAM) Kaplamalı Çelik Sac"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#261dcf]/30"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#261dcf] mb-6">
              Ürün Hakkında
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                ZAM (Zinc–Aluminum–Magnesium) kaplamalı çelik sac, çinko, alüminyum ve magnezyum 
                alaşımından oluşan kaplama yapısıyla gelişmiş korozyon koruması sağlayan yeni nesil 
                bir kaplama çözümüdür. Dış ortamda çalışan yapılarda servis ömrünü uzatmayı hedefler; 
                bakım-onarım ihtiyacını azaltarak toplam maliyet avantajı sağlar.
              </p>
              <p>
                ZAM kaplamalı saclar; özellikle zorlu çevre koşulları, nemli/korozif atmosferler, 
                kıyı etkisi, endüstriyel sahalar gibi yüksek riskli ortamlarda uzun ömürlü uygulamalar 
                için tercih edilir. Otomotiv, yapı, tarım makineleri ve genel endüstriyel uygulamalarda 
                yaygın biçimde kullanılmaktadır.
              </p>
              <p>
                Metal X Endüstriyel San. ve Tic. Ltd. Şti. olarak ZAM kaplamalı sac çözümlerimizi, 
                teknik gereklilikler ve kalite standartlarıyla uyumlu şekilde sunar; proje bazlı 
                ölçü/kalite seçimi, termin planlama ve sevkiyat organizasyonunu uçtan uca yönetiriz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Neden ZAM? */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#261dcf] mb-6 text-center">
              Neden ZAM? (Magnelis)
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                ZAM kaplamanın kritik farkı, magnezyum katkısıyla desteklenen aktif koruma davranışıdır. 
                Kesme, delme ve şekillendirme sonrası oluşan yüzeylerde korozyon riskinin kontrol altına 
                alınmasına yardımcı olur. Bu sayede dış ortam projelerinde daha güvenli ve uzun ömürlü 
                kullanım hedeflenir.
              </p>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-[#261dcf] mb-6 mt-12">
              Öne çıkan avantajlar
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#261dcf] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Yüksek korozyon direnci</h4>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#261dcf] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Uzun servis ömrü ve düşük bakım ihtiyacı</h4>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#261dcf] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Dış ortam uygulamalarında güvenilir performans</h4>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#261dcf] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Toplam maliyet avantajı (uzun vadeli)</h4>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md md:col-span-2">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#261dcf] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Proje sürekliliğini destekleyen dayanım</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Üretim / Tedarik Limitleri */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#261dcf] mb-8 text-center">
              Üretim / Tedarik Limitleri
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#261dcf] mb-4">Kalınlık</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#261dcf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Minimum: 0,4 mm</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#261dcf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Maksimum: 3,0 mm</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#261dcf] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Standart kalınlıklar: 0,5 / 0,7 / 0,8 / 1,0 / 1,2 / 1,5 / 2,0 / 2,5 / 3,0 mm</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
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
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#261dcf] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Özel genişlikler: Proje bazlı talepler için müşteri ekibimizle iletişime geçebilirsiniz.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#261dcf] mb-4">Kaplama Gramajı</h3>
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

              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#261dcf] mb-4">Sipariş Miktarı</h3>
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
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#261dcf] mb-8 text-center">
              Kalite Standartları
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
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

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#261dcf] mb-3">Korozyon Koruma Performansı</h3>
                <p className="text-gray-700 mb-4">
                  ZAM kaplamalı çelik sac, korozyon açısından riskli ortamlarda güçlü bir alternatiftir. 
                  Uygun seçim ve doğru kaplama gramajıyla aşağıdaki hedeflere destek olur:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#261dcf] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Minimum 25 yıl korozyon dayanımı hedefleyen kaplama performansı</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#261dcf] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Geleneksel galvanize kıyasla 3–4 kata kadar daha yüksek koruma</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#261dcf] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Kesme kenarlarında dahi güçlü koruma davranışı</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#261dcf] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Çevresel koşullara karşı yüksek dayanım</span>
                  </li>
                </ul>
                <p className="text-gray-600 text-sm mt-4 italic">
                  <strong>Not:</strong> Performans; ortam sınıfı, tasarım detayları, montaj/işçilik, 
                  kaplama gramajı ve kullanım şartlarına göre değişebilir. Proje özelinde teknik yönlendirme sağlıyoruz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kullanım Alanları */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#261dcf] mb-8 text-center">
              Kullanım Alanları
            </h2>
            <p className="text-center text-gray-700 mb-8 text-lg">
              ZAM kaplamalı saclar, yüksek dayanım ve düşük bakım ihtiyacı aranan uygulamalarda öne çıkar:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#261dcf] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700 font-medium">Otomotiv ve yan sanayi</span>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#261dcf] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700 font-medium">Yapı ve çelik konstrüksiyon uygulamaları</span>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#261dcf] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700 font-medium">Tarım makineleri ve tarımsal yapılar</span>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#261dcf] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700 font-medium">Genel endüstriyel imalat</span>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md md:col-span-2">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#261dcf] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700 font-medium">Dış ortam ekipmanları ve sistemleri</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metal X Steel ile ZAM Tedariki */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#261dcf] mb-6 text-center">
              Metal X Steel ile ZAM Tedariki
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                Bizim için ZAM sadece ürün değil; doğru ürün + doğru termin + doğru lojistik bütünlüğüdür. 
                Projenizin ihtiyacına göre:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>kalite/kalınlık/kaplama gramajı yönlendirmesi,</li>
                <li>ölçü optimizasyonu,</li>
                <li>termin planlama,</li>
                <li>sevkiyat organizasyonu</li>
              </ul>
              <p className="font-semibold">
                başlıklarında destek sunarız.
              </p>
              <p className="text-center text-lg font-bold text-[#261dcf] mt-6">
                Metal X Steel – endüstriyel çeliğin gücü.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Teklif Al / Teknik Görüşme */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#261dcf] mb-6 text-center">
              Teklif Al / Teknik Görüşme
            </h2>
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <p className="text-gray-700 mb-6">
                ZAM kaplamalı sac ihtiyacınız için bize aşağıdaki bilgileri iletin, aynı gün netleşelim:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#261dcf] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Kullanım alanı (yapı / otomotiv / tarım / endüstri)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#261dcf] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Kalınlık – genişlik – kaplama gramajı</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#261dcf] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Kalite standardı beklentisi</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#261dcf] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Miktar (tonaj) ve teslim programı</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#261dcf] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Teslim yeri / sevkiyat planı</span>
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <a href="/teklif-al" className="px-8 py-4 bg-[#261dcf] text-white font-bold rounded-lg hover:bg-[#1a1a5e] transition-colors text-center">
                  Teklif Al
                </a>
                <a href="/iletisim" className="px-8 py-4 bg-transparent border-2 border-[#261dcf] text-[#261dcf] font-bold rounded-lg hover:bg-[#261dcf]/10 transition-colors text-center">
                  Teknik Görüşme
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sık Sorulan Sorular */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#261dcf] mb-8 text-center">
              Sık Sorulan Sorular (SSS)
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#261dcf] mb-3">
                  ZAM ile galvaniz arasındaki temel fark nedir?
                </h3>
                <p className="text-gray-700">
                  ZAM kaplama, çinko–alüminyum–magnezyum alaşımıyla daha yüksek korozyon direnci ve 
                  dış ortamda daha uzun servis ömrü hedefler.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#261dcf] mb-3">
                  Kesme/delme sonrası koruma devam eder mi?
                </h3>
                <p className="text-gray-700">
                  ZAM'ın aktif koruma davranışı, kesit bölgelerinde korozyon riskinin azaltılmasına destek olur.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#261dcf] mb-3">
                  Hangi ölçülerde tedarik edilebilir?
                </h3>
                <p className="text-gray-700">
                  0,4–3,0 mm kalınlık aralığında; 600–1500 mm genişlikte; 100–350 g/m² kaplama gramajında 
                  tedarik seçenekleri sunulur.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#261dcf] mb-3">
                  Minimum sipariş miktarı nedir?
                </h3>
                <p className="text-gray-700">
                  Minimum 3 ton; maksimum 300 ton sipariş aralığında tedarik planlanabilir.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#261dcf] mb-3">
                  Hangi standartlar kapsamında sunuluyor?
                </h3>
                <p className="text-gray-700">
                  EN 10346, ASTM A653 ve JIS G 3315 gibi standart referanslarıyla uyumlu çözümler sağlanır.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#261dcf] mb-3">
                  Teklif için hangi bilgiler gerekli?
                </h3>
                <p className="text-gray-700">
                  Kalınlık–genişlik–kaplama gramajı, kalite beklentisi, miktar, teslim yeri ve termin programı.
                </p>
              </div>
            </div>
            <p className="text-center text-gray-700 mt-8 text-lg">
              Zorlu şartlarda uzun ömürlü bir çözüm arıyorsanız, projenize uygun ZAM seçimini birlikte netleştirelim.
            </p>
            <p className="text-center text-lg font-bold text-[#261dcf] mt-4">
              Metal X Steel – endüstriyel çeliğin gücü.
            </p>
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
              Magnelis (ZAM) kaplamalı sac ürünlerimiz hakkında detaylı bilgi ve teklif için bizimle iletişime geçin.
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
