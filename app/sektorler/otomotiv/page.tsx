import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Otomotiv Sektörü - Metal X Endüstriyel San. ve Tic. LTD. ŞTİ.',
  description: 'Otomotiv sektörü için yüksek kaliteli çelik ürünleri ve çözümleri. Metal X Endüstriyel San. ve Tic. LTD. ŞTİ. ile otomotiv endüstrisinin ihtiyaçlarına özel çelik çözümleri.',
};

export default function OtomotivPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 lg:py-40 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/otomotiv.jpg" 
            alt="Otomotiv Sektörü"
            className="w-full h-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#261dcf]/90 via-[#261dcf]/80 to-[#261dcf]/70"></div>
        </div>
        
        {/* Content */}
        <div className="relative container mx-auto px-4 text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-3xl">
            Otomotiv Sektörü
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl">
            Otomotiv endüstrisinin ihtiyaçlarına özel, yüksek kaliteli çelik çözümleri
          </p>
        </div>
      </section>

      {/* Açıklama */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#261dcf] mb-6">
              Otomotiv Sektöründe Metal X Endüstriyel San. ve Tic. LTD. ŞTİ.
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                Metal X Endüstriyel San. ve Tic. LTD. ŞTİ. olarak, otomotiv endüstrisinin güvenilir çözüm ortağıyız. Ürettiğimiz 
                yüksek kaliteli çelik ürünleri, otomotiv sektörünün sürekli gelişen ve değişen 
                ihtiyaçlarına cevap vermek üzere tasarlanmıştır.
              </p>
              <p>
                Modern otomotiv üretiminde hafiflik, dayanıklılık ve güvenlik kritik öneme sahiptir. 
                Metal X Endüstriyel San. ve Tic. LTD. ŞTİ.'in ürettiği çelik ürünler, bu gereksinimleri karşılayarak otomotiv 
                üreticilerinin en yüksek standartlara ulaşmasına katkı sağlar.
              </p>
              <p>
                Geniş ürün yelpazemiz ve teknik destek ekibimiz ile otomotiv sektöründe faaliyet 
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
                  Otomotiv Gövdeleri
                </h3>
                <p className="text-gray-700">
                  Karoseri üretimi için yüksek mukavemetli, hafif ve form verilebilir çelik saclar. 
                  Çeşitli kalınlık ve özelliklerde ürünlerimiz otomotiv gövde üretiminde kullanılır.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#261dcf] mb-3">
                  Güvenlik Bileşenleri
                </h3>
                <p className="text-gray-700">
                  Emniyet kemerleri, hava yastıkları ve güvenlik kafesleri için özel tasarlanmış 
                  yüksek dayanımlı çelik ürünleri.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#261dcf] mb-3">
                  Motor ve Şanzıman Bileşenleri
                </h3>
                <p className="text-gray-700">
                  Motor bloğu, krank mili, şanzıman dişlileri gibi kritik bileşenler için özel 
                  özelliklerde çelik ürünleri.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#261dcf] mb-3">
                  Süspansiyon Sistemleri
                </h3>
                <p className="text-gray-700">
                  Amortisörler, yaylar ve süspansiyon bağlantı parçaları için yüksek dayanımlı 
                  ve yorulma özellikli çelik çözümleri.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#261dcf] mb-3">
                  Elektrikli Araçlar
                </h3>
                <p className="text-gray-700">
                  Batarya kutusu, şasi ve elektrikli araç özel bileşenleri için hafif ve 
                  yüksek performanslı çelik ürünleri.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#261dcf] mb-3">
                  Teknik Danışmanlık
                </h3>
                <p className="text-gray-700">
                  Otomotiv üreticilerine ürün seçimi, işleme teknikleri ve kalite kontrolü 
                  konularında uzman teknik desteği.
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
              Otomotiv Sektöründe Çeliğin Avantajları
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#261dcf]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#261dcf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Yüksek Dayanıklılık</h3>
                  <p className="text-gray-700">
                    Çelik, otomotiv uygulamalarında yüksek dayanıklılık ve uzun ömür sağlar. 
                    Zorlu koşullara dayanıklılığı ile güvenilirlik sunar.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#261dcf]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#261dcf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Hafiflik</h3>
                  <p className="text-gray-700">
                    Yüksek mukavemet/ağırlık oranı ile hafif tasarımlar mümkündür. 
                    Yakıt verimliliği ve emisyon azaltımına katkı sağlar.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#261dcf]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#261dcf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Güvenlik</h3>
                  <p className="text-gray-700">
                    Yüksek enerji emilim kapasitesi ile çarpışma güvenliğini artırır. 
                    Kritik güvenlik bileşenlerinde tercih edilen malzemedir.
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
                    %100 geri dönüştürülebilir olması ile sürdürülebilir üretime katkı sağlar. 
                    Çevre dostu bir malzeme seçeneğidir.
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
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Maliyet Etkinliği</h3>
                  <p className="text-gray-700">
                    Üretim maliyetleri açısından rekabetçi fiyatlar sunar. 
                    Uzun vadede bakım ve onarım maliyetleri düşüktür.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#261dcf]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#261dcf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Özelleştirilebilirlik</h3>
                  <p className="text-gray-700">
                    Farklı uygulamalara uygun olarak özelleştirilebilir özellikler. 
                    Müşteri ihtiyaçlarına göre kalınlık, özellik ve kaplama seçenekleri.
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
              Otomotiv Sektörü İçin İlgili Ürünler
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-[#261dcf] mb-3">
                  Sıcak Haddelenmiş Sac
                </h3>
                <p className="text-gray-700 mb-4">
                  Otomotiv gövde ve şasi üretimi için yüksek kaliteli sıcak haddelenmiş saclar.
                </p>
                <a href="/urunler/sicak-haddelenmis-sac" className="text-[#261dcf] font-semibold hover:underline">
                  Detayları Gör →
                </a>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-[#261dcf] mb-3">
                  Soğuk Haddelenmiş Sac
                </h3>
                <p className="text-gray-700 mb-4">
                  Hassas kalınlık toleransları ve mükemmel yüzey kalitesi ile otomotiv uygulamaları.
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
                  Korozyona dayanıklı galvanizli sac, otomotiv ömrünü uzatır ve bakım maliyetlerini düşürür.
                </p>
                <a href="/urunler/galvanizli-sac" className="text-[#261dcf] font-semibold hover:underline">
                  Detayları Gör →
                </a>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-[#261dcf] mb-3">
                  Yüksek Dayanımlı Çelik
                </h3>
                <p className="text-gray-700 mb-4">
                  Güvenlik bileşenleri ve kritik parçalar için yüksek dayanımlı çelik çözümleri.
                </p>
                <a href="/urunler/sicak-haddelenmis-sac" className="text-[#261dcf] font-semibold hover:underline">
                  Detayları Gör →
                </a>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-[#261dcf] mb-3">
                  Özel Alaşımlı Çelik
                </h3>
                <p className="text-gray-700 mb-4">
                  Motor ve şanzıman bileşenleri için özel alaşımlı çelik ürünleri.
                </p>
                <a href="/urunler/zam" className="text-[#261dcf] font-semibold hover:underline">
                  Detayları Gör →
                </a>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-[#261dcf] mb-3">
                  Teknik Danışmanlık
                </h3>
                <p className="text-gray-700 mb-4">
                  Otomotiv uygulamalarınız için uzman teknik danışmanlık ve destek hizmetleri.
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
              Otomotiv sektörü için çelik çözümlerimiz hakkında daha fazla bilgi almak veya teklif almak için bizimle iletişime geçin.
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

