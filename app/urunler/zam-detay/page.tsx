import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ZAM – Min 25 Yıl Yüksek Korozyon Dayanımı (Çinko + Alüminyum + Magnezyum) - Metal X Endüstriyel San. ve Tic. LTD. ŞTİ.',
  description: 'ZAM kaplamalı çelik sac ürünleri. Çinko, Alüminyum ve Magnezyum alaşımı ile minimum 25 yıl yüksek korozyon dayanımı.',
};

export default function ZAMDetayPage() {
  return (
    <div className="w-full">
      <section className="relative py-20 md:py-32 lg:py-40 overflow-hidden bg-gradient-to-br from-[#261dcf] to-[#1a1a5e] text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-3xl">
            ZAM – Min 25 Yıl Yüksek Korozyon Dayanımı
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl">
            Çinko + Alüminyum + Magnezyum alaşımı ile üstün korozyon koruması
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
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
                <strong>Alaşım Bileşimi:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Çinko (Zn): Ana koruma elementi</li>
                <li>Alüminyum (Al): Korozyon direnci ve yüzey stabilitesi</li>
                <li>Magnezyum (Mg): Gelişmiş korozyon koruma ve kesme kenarı koruması</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

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
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#261dcf] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Teklif Almak İster misiniz?
            </h2>
            <p className="text-xl mb-8 text-gray-100">
              ZAM kaplamalı sac ürünlerimiz hakkında detaylı bilgi ve teklif için bizimle iletişime geçin.
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

