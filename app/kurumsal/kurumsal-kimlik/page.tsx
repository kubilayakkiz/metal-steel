import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kurumsal Kimlik - Metal X Endüstriyel San. ve Tic. LTD. ŞTİ.',
  description: 'Metal X Endüstriyel San. ve Tic. LTD. ŞTİ. kurumsal kimlik. Logo, renk paleti, tipografi ve kurumsal görsel kimlik standartları.',
};

export default function KurumsalKimlikPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 lg:py-40 overflow-hidden bg-gradient-to-br from-[#261dcf] to-[#1a1a5e] text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-3xl">
            Kurumsal Kimlik
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl">
            Markamızın görsel kimliği ve kurumsal standartlarımız
          </p>
        </div>
      </section>

      {/* Logo */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#261dcf] mb-8 text-center">
              Logo
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-[#261dcf] mb-4">Koyu Arka Plan</h3>
                <div className="bg-[#261dcf] p-6 rounded-lg flex items-center justify-center">
                  <img 
                    src="/LogoMetalSteelWhite.png" 
                    alt="Metal X Endüstriyel San. ve Tic. LTD. ŞTİ. Logo - White"
                    className="h-20 w-auto"
                  />
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  Beyaz logo, koyu arka planlar üzerinde kullanılır.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-[#261dcf] mb-4">Açık Arka Plan</h3>
                <div className="bg-white border-2 border-gray-200 p-6 rounded-lg flex items-center justify-center">
                  <img 
                    src="/LogoMetalSteel.png" 
                    alt="Metal X Endüstriyel San. ve Tic. LTD. ŞTİ. Logo"
                    className="h-20 w-auto"
                  />
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  Renkli logo, açık arka planlar üzerinde kullanılır.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Renk Paleti */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://placehold.co/1200x400/261dcf/ffffff?text=Renk+Paleti" 
                alt="Renk Paleti"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#261dcf] mb-8 text-center">
              Renk Paleti
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#261dcf] mb-4">Ana Renk</h3>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-24 h-24 bg-[#261dcf] rounded-lg shadow-md"></div>
                  <div>
                    <p className="font-semibold text-gray-700">#261dcf</p>
                    <p className="text-sm text-gray-600">RGB: 38, 29, 207</p>
                    <p className="text-sm text-gray-600">CMYK: 82, 86, 0, 19</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm">
                  Ana marka rengi, kurumsal kimliğimizin temelini oluşturur. Logo ve 
                  vurgu renklerinde kullanılır.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#261dcf] mb-4">Vurgu Rengi</h3>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-24 h-24 bg-[#6dd5fb] rounded-lg shadow-md"></div>
                  <div>
                    <p className="font-semibold text-gray-700">#6dd5fb</p>
                    <p className="text-sm text-gray-600">RGB: 109, 213, 251</p>
                    <p className="text-sm text-gray-600">CMYK: 57, 15, 0, 2</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm">
                  Vurgu rengi, ikincil öğeler ve hover efektlerinde kullanılır.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tipografi */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://placehold.co/1200x400/261dcf/ffffff?text=Tipografi" 
                alt="Tipografi"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#261dcf] mb-8 text-center">
              Tipografi
            </h2>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#261dcf] mb-4">Ana Font</h3>
                <p className="text-2xl mb-2" style={{ fontFamily: 'Proxima Nova, sans-serif' }}>
                  Proxima Nova
                </p>
                <p className="text-gray-700 text-sm">
                  Kurumsal kimliğimizde Proxima Nova font ailesi kullanılmaktadır. Bu font, 
                  modern, okunabilir ve profesyonel bir görünüm sunar.
                </p>
                <div className="mt-4 space-y-2">
                  <p className="text-sm text-gray-600">
                    <strong>Light (300):</strong> İnce vurgular ve alt başlıklar için
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Regular (400):</strong> Varsayılan metin ağırlığı
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Bold (700):</strong> Başlıklar ve vurgular için
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kurumsal Değerler */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#261dcf] mb-8 text-center">
              Marka Değerleri
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-[#261dcf] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[#261dcf] mb-2">Güvenilirlik</h3>
                <p className="text-gray-600 text-sm">
                  İş ortaklarımızla kurduğumuz güçlü ilişkiler
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-[#261dcf] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[#261dcf] mb-2">Yenilikçilik</h3>
                <p className="text-gray-600 text-sm">
                  Sürekli gelişim ve yenilikçi çözümler
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-[#261dcf] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[#261dcf] mb-2">Sürdürülebilirlik</h3>
                <p className="text-gray-600 text-sm">
                  Çevre dostu ve sürdürülebilir üretim
                </p>
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
              Detaylı kurumsal kimlik kılavuzumuzu indirmek veya daha fazla bilgi almak için bizimle iletişime geçin.
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

