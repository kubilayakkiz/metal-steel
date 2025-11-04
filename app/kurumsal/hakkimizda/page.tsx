import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hakkımızda - Metal X Endüstriyel San. ve Tic. LTD. ŞTİ.',
  description: 'Metal X Endüstriyel San. ve Tic. LTD. ŞTİ. hakkında bilgiler. Geleceğe değer katan iş yapış şekillerimiz, çalışma kültürümüz ve üretici kimliğimiz.',
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
          <div className="absolute inset-0 bg-gradient-to-r from-[#261dcf]/90 via-[#261dcf]/80 to-[#261dcf]/70"></div>
        </div>
        
        <div className="relative container mx-auto px-4 text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-3xl">
            Hakkımızda
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl">
            Geleceğe değer katan iş yapış şekillerimiz, çalışma kültürümüz ve üretici kimliğimiz
          </p>
        </div>
      </section>

      {/* Misyonumuz */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#261dcf] mb-6">
                  Misyonumuz
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                  <p>
                    Metal X Endüstriyel San. ve Tic. LTD. ŞTİ. olarak, çelik sektöründe öncü bir marka olarak müşterilerimize en yüksek 
                    kalitede ürün ve hizmet sunmayı hedefliyoruz. Sürdürülebilir üretim anlayışımız ve 
                    yenilikçi yaklaşımlarımızla, sektörde lider konumda olmayı sürdürüyoruz.
                  </p>
                  <p>
                    Müşteri memnuniyetini ön planda tutarak, kaliteli ürünler ve güvenilir hizmetler 
                    sunmak temel misyonumuzdur. İş ortaklarımızla uzun vadeli ilişkiler kurarak, 
                    birlikte büyümeyi ve gelişmeyi hedefliyoruz.
                  </p>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg relative">
                <img 
                  src="/mission.jpg" 
                  alt="Misyonumuz"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#261dcf]/30"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vizyonumuz */}
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
                <div className="absolute inset-0 bg-[#261dcf]/30"></div>
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl md:text-4xl font-bold text-[#261dcf] mb-6">
                  Vizyonumuz
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                  <p>
                    Çelik sektöründe bölgesel ve küresel ölçekte tanınan, güvenilir ve yenilikçi bir 
                    marka olmak. Sürdürülebilir büyüme ve gelişme ile sektörde öncü konumumuzu 
                    korumak ve gelecek nesillere daha iyi bir dünya bırakmak.
                  </p>
                  <p>
                    Teknolojik gelişmeleri yakından takip ederek, üretim süreçlerimizi sürekli 
                    iyileştirmek ve çevre dostu çözümler sunmak vizyonumuzun temel taşlarıdır.
                  </p>
                </div>
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
            <div className="mb-8 rounded-lg overflow-hidden shadow-lg relative">
              <img 
                src="/values.jpg" 
                alt="Değerlerimiz"
                className="w-full h-[250px] md:h-[300px] object-cover"
              />
              <div className="absolute inset-0 bg-[#261dcf]/30"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#261dcf] mb-3">Kalite</h3>
                <p className="text-gray-700">
                  Ürünlerimizde ve hizmetlerimizde en yüksek kalite standartlarını benimseriz. 
                  Müşterilerimizin beklentilerini aşmayı hedefleriz.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#261dcf] mb-3">Güvenilirlik</h3>
                <p className="text-gray-700">
                  İş ortaklarımızla kurduğumuz güçlü ilişkiler ve verdiğimiz sözleri tutma 
                  anlayışımız, güvenilir bir marka olmamızı sağlar.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#261dcf] mb-3">Yenilikçilik</h3>
                <p className="text-gray-700">
                  Teknolojik gelişmeleri yakından takip eder, üretim süreçlerimizi sürekli 
                  iyileştirir ve yenilikçi çözümler sunarız.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#261dcf] mb-3">Sürdürülebilirlik</h3>
                <p className="text-gray-700">
                  Çevre dostu üretim anlayışımız ve sürdürülebilir iş yapış şekillerimizle, 
                  gelecek nesillere daha iyi bir dünya bırakmayı hedefleriz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Şirket Tarihçesi */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#261dcf] mb-8 text-center">
              Şirket Tarihçesi
            </h2>
            <div className="mb-8 rounded-lg overflow-hidden shadow-lg relative">
              <img 
                src="/histories.jpg" 
                alt="Şirket Tarihçesi"
                className="w-full h-[250px] md:h-[300px] object-cover"
              />
              <div className="absolute inset-0 bg-[#261dcf]/30"></div>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#261dcf] mb-3">Kuruluş</h3>
                <p className="text-gray-700">
                  Metal X Endüstriyel San. ve Tic. LTD. ŞTİ., çelik sektöründe uzun yıllara dayanan deneyim ve bilgi birikimi ile 
                  kurulmuş, sektörde öncü bir marka olmayı hedefleyen bir şirkettir.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#261dcf] mb-3">Büyüme</h3>
                <p className="text-gray-700">
                  Yıllar içinde müşteri portföyümüzü genişleterek, farklı sektörlerde hizmet 
                  vermeye başladık. Kaliteli ürünler ve güvenilir hizmetlerle sektörde önemli 
                  bir konum elde ettik.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#261dcf] mb-3">Günümüz</h3>
                <p className="text-gray-700">
                  Bugün, modern üretim tesislerimiz ve deneyimli ekibimizle, çelik sektöründe 
                  öncü bir marka olarak hizmet vermeye devam ediyoruz. Sürdürülebilir büyüme 
                  ve gelişme hedeflerimizle, geleceğe yatırım yapmaya devam ediyoruz.
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
              Hakkımızda daha fazla bilgi almak veya iş birliği fırsatlarını değerlendirmek için bizimle iletişime geçin.
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

