import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hakkımızda - Metal X Steel (Metal Steel) - Metal X Endüstriyel San. ve Tic. LTD. ŞTİ.',
  description: 'Metal X Steel (Metal Steel) olarak 15 yılı aşkın sektör deneyimimizle çelik tedarikinde güvenilirlik, doğru ürün seçimi ve zamanında teslimat.',
};

export default function HakkimizdaPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/hakkimizda.jpg" 
            alt="Hakkımızda"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#3d4f5f]/90 via-[#3d4f5f]/80 to-[#3d4f5f]/70"></div>
        </div>
        
        <div className="relative container mx-auto px-4 text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-3xl">
            HAKKIMIZDA – METAL X STEEL (Metal Steel)
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl">
            Çelik tedarikinde güvenilirlik, doğru ürün seçimi ve zamanında teslimat
          </p>
        </div>
      </section>

      {/* Hakkımızda Ana İçerik */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3d4f5f] mb-6">
              Hakkımızda
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                Metal X Steel (Metal Steel) olarak, 15 yılı aşkın sektör deneyimimizle çelik tedarikinde güvenilirlik, 
                doğru ürün seçimi ve zamanında teslimat anlayışını bir araya getiriyoruz. Yassı çelikten boru–profile, 
                kaplamalı çelik ürünlerden proje bazlı tedarik çözümlerine uzanan geniş faaliyet alanımızla; sanayi, 
                inşaat, enerji ve altyapı projelerine sürdürülebilir değer katıyoruz.
              </p>
              <p>
                Çelik sektöründe, her projenin teknik gerekliliğinin farklı olduğunun bilinciyle hareket ediyoruz. 
                Ürün seçimini yalnızca fiyat odaklı değil; kullanım yeri, ortam koşulları, işlenebilirlik, yüzey kalitesi, 
                ölçü hassasiyeti ve tedarik sürekliliği kriterleriyle birlikte değerlendiriyoruz. Bu yaklaşım, müşterilerimizin 
                hem sahada sorun yaşamamasını hem de uzun vadeli maliyetlerini optimize etmesini sağlar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Slogan Altı */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg border-l-4 border-[#3d4f5f]">
              <p className="text-xl md:text-2xl text-gray-700 mb-4 leading-relaxed">
                Çelik tedarikinde değer; sadece malzemede değil, doğru karar ve doğru zamanda teslimatta oluşur.
              </p>
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                Metal X Steel, projelerinizi sahada güçlü kılan disiplinli tedarik ve güvenilir çözüm yaklaşımıyla çalışır.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ürün Gruplarımız */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3d4f5f] mb-8 text-center">
              Ürün Gruplarımız
            </h2>
            <p className="text-center text-gray-700 mb-8 text-lg">
              Metal X Steel'in ürün gamı; farklı sektör ihtiyaçlarını karşılayacak şekilde yapılandırılmıştır:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#3d4f5f] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700 font-medium text-lg">DKP sac</span>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#3d4f5f] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700 font-medium text-lg">HRP sac</span>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#3d4f5f] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700 font-medium text-lg">Siyah sac</span>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#3d4f5f] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700 font-medium text-lg">Galvanizli sac</span>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#3d4f5f] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700 font-medium text-lg">Özel kaplamalı sac çözümleri (Magnelis / ZAM gibi)</span>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#3d4f5f] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700 font-medium text-lg">Boru–profil grupları (proje bazlı)</span>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md md:col-span-2">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#3d4f5f] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700 font-medium text-lg">Proje bazlı tedarik ve termin yönetimi</span>
                </div>
              </div>
            </div>
            <p className="text-gray-700 text-center">
              Sac ürünlerimiz; otomotivden beyaz eşyaya, enerji ekipmanlarından yapı çeliğine kadar geniş bir kullanım alanına sahiptir. 
              Üretimden sevkiyata uzanan süreçte kalite, süreklilik ve izlenebilirlik ilkelerini temel alırız.
            </p>
          </div>
        </div>
      </section>

      {/* Kaplamalı Çelikte Stratejik Ürün: Magnelis (ZAM) */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3d4f5f] mb-6">
              Kaplamalı Çelikte Stratejik Ürün: Magnelis (ZAM)
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                Kaplamalı çelik çözümlerimiz içinde Magnelis (ZAM), Metal X Steel'in stratejik önem verdiği ürün gruplarından biridir. 
                Çinko–alüminyum–magnezyum alaşımlı bu yeni nesil kaplama teknolojisi, standart galvanize kıyasla daha yüksek korozyon 
                dayanımı sağlayarak dış ortam uygulamalarında uzun ömür ve düşük bakım ihtiyacı hedefler.
              </p>
              <p>
                Magnelis'in tercih edilme nedeni; sahadaki işlemler sonrası oluşabilecek yüzey/kesit bölgelerinde dahi korumayı destekleyen 
                kaplama davranışıyla, projelerde servis ömrünü uzatmaya katkı sağlamasıdır. Bu nedenle:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>GES taşıyıcı konstrüksiyonlar</li>
                <li>endüstriyel tesisler</li>
                <li>altyapı projeleri</li>
                <li>açık alan uygulamaları</li>
              </ul>
              <p>
                gibi zorlu kullanım alanlarında güçlü bir alternatif olarak öne çıkar.
              </p>
              <p className="font-semibold">
                Metal X Steel olarak Magnelis'i yalnızca bir kaplama türü değil; uzun vadeli performans, sürdürülebilirlik ve toplam maliyet 
                avantajı sunan stratejik bir yapı bileşeni olarak konumlandırıyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Metal X Steel Yaklaşımı */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3d4f5f] mb-6">
              Metal X Steel Yaklaşımı
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                Metal X Steel, yalnızca ürün tedarik eden bir firma olmanın ötesinde; süreci uçtan uca yöneten bir iş ortağı olmayı hedefler:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Doğru ürün yönlendirmesi</li>
                <li>Teknik destek ve proje bazlı planlama</li>
                <li>Güçlü lojistik ve termin disiplini</li>
                <li>Şeffaf ve sürdürülebilir tedarik yönetimi</li>
              </ul>
              <p>
                Değişen piyasa koşullarında hızlı karar alabilen yapımızla, müşterilerimize güvenilir tedarik ve uzun vadeli değer sunarız.
              </p>
              <p className="text-center text-lg font-bold text-[#3d4f5f] mt-6">
                Metal X Steel – endüstriyel çeliğin gücü.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rakamlarla Metal X Steel */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3d4f5f] mb-12 text-center">
              Rakamlarla Metal X Steel
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-[#3d4f5f]">
                <div className="text-4xl md:text-5xl font-bold text-[#3d4f5f] mb-2">15+</div>
                <div className="text-lg font-semibold text-gray-800 mb-2">Yıl</div>
                <p className="text-sm text-gray-600">Demir-çelik tedarikinde saha tecrübesi</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-[#3d4f5f]">
                <div className="text-4xl md:text-5xl font-bold text-[#3d4f5f] mb-2">200+</div>
                <div className="text-lg font-semibold text-gray-800 mb-2">Müşteri / İş Ortağı</div>
                <p className="text-sm text-gray-600">Sürekli çalışan müşteri ağı</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-[#3d4f5f]">
                <div className="text-4xl md:text-5xl font-bold text-[#3d4f5f] mb-2">8+</div>
                <div className="text-lg font-semibold text-gray-800 mb-2">Grup</div>
                <p className="text-sm text-gray-600">Yassı çelik, kaplamalı ürünler, boru–profil vb.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-[#3d4f5f]">
                <div className="text-4xl md:text-5xl font-bold text-[#3d4f5f] mb-2">3.000</div>
                <div className="text-lg font-semibold text-gray-800 mb-2">Ton/Ay</div>
                <p className="text-sm text-gray-600">Tedarik ve sevkiyat kapasitesi (proje bazlı ölçeklenebilir)</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-[#3d4f5f]">
                <div className="text-4xl md:text-5xl font-bold text-[#3d4f5f] mb-2">0–1</div>
                <div className="text-lg font-semibold text-gray-800 mb-2">Gün</div>
                <p className="text-sm text-gray-600">Çoğu talepte aynı gün geri dönüş</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-[#3d4f5f]">
                <div className="text-4xl md:text-5xl font-bold text-[#3d4f5f] mb-2">%95+</div>
                <div className="text-lg font-semibold text-gray-800 mb-2">Hedef</div>
                <p className="text-sm text-gray-600">Planlı sevkiyat ve süreç takibiyle</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Misyon */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#3d4f5f] mb-6">
                  Misyon
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                  <p>
                    Metal X Steel'in misyonu; 15 yılı aşkın demir-çelik tecrübemizle müşterilerimize güvenilir tedarik, 
                    doğru ürün seçimi ve sürdürülebilir çözümler sunmaktır.
                  </p>
                  <p>
                    Geniş ürün gamımız ve güçlü tedarik ağımızla; yassı çelik, boru–profil ve kaplamalı çelik gruplarında, 
                    projelere uygun kalite–termin–lojistik yönetimi sağlayarak müşterilerimizin operasyonel sürekliliğini destekleriz.
                  </p>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg relative">
                <img 
                  src="/mission.jpg" 
                  alt="Misyonumuz"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#3d4f5f]/30"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vizyon */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1 rounded-lg overflow-hidden shadow-lg relative">
                <img 
                  src="/vision.jpg" 
                  alt="Vizyonumuz"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#3d4f5f]/30"></div>
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl md:text-4xl font-bold text-[#3d4f5f] mb-6">
                  Vizyon
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                  <p>
                    Vizyonumuz; çelik tedarikinde güvenilir iş ortağı kimliğini güçlendirerek, Türkiye'de ve uluslararası pazarda 
                    rekabetçi, izlenebilir ve sürdürülebilir tedarik yaklaşımıyla sektörün referans firmaları arasında yer almaktır.
                  </p>
                  <p>
                    Müşterilerimizin ihtiyacını doğru analiz ederek; yüksek kalite, rekabetçi koşullar ve zamanında teslim ilkeleriyle 
                    her projede ölçülebilir katma değer üretmeyi hedefleriz.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Neden Metal X Steel? */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3d4f5f] mb-8 text-center">
              Neden Metal X Steel?
            </h2>
            <p className="text-center text-gray-700 mb-8 text-lg">
              Müşterilerimizin bizi tercih etme nedeni basit: işi sahada çözen bir tedarik yaklaşımıyla hareket ederiz.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#3d4f5f] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-[#3d4f5f]">Doğru ürün seçimi</h3>
                    <p className="text-gray-700">Proje şartlarına göre kalite/kaplama/ölçü yönlendirmesi</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#3d4f5f] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-[#3d4f5f]">Termin disiplini</h3>
                    <p className="text-gray-700">Süreç takibi, planlı sevkiyat ve net teslim programı</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#3d4f5f] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-[#3d4f5f]">Güçlü tedarik ağı</h3>
                    <p className="text-gray-700">Süreklilik ve alternatif kaynak yönetimi</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#3d4f5f] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-[#3d4f5f]">Şeffaf iletişim</h3>
                    <p className="text-gray-700">Net bilgi, gerçekçi termin ve hızlı geri dönüş</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md md:col-span-2">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#3d4f5f] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-[#3d4f5f]">Uzun vadeli ortaklık</h3>
                    <p className="text-gray-700">Tek seferlik satış değil, sürdürülebilir iş ilişkisi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Değerlerimiz */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3d4f5f] mb-8 text-center">
              Değerlerimiz
            </h2>
            <div className="mb-8 rounded-lg overflow-hidden shadow-lg relative">
              <img 
                src="/values.jpg" 
                alt="Değerlerimiz"
                className="w-full h-[250px] md:h-[300px] object-cover"
              />
              <div className="absolute inset-0 bg-[#3d4f5f]/30"></div>
            </div>
            <p className="text-center text-gray-700 mb-8 text-lg">
              Metal X Steel'in çalışma kültürü; kısa vadeli kazançtan önce güven ve süreklilik üzerine kuruludur.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#3d4f5f] mb-3">Güven</h3>
                <p className="text-gray-700">
                  Söylediğini yapan, taahhüdünü tutan yaklaşım
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#3d4f5f] mb-3">Kalite</h3>
                <p className="text-gray-700">
                  Standartlara uygun, izlenebilir ve kontrollü tedarik
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#3d4f5f] mb-3">Hız</h3>
                <p className="text-gray-700">
                  Teklif, onay, termin ve sevkiyatta çevik operasyon
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#3d4f5f] mb-3">Şeffaflık</h3>
                <p className="text-gray-700">
                  Açık iletişim, gerçekçi planlama, doğru bilgilendirme
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md md:col-span-2">
                <h3 className="text-xl font-bold text-[#3d4f5f] mb-3">Sürdürülebilirlik</h3>
                <p className="text-gray-700">
                  Uzun ömürlü çözümler, doğru ürün seçimi, doğru maliyet
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kurucu Mesajı */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3d4f5f] mb-8 text-center">
              Kurucu Mesajı
            </h2>
            <div className="bg-gray-50 p-8 md:p-12 rounded-lg shadow-lg border-l-4 border-[#3d4f5f]">
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p>
                  Metal X Steel'i; çelik tedarikinde "fiyat konuşup geçmek" yerine, projeye doğru malzemeyi doğru zamanda ulaştıran 
                  bir çözüm ortağı olarak konumlandırdık. Çünkü sahada gerçek değer; ürünün performansı, termin güvenilirliği ve 
                  süreç yönetimiyle ortaya çıkar.
                </p>
                <p>
                  Bugün geldiğimiz noktada, 15 yıllık birikimimizi daha güçlü bir tedarik ağı ve daha disiplinli bir lojistik 
                  yaklaşımıyla birleştiriyor; müşterilerimizin projelerinde süreklilik ve güven üretmeye devam ediyoruz.
                </p>
                <p className="text-center text-lg font-bold text-[#3d4f5f] mt-6">
                  Metal X Steel – endüstriyel çeliğin gücü.
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
          <div className="absolute inset-0 bg-[#3d4f5f]/80"></div>
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Bizimle İletişime Geçin
            </h2>
            <p className="text-xl mb-8 text-gray-100">
              Hakkımızda daha fazla bilgi almak veya iş birliği fırsatlarını değerlendirmek için bizimle iletişime geçin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/iletisim" className="px-8 py-4 bg-white text-[#3d4f5f] font-bold rounded-lg hover:bg-gray-100 transition-colors">
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
