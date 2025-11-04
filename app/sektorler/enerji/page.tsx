import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Enerji Sektörü - Metal X Endüstriyel San. ve Tic. LTD. ŞTİ.',
  description: 'Enerji sektörü için çelik çözümleri. Rüzgar türbinleri, güneş enerjisi sistemleri ve enerji altyapısı için yüksek kaliteli çelik.',
};

export default function EnerjiPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 lg:py-40 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/enerji.jpeg" 
            alt="Enerji Sektörü"
            className="w-full h-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#261dcf]/90 via-[#261dcf]/80 to-[#261dcf]/70"></div>
        </div>
        
        {/* Content */}
        <div className="relative container mx-auto px-4 text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-3xl">
            Enerji Sektörü
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl">
            Enerji üretimi ve altyapısı için güçlü çelik çözümleri
          </p>
        </div>
      </section>

      {/* Açıklama */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#261dcf] mb-6">
              Enerji Sektöründe Metal X Endüstriyel San. ve Tic. LTD. ŞTİ.
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                Metal X Endüstriyel San. ve Tic. LTD. ŞTİ., enerji sektörünün güvenilir tedarikçilerinden biridir. Yenilenebilir 
                enerji kaynakları, termik santraller ve enerji altyapısı projelerinde kullanılan 
                yüksek kaliteli çelik ürünleri sunuyoruz.
              </p>
              <p>
                Enerji sektörü, zorlu çevre koşullarına ve yüksek performans gereksinimlerine sahiptir. 
                Metal X Endüstriyel San. ve Tic. LTD. ŞTİ.'in çelik ürünleri, bu zorlu koşullarda bile üstün performans gösterecek 
                şekilde üretilmiştir.
              </p>
              <p>
                Rüzgar türbinleri, güneş enerjisi sistemleri, termik santral bileşenleri ve enerji 
                iletim altyapısı için kapsamlı çelik çözümleri ile sektöre değer katıyoruz.
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
                  Rüzgar Enerjisi
                </h3>
                <p className="text-gray-700">
                  Rüzgar türbini kuleleri, nacelle yapıları ve rotor bileşenleri için yüksek 
                  dayanımlı çelik ürünleri.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#261dcf] mb-3">
                  Güneş Enerjisi
                </h3>
                <p className="text-gray-700">
                  Güneş paneli destek sistemleri, çatı montaj sistemleri ve güneş enerjisi 
                  altyapısı için çelik çözümleri.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#261dcf] mb-3">
                  Termik Santraller
                </h3>
                <p className="text-gray-700">
                  Kazan, türbin ve boru hatları için yüksek sıcaklığa dayanıklı özel çelik ürünleri.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#261dcf] mb-3">
                  Enerji İletim Altyapısı
                </h3>
                <p className="text-gray-700">
                  Enerji iletim kuleleri, transformatör istasyonları ve altyapı bileşenleri 
                  için dayanıklı çelik ürünleri.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#261dcf] mb-3">
                  Hidroelektrik Santraller
                </h3>
                <p className="text-gray-700">
                  Baraj yapıları, türbin bileşenleri ve hidroelektrik santral ekipmanları 
                  için özel çelik çözümleri.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#261dcf] mb-3">
                  Enerji Depolama Sistemleri
                </h3>
                <p className="text-gray-700">
                  Batarya sistemleri, enerji depolama konteynerleri ve destek yapıları 
                  için çelik çözümleri.
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
              Enerji Sektöründe Çeliğin Avantajları
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#261dcf]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#261dcf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Yüksek Dayanım</h3>
                  <p className="text-gray-700">
                    Zorlu çevre koşullarına ve yüksek yüklere dayanıklılık. 
                    Enerji altyapısında güvenilirlik sağlar.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#261dcf]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#261dcf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Sıcaklık Dayanımı</h3>
                  <p className="text-gray-700">
                    Yüksek sıcaklıklara dayanıklı özel alaşımlar. Termik santral uygulamalarında 
                    kritik öneme sahiptir.
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
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Korozyon Direnci</h3>
                  <p className="text-gray-700">
                    Özel kaplamalar ve alaşımlar ile korozyona dayanıklılık. 
                    Açık hava uygulamalarında uzun ömür sağlar.
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
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Uzun Ömür</h3>
                  <p className="text-gray-700">
                    Dayanıklı yapısı ile uzun yıllar sorunsuz kullanım. 
                    Enerji yatırımlarında düşük bakım maliyetleri.
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
                    Proje gereksinimlerine göre özel boyutlar ve özellikler. 
                    Müşteri ihtiyaçlarına uygun çözümler.
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
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Sürdürülebilirlik</h3>
                  <p className="text-gray-700">
                    Geri dönüştürülebilir malzeme ile çevre dostu çözümler. 
                    Sürdürülebilir enerji projelerine katkı sağlar.
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
              Enerji Sektörü İçin İlgili Ürünler
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-[#261dcf] mb-3">
                  Yüksek Dayanımlı Çelik
                </h3>
                <p className="text-gray-700 mb-4">
                  Rüzgar türbini kuleleri ve enerji altyapısı için yüksek dayanımlı çelik ürünleri.
                </p>
                <a href="#" className="text-[#261dcf] font-semibold hover:underline">
                  Detayları Gör →
                </a>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-[#261dcf] mb-3">
                  Özel Alaşımlı Çelik
                </h3>
                <p className="text-gray-700 mb-4">
                  Yüksek sıcaklık uygulamaları için özel alaşımlı çelik çözümleri.
                </p>
                <a href="#" className="text-[#261dcf] font-semibold hover:underline">
                  Detayları Gör →
                </a>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-[#261dcf] mb-3">
                  Korozyona Dayanıklı Çelik
                </h3>
                <p className="text-gray-700 mb-4">
                  Açık hava uygulamaları için korozyona dayanıklı çelik ve kaplama çözümleri.
                </p>
                <a href="#" className="text-[#261dcf] font-semibold hover:underline">
                  Detayları Gör →
                </a>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-[#261dcf] mb-3">
                  Sıcak Haddelenmiş Sac
                </h3>
                <p className="text-gray-700 mb-4">
                  Geniş yapısal uygulamalar için sıcak haddelenmiş sac ürünleri.
                </p>
                <a href="#" className="text-[#261dcf] font-semibold hover:underline">
                  Detayları Gör →
                </a>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-[#261dcf] mb-3">
                  Boru ve Profil Çelik
                </h3>
                <p className="text-gray-700 mb-4">
                  Enerji iletim hatları ve yapısal uygulamalar için boru ve profil çelik ürünleri.
                </p>
                <a href="#" className="text-[#261dcf] font-semibold hover:underline">
                  Detayları Gör →
                </a>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-[#261dcf] mb-3">
                  Proje Danışmanlığı
                </h3>
                <p className="text-gray-700 mb-4">
                  Enerji projeleriniz için teknik danışmanlık ve mühendislik desteği.
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
              Enerji sektörü için çelik çözümlerimiz hakkında daha fazla bilgi almak veya teklif almak için bizimle iletişime geçin.
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

