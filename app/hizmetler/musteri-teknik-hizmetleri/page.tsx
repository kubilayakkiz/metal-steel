import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Müşteri Teknik Hizmetleri - Metal X Endüstriyel San. ve Tic. LTD. ŞTİ.',
  description: 'Metal X Endüstriyel San. ve Tic. LTD. ŞTİ. müşteri teknik hizmetleri. Teknik danışmanlık, malzeme seçimi ve mühendislik desteği hizmetleri.',
};

export default function MusteriTeknikHizmetleriPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 lg:py-40 overflow-hidden text-white">
        <div className="absolute inset-0">
          <img 
            src="/musteriservis1.JPG" 
            alt="Müşteri Teknik Hizmetleri"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#261dcf]/90 to-[#1a1a5e]/90"></div>
        </div>
        <div className="relative container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-3xl">
            Müşteri Teknik Hizmetleri
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl">
            Profesyonel teknik danışmanlık ve mühendislik desteği
          </p>
        </div>
      </section>

      {/* Hizmet Hakkında */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 rounded-lg overflow-hidden shadow-lg relative">
              <img 
                src="/musteriservis2.jpg" 
                alt="Müşteri Teknik Hizmetleri"
                className="w-full h-64 md:h-80 object-cover opacity-80"
              />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#261dcf] mb-6">
              Hizmet Hakkında
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                Metal X Endüstriyel San. ve Tic. LTD. ŞTİ.'in müşteri teknik hizmetleri, müşterilerimize çelik malzeme seçimi, 
                uygulama danışmanlığı ve teknik destek konularında kapsamlı çözümler sunmaktadır. 
                Deneyimli mühendislik ekibimiz, projelerinizin her aşamasında yanınızda olarak 
                en uygun çelik çözümlerini belirlemenize yardımcı olur.
              </p>
              <p>
                Malzeme seçiminden tasarıma, üretim süreçlerinden kalite kontrolüne kadar geniş 
                bir yelpazede teknik danışmanlık hizmetleri sunuyoruz. Müşterilerimizin proje 
                hedeflerine ulaşmalarını ve en yüksek kalite standartlarını yakalamalarını 
                sağlıyoruz.
              </p>
              <p>
                Müşteri teknik hizmetlerimiz, tüm sektörlerde faaliyet gösteren firmalara 
                yöneliktir ve özel ihtiyaçlarınıza göre özelleştirilebilir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hizmet Alanları */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 rounded-lg overflow-hidden shadow-lg relative">
              <img 
                src="/musteriservis1.JPG" 
                alt="Hizmet Alanları"
                className="w-full h-48 md:h-64 object-cover opacity-70"
              />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#261dcf] mb-8 text-center">
              Hizmet Alanları
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-[#261dcf]/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#261dcf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#261dcf] mb-3">
                  Malzeme Seçimi Danışmanlığı
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Uygulama bazlı malzeme önerileri</li>
                  <li>• Teknik özelliklerin değerlendirilmesi</li>
                  <li>• Maliyet analizi</li>
                  <li>• Alternatif çözüm önerileri</li>
                  <li>• Karşılaştırmalı analizler</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-[#261dcf]/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#261dcf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#261dcf] mb-3">
                  Tasarım Desteği
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Ürün tasarımı danışmanlığı</li>
                  <li>• CAD/CAM destekli tasarım</li>
                  <li>• Prototip geliştirme</li>
                  <li>• Tasarım optimizasyonu</li>
                  <li>• Üretilebilirlik analizi</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-[#261dcf]/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#261dcf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#261dcf] mb-3">
                  Üretim Süreçleri Danışmanlığı
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Üretim süreç optimizasyonu</li>
                  <li>• İşleme teknikleri danışmanlığı</li>
                  <li>• Kalite kontrol süreçleri</li>
                  <li>• Verimlilik artırma önerileri</li>
                  <li>• Problem çözme desteği</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-[#261dcf]/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#261dcf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#261dcf] mb-3">
                  Kalite Kontrol ve Test
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Malzeme testleri</li>
                  <li>• Kalite kontrol protokolleri</li>
                  <li>• Sertifikasyon desteği</li>
                  <li>• Raporlama ve dokümantasyon</li>
                  <li>• Uygunluk değerlendirmesi</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-[#261dcf]/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#261dcf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#261dcf] mb-3">
                  Eğitim ve Seminerler
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Çelik malzeme eğitimleri</li>
                  <li>• İşleme teknikleri seminerleri</li>
                  <li>• Güvenlik eğitimleri</li>
                  <li>• Teknik dokümantasyon</li>
                  <li>• Uygulamalı atölye çalışmaları</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-[#261dcf]/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#261dcf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#261dcf] mb-3">
                  Teknik Destek ve Bakım
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• 7/24 teknik destek hattı</li>
                  <li>• Sahada teknik destek</li>
                  <li>• Problem çözme desteği</li>
                  <li>• Bakım planlaması</li>
                  <li>• Yedek parça danışmanlığı</li>
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
              Hizmet Kapsamı
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg space-y-4">
              <div>
                <h3 className="text-xl font-bold text-[#261dcf] mb-3">Teknik Danışmanlık Süreçleri</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#261dcf] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>İlk değerlendirme ve ihtiyaç analizi</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#261dcf] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Detaylı teknik analiz ve öneriler</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#261dcf] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Çözüm geliştirme ve uygulama planı</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#261dcf] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Uygulama desteği ve takip</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#261dcf] mb-3">Uzmanlık Alanları</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#261dcf] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Malzeme bilimi ve mühendisliği</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#261dcf] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Üretim teknolojileri ve süreçleri</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#261dcf] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Kalite yönetimi ve kontrol sistemleri</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#261dcf] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Proje yönetimi ve koordinasyon</span>
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
              Müşteri teknik hizmetlerimiz hakkında detaylı bilgi ve teklif için bizimle iletişime geçin.
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

