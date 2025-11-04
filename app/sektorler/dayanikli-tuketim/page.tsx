import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dayanıklı Tüketim Sektörü - Metal X Endüstriyel San. ve Tic. LTD. ŞTİ.',
  description: 'Dayanıklı tüketim sektörü için çelik çözümleri. Beyaz eşya, elektronik ve dayanıklı tüketim ürünleri için yüksek kaliteli çelik.',
};

export default function DayanikliTuketimPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 lg:py-40 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/dayaniklituketim.jpg" 
            alt="Dayanıklı Tüketim Sektörü"
            className="w-full h-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#261dcf]/90 via-[#261dcf]/80 to-[#261dcf]/70"></div>
        </div>
        
        {/* Content */}
        <div className="relative container mx-auto px-4 text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-3xl">
            Dayanıklı Tüketim Sektörü
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl">
            Dayanıklı tüketim ürünleri için güvenilir çelik çözümleri
          </p>
        </div>
      </section>

      {/* Açıklama */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#261dcf] mb-6">
              Dayanıklı Tüketim Sektöründe Metal X Endüstriyel San. ve Tic. LTD. ŞTİ.
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                Metal X Endüstriyel San. ve Tic. LTD. ŞTİ., dayanıklı tüketim sektörünün önde gelen çelik tedarikçilerinden biridir. 
                Beyaz eşya, elektronik ürünler ve diğer dayanıklı tüketim ürünlerinin üretiminde 
                kullanılan yüksek kaliteli çelik ürünleri sunuyoruz.
              </p>
              <p>
                Modern tüketici talepleri, ürünlerin hem dayanıklı hem de estetik açıdan çekici 
                olmasını gerektirir. Metal X Endüstriyel San. ve Tic. LTD. ŞTİ.'in çelik ürünleri, bu gereksinimleri karşılayarak 
                üreticilerin piyasada rekabet avantajı elde etmelerine yardımcı olur.
              </p>
              <p>
                Geniş ürün yelpazemiz ve esnek üretim kapasitemiz ile dayanıklı tüketim sektörünün 
                dinamik ihtiyaçlarına hızlı ve etkili çözümler sunuyoruz.
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
                  Beyaz Eşya Üretimi
                </h3>
                <p className="text-gray-700">
                  Buzdolabı, çamaşır makinesi, bulaşık makinesi ve fırın gibi beyaz eşyaların 
                  gövde ve iç bileşenleri için çelik çözümleri.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#261dcf] mb-3">
                  Elektronik Ürünler
                </h3>
                <p className="text-gray-700">
                  Televizyon, bilgisayar kasası, ses sistemleri ve diğer elektronik cihazların 
                  üretimi için özel çelik ürünleri.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#261dcf] mb-3">
                  Küçük Ev Aletleri
                </h3>
                <p className="text-gray-700">
                  Ütü, kahve makinesi, blender ve diğer küçük ev aletlerinin üretiminde 
                  kullanılan çelik malzemeler.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#261dcf] mb-3">
                  Mobilya ve İç Tasarım
                </h3>
                <p className="text-gray-700">
                  Modern mobilya tasarımları ve iç mekan uygulamaları için estetik ve 
                  fonksiyonel çelik çözümleri.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#261dcf] mb-3">
                  Ambalaj ve Muhafaza
                </h3>
                <p className="text-gray-700">
                  Dayanıklı tüketim ürünlerinin ambalajlanması ve muhafazası için çelik 
                  kutu ve konteyner çözümleri.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#261dcf] mb-3">
                  Özel Tasarım Çözümleri
                </h3>
                <p className="text-gray-700">
                  Müşteri özel ihtiyaçlarına göre özel tasarım ve üretim hizmetleri. 
                  Prototip geliştirme ve seri üretim desteği.
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
              Dayanıklı Tüketim Sektöründe Çeliğin Avantajları
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#261dcf]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#261dcf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Uzun Ömür</h3>
                  <p className="text-gray-700">
                    Çelik ürünler, dayanıklı tüketim eşyalarında uzun kullanım ömrü sağlar. 
                    Tüketicilere yıllarca sorunsuz kullanım garantisi sunar.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#261dcf]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#261dcf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Estetik Tasarım</h3>
                  <p className="text-gray-700">
                    Modern yüzey işleme teknikleri ile estetik açıdan çekici ürünler. 
                    Çeşitli renk ve kaplama seçenekleri ile tasarım esnekliği.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#261dcf]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#261dcf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Hijyen ve Temizlik</h3>
                  <p className="text-gray-700">
                    Pürüzsüz yüzeyler kolay temizlenebilir. Özellikle beyaz eşya ve mutfak 
                    uygulamalarında hijyenik avantaj sağlar.
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
                    %100 geri dönüştürülebilir malzeme ile sürdürülebilir üretim. 
                    Çevre dostu ürün seçeneği sunar.
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">İşlenebilirlik</h3>
                  <p className="text-gray-700">
                    Kolay kesme, bükme ve şekillendirme imkanı. Karmaşık tasarımların 
                    üretiminde esneklik sağlar.
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
              Dayanıklı Tüketim Sektörü İçin İlgili Ürünler
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-[#261dcf] mb-3">
                  Boyalı Sac
                </h3>
                <p className="text-gray-700 mb-4">
                  Estetik ve koruyucu özellikleri ile beyaz eşya ve elektronik ürünlerde kullanılan boyalı saclar.
                </p>
                <a href="#" className="text-[#261dcf] font-semibold hover:underline">
                  Detayları Gör →
                </a>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-[#261dcf] mb-3">
                  Galvanizli Sac
                </h3>
                <p className="text-gray-700 mb-4">
                  Korozyona dayanıklı galvanizli sac, dayanıklı tüketim ürünlerinde uzun ömür sağlar.
                </p>
                <a href="#" className="text-[#261dcf] font-semibold hover:underline">
                  Detayları Gör →
                </a>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-[#261dcf] mb-3">
                  Soğuk Haddelenmiş Sac
                </h3>
                <p className="text-gray-700 mb-4">
                  Hassas toleranslar ve mükemmel yüzey kalitesi ile hassas üretim gerektiren uygulamalar.
                </p>
                <a href="#" className="text-[#261dcf] font-semibold hover:underline">
                  Detayları Gör →
                </a>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-[#261dcf] mb-3">
                  Paslanmaz Çelik
                </h3>
                <p className="text-gray-700 mb-4">
                  Hijyen ve dayanıklılık gerektiren uygulamalar için paslanmaz çelik çözümleri.
                </p>
                <a href="#" className="text-[#261dcf] font-semibold hover:underline">
                  Detayları Gör →
                </a>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-[#261dcf] mb-3">
                  Özel Kaplamalı Sac
                </h3>
                <p className="text-gray-700 mb-4">
                  Estetik ve koruyucu özellikleri ile özel kaplama seçenekleri.
                </p>
                <a href="#" className="text-[#261dcf] font-semibold hover:underline">
                  Detayları Gör →
                </a>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-[#261dcf] mb-3">
                  Teknik Destek
                </h3>
                <p className="text-gray-700 mb-4">
                  Ürün seçimi ve uygulama konularında uzman teknik danışmanlık hizmetleri.
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
              Dayanıklı tüketim sektörü için çelik çözümlerimiz hakkında daha fazla bilgi almak veya teklif almak için bizimle iletişime geçin.
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

