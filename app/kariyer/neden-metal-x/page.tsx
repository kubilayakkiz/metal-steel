import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Neden Metal X Endüstriyel San. ve Tic. LTD. ŞTİ. - Kariyer',
  description: 'Metal X Endüstriyel San. ve Tic. LTD. ŞTİ. ile kariyerinizi geliştirin. Çalışma kültürümüz, fırsatlar ve avantajlar hakkında bilgi.',
};

export default function NedenMetalXPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 lg:py-40 overflow-hidden text-white">
        <div className="absolute inset-0">
          <img 
            src="https://placehold.co/1200x400/261dcf/ffffff?text=Neden+Metal+X" 
            alt="Neden Metal X"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#261dcf]/90 to-[#1a1a5e]/90"></div>
        </div>
        <div className="relative container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-3xl">
            Neden Metal X Endüstriyel San. ve Tic. LTD. ŞTİ.?
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl">
            Kariyerinizi birlikte şekillendirelim
          </p>
        </div>
      </section>

      {/* Çalışma Kültürü */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#261dcf] mb-8 text-center">
              Çalışma Kültürümüz
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p>
                Metal X Endüstriyel San. ve Tic. LTD. ŞTİ. olarak, çalışanlarımızın gelişimini ve mutluluğunu ön planda tutuyoruz. 
                İnovatif düşünce yapısı, ekip çalışması ve sürekli öğrenme kültürümüzün temel taşlarıdır.
              </p>
              <p>
                Çelik sektöründe öncü bir firma olarak, çalışanlarımıza kariyer gelişimi için geniş fırsatlar sunuyoruz. 
                Teknik eğitimler, yönetim geliştirme programları ve uluslararası proje deneyimleri ile kariyerinizi bir üst seviyeye taşıyın.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Avantajlar */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#261dcf] mb-12 text-center">
              Çalışan Avantajları
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-[#261dcf]/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#261dcf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#261dcf] mb-3">
                  Eğitim ve Gelişim
                </h3>
                <p className="text-gray-700">
                  Sürekli eğitim programları, sertifikasyon desteği ve kariyer geliştirme fırsatları.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-[#261dcf]/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#261dcf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#261dcf] mb-3">
                  Ekip Çalışması
                </h3>
                <p className="text-gray-700">
                  Güçlü ekip dinamikleri, açık iletişim ve birlikte başarma kültürü.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-[#261dcf]/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#261dcf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#261dcf] mb-3">
                  Rekabetçi Maaş
                </h3>
                <p className="text-gray-700">
                  Sektörün önde gelen maaş paketleri ve performans bazlı prim sistemi.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-[#261dcf]/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#261dcf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#261dcf] mb-3">
                  Esnek Çalışma
                </h3>
                <p className="text-gray-700">
                  Esnek çalışma saatleri ve uzaktan çalışma imkanları ile iş-yaşam dengesi.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-[#261dcf]/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#261dcf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#261dcf] mb-3">
                  Sağlık ve Güvenlik
                </h3>
                <p className="text-gray-700">
                  Kapsamlı sağlık sigortası, iş güvenliği eğitimleri ve önleyici sağlık programları.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-[#261dcf]/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#261dcf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#261dcf] mb-3">
                  Teknoloji ve İnovasyon
                </h3>
                <p className="text-gray-700">
                  Son teknoloji araçlar, modern çalışma ortamları ve inovasyon odaklı projeler.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Değerlerimiz */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#261dcf] mb-8 text-center">
              Değerlerimiz
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#261dcf]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#261dcf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#261dcf] mb-2">Güvenilirlik</h3>
                  <p className="text-gray-700">
                    Sözümüzde durmak ve taahhütlerimizi yerine getirmek temel değerlerimizdendir.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#261dcf]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#261dcf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#261dcf] mb-2">Mükemmellik</h3>
                  <p className="text-gray-700">
                    Her işimizde en yüksek kalite standartlarını hedefler ve sürekli iyileştirme yaparız.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#261dcf]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#261dcf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#261dcf] mb-2">İnovasyon</h3>
                  <p className="text-gray-700">
                    Yenilikçi çözümler geliştirerek sektörde öncü olmayı hedefleriz.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#261dcf]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#261dcf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#261dcf] mb-2">Takım Çalışması</h3>
                  <p className="text-gray-700">
                    Birlikte çalışarak daha büyük başarılar elde edeceğimize inanıyoruz.
                  </p>
                </div>
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
              Kariyer fırsatlarımız hakkında daha fazla bilgi almak veya başvuru yapmak için bizimle iletişime geçin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/kariyer/basvuru" className="px-8 py-4 bg-white text-[#261dcf] font-bold rounded-lg hover:bg-gray-100 transition-colors">
                Başvuru Yap
              </a>
              <a href="/iletisim" className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors">
                İletişime Geç
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

