import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Çelik Servis Hizmetleri - Metal X Endüstriyel San. ve Tic. LTD. ŞTİ.',
  description: 'Metal X Endüstriyel San. ve Tic. LTD. ŞTİ. çelik servis hizmetleri. Kesim, bükme, kaynak ve çelik işleme hizmetleri hakkında bilgi.',
};

export default function CelikServisHizmetleriPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 lg:py-40 overflow-hidden bg-gradient-to-br from-[#261dcf] to-[#1a1a5e] text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-3xl">
            Çelik Servis Hizmetleri
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl">
            Profesyonel çelik işleme ve servis çözümleri
          </p>
        </div>
      </section>

      {/* Hizmet Hakkında */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://placehold.co/1200x400/261dcf/ffffff?text=Çelik+Servis+Hizmetleri" 
                alt="Çelik Servis Hizmetleri"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#261dcf] mb-6">
              Hizmet Hakkında
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                Metal X Endüstriyel San. ve Tic. LTD. ŞTİ.'in çelik servis hizmetleri, müşterilerimize çelik ürünlerinin 
                işlenmesi ve hazırlanması konusunda kapsamlı çözümler sunmaktadır. Modern 
                teknoloji ve uzman ekibimiz ile çelik malzemelerinizi ihtiyaçlarınıza göre 
                işleyerek zaman ve maliyet tasarrufu sağlıyoruz.
              </p>
              <p>
                Kesim, bükme, kaynak, delme ve özel işleme hizmetlerimiz ile müşterilerimizin 
                üretim süreçlerini hızlandırıyor ve kalite standartlarını yükseltiyoruz. 
                Geniş makine parkımız ve deneyimli teknik ekibimiz ile en karmaşık projeleri 
                bile başarıyla tamamlıyoruz.
              </p>
              <p>
                Çelik servis hizmetlerimiz, otomotiv, inşaat, makine imalatı ve genel 
                endüstriyel sektörlerde faaliyet gösteren firmalara yöneliktir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hizmet Alanları */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://placehold.co/1200x300/261dcf/ffffff?text=Hizmet+Alanları" 
                alt="Hizmet Alanları"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#261dcf] mb-8 text-center">
              Hizmet Alanları
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-[#261dcf]/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#261dcf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#261dcf] mb-3">
                  Kesim Hizmetleri
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Lazer kesim</li>
                  <li>• Plazma kesim</li>
                  <li>• Oksi-asetilen kesim</li>
                  <li>• Su jeti kesim</li>
                  <li>• Giyotin kesim</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-[#261dcf]/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#261dcf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#261dcf] mb-3">
                  Bükme ve Şekillendirme
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Hidrolik bükme</li>
                  <li>• Rulo bükme</li>
                  <li>• Pres bükme</li>
                  <li>• Özel şekillendirme</li>
                  <li>• Hassas bükme işlemleri</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-[#261dcf]/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#261dcf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#261dcf] mb-3">
                  Kaynak Hizmetleri
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• MIG/MAG kaynak</li>
                  <li>• TIG kaynak</li>
                  <li>• Elektrik ark kaynak</li>
                  <li>• Özel kaynak teknikleri</li>
                  <li>• Kaynak kalite kontrolü</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-[#261dcf]/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#261dcf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#261dcf] mb-3">
                  Delme ve İşleme
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• CNC delme</li>
                  <li>• Özel delik işleme</li>
                  <li>• Torna işleme</li>
                  <li>• Frezeleme</li>
                  <li>• Hassas işleme</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-[#261dcf]/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#261dcf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#261dcf] mb-3">
                  Yüzey İşleme
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Kumlama</li>
                  <li>• Zımpara işleme</li>
                  <li>• Polisaj</li>
                  <li>• Yüzey temizleme</li>
                  <li>• Ön işlem hazırlığı</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-[#261dcf]/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#261dcf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#261dcf] mb-3">
                  Montaj ve Paketleme
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Ön montaj hizmetleri</li>
                  <li>• Paketleme ve etiketleme</li>
                  <li>• Lojistik destek</li>
                  <li>• Özel ambalaj çözümleri</li>
                  <li>• Teslim organizasyonu</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teknik Özellikler */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#261dcf] mb-8 text-center">
              Teknik Özellikler ve Kapasiteler
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg space-y-4">
              <div>
                <h3 className="text-xl font-bold text-[#261dcf] mb-3">Kesim Kapasiteleri</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#261dcf] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Lazer kesim: 6000x3000 mm, 25 mm kalınlığa kadar</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#261dcf] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Plazma kesim: 8000x4000 mm, 50 mm kalınlığa kadar</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#261dcf] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Hassaslık toleransı: ±0.1 mm</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#261dcf] mb-3">Bükme Kapasiteleri</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#261dcf] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Maksimum kalınlık: 25 mm</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#261dcf] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Maksimum genişlik: 4000 mm</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#261dcf] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Bükme açısı: 0° - 180°</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#261dcf] mb-3">Kalite Standartları</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#261dcf] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>ISO 9001:2015 kalite yönetim sistemi</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#261dcf] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Kaynak sertifikasyonu (EN 1090, EN 3834)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#261dcf] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Her işlem için kalite kontrol raporları</span>
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
              Çelik servis hizmetlerimiz hakkında detaylı bilgi ve teklif için bizimle iletişime geçin.
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

