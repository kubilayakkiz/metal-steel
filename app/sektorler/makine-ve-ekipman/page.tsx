import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Makine ve Ekipman Sektörü - Metal X Endüstriyel San. ve Tic. LTD. ŞTİ.',
  description: 'Makine ve ekipman sektörü için çelik çözümleri. Endüstriyel makine üretimi, tarım makineleri ve ekipman imalatı için yüksek kaliteli çelik.',
};

export default function MakineEkipmanPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 lg:py-40 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/makinaekipman.jpg" 
            alt="Makine ve Ekipman Sektörü"
            className="w-full h-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#261dcf]/90 via-[#261dcf]/80 to-[#261dcf]/70"></div>
        </div>
        
        {/* Content */}
        <div className="relative container mx-auto px-4 text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-3xl">
            Makine ve Ekipman Sektörü
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl">
            Endüstriyel makine üretimi için güçlü çelik çözümleri
          </p>
        </div>
      </section>

      {/* Açıklama */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#261dcf] mb-6">
              Makine ve Ekipman Sektöründe Metal X Endüstriyel San. ve Tic. LTD. ŞTİ.
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                Metal X Endüstriyel San. ve Tic. LTD. ŞTİ., makine ve ekipman sektörünün güvenilir çelik tedarikçisidir. Endüstriyel 
                makine üretimi, tarım makineleri, iş makineleri ve özel ekipman imalatında kullanılan 
                yüksek kaliteli çelik ürünleri sunuyoruz.
              </p>
              <p>
                Makine üretiminde hassas toleranslar, yüksek dayanım ve uzun ömür kritik öneme sahiptir. 
                Metal X Endüstriyel San. ve Tic. LTD. ŞTİ.'in çelik ürünleri, bu gereksinimleri karşılayarak makine üreticilerinin 
                güvenilir ve verimli ekipmanlar üretmelerine katkı sağlar.
              </p>
              <p>
                Geniş ürün yelpazemiz ve teknik destek ekibimiz ile makine ve ekipman sektöründe 
                faaliyet gösteren firmalara kapsamlı çözümler sunuyoruz.
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
                  Endüstriyel Makine Üretimi
                </h3>
                <p className="text-gray-700">
                  Üretim hatları, makine çerçeveleri ve endüstriyel ekipmanlar için yüksek 
                  dayanımlı çelik ürünleri.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#261dcf] mb-3">
                  Tarım Makineleri
                </h3>
                <p className="text-gray-700">
                  Traktör, biçerdöver, ekim makinesi ve tarım ekipmanları için dayanıklı 
                  çelik çözümleri.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#261dcf] mb-3">
                  İş Makineleri
                </h3>
                <p className="text-gray-700">
                  Ekskavatör, yükleyici, dozer ve iş makinesi bileşenleri için yüksek 
                  mukavemetli çelik ürünleri.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#261dcf] mb-3">
                  Özel Ekipman İmalatı
                </h3>
                <p className="text-gray-700">
                  Özel uygulamalar için tasarlanmış makine ve ekipman bileşenleri. 
                  Prototip ve seri üretim desteği.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#261dcf] mb-3">
                  Hidrolik ve Pnömatik Sistemler
                </h3>
                <p className="text-gray-700">
                  Hidrolik silindirler, valfler ve pnömatik sistem bileşenleri için 
                  özel çelik ürünleri.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#261dcf] mb-3">
                  Teknik Danışmanlık
                </h3>
                <p className="text-gray-700">
                  Makine tasarımı, malzeme seçimi ve üretim süreçleri konularında uzman 
                  teknik desteği.
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
              Makine ve Ekipman Sektöründe Çeliğin Avantajları
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#261dcf]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#261dcf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Yüksek Dayanım</h3>
                  <p className="text-gray-700">
                    Ağır yükler ve zorlu çalışma koşullarına dayanıklılık. Makine 
                    güvenilirliğini artırır.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#261dcf]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#261dcf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">İşlenebilirlik</h3>
                  <p className="text-gray-700">
                    Kolay kesme, delme, kaynak ve şekillendirme. Karmaşık parça üretiminde 
                    esneklik sağlar.
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
                    Rekabetçi fiyatlar ve uzun vadede düşük bakım maliyetleri. 
                    Üreticiler için ekonomik çözümler.
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
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Uzun Ömür</h3>
                  <p className="text-gray-700">
                    Yorulma dayanımı ve uzun kullanım ömrü. Makine verimliliğini 
                    artırır, bakım aralıklarını uzatır.
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
                    Farklı uygulamalara uygun özel özellikler. Kalınlık, sertlik ve 
                    alaşım seçenekleri ile özelleştirme.
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
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Yüksek Performans</h3>
                  <p className="text-gray-700">
                    Optimum mekanik özellikler ile yüksek performans. Makine verimliliğini 
                    artıran çelik çözümleri.
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
              Makine ve Ekipman Sektörü İçin İlgili Ürünler
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-[#261dcf] mb-3">
                  Yüksek Dayanımlı Çelik
                </h3>
                <p className="text-gray-700 mb-4">
                  Ağır yüklere dayanıklı yüksek dayanımlı çelik ürünleri. Makine çerçeveleri ve kritik parçalar için.
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
                  Hassas toleranslar ve mükemmel yüzey kalitesi ile makine kapakları ve panelleri.
                </p>
                <a href="/urunler/soguk-haddelenmis-sac" className="text-[#261dcf] font-semibold hover:underline">
                  Detayları Gör →
                </a>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-[#261dcf] mb-3">
                  Özel Alaşımlı Çelik
                </h3>
                <p className="text-gray-700 mb-4">
                  Özel uygulamalar için alaşımlı çelik ürünleri. Yüksek performans gerektiren parçalar için.
                </p>
                <a href="/urunler/zam" className="text-[#261dcf] font-semibold hover:underline">
                  Detayları Gör →
                </a>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-[#261dcf] mb-3">
                  Çelik Profiller
                </h3>
                <p className="text-gray-700 mb-4">
                  Makine çerçeveleri ve yapısal bileşenler için çelik profil ürünleri.
                </p>
                <a href="/urunler/boru-ve-profil" className="text-[#261dcf] font-semibold hover:underline">
                  Detayları Gör →
                </a>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-[#261dcf] mb-3">
                  Galvanizli Sac
                </h3>
                <p className="text-gray-700 mb-4">
                  Korozyona dayanıklı galvanizli sac, açık hava uygulamaları için ideal.
                </p>
                <a href="/urunler/galvanizli-sac" className="text-[#261dcf] font-semibold hover:underline">
                  Detayları Gör →
                </a>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-[#261dcf] mb-3">
                  Teknik Danışmanlık
                </h3>
                <p className="text-gray-700 mb-4">
                  Makine tasarımı ve malzeme seçimi konularında uzman teknik desteği.
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
              Makine ve ekipman sektörü için çelik çözümlerimiz hakkında daha fazla bilgi almak veya teklif almak için bizimle iletişime geçin.
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

