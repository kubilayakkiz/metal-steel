'use client';

import Slider from '@/components/Slider';
import NewsletterForm from '@/components/NewsletterForm';

export default function Home() {
  // Slider görselleri - Görsellerinizi public klasörüne ekleyip yollarını buraya yazın
  const sliderImages = [
    {
      src: '/slider1.jpg',
      alt: 'Slider Görsel 1',
      title: 'Gelecek İçin Değer',
      subtitle: 'Yarınlara değer katan çözümlerle iş ortaklarınızın yanındayız',
      buttons: [
        {
          text: 'Teklif Al',
          href: '/teklif-al',
          variant: 'primary' as const,
        },
        {
          text: 'Ürünlerimiz',
          href: '#urunler-ve-hizmetler',
          variant: 'secondary' as const,
        },
      ],
    },
    {
      src: '/slider2.jpg',
      alt: 'Slider Görsel 2',
      title: 'Kaliteli Üretim, Güvenilir Hizmet',
      subtitle: 'Çelik sektöründe öncü marka olarak size en iyi çözümleri sunuyoruz',
      buttons: [
        {
          text: 'Hakkımızda',
          href: '/kurumsal/hakkimizda',
          variant: 'primary' as const,
        },
        {
          text: 'İletişim',
          href: '/iletisim',
          variant: 'secondary' as const,
        },
      ],
    },
    {
      src: '/slider3.jpg',
      alt: 'Slider Görsel 3',
      title: 'Sürdürülebilir Gelecek',
      subtitle: 'Çevre dostu üretim anlayışıyla gelecek nesillere temiz bir dünya bırakıyoruz',
      buttons: [
        {
          text: 'Ürünlerimiz',
          href: '#urunler-ve-hizmetler',
          variant: 'primary' as const,
        },
        {
          text: 'Teklif Al',
          href: '/teklif-al',
          variant: 'secondary' as const,
        },
      ],
    },
  ];

  return (
    <div className="w-full">
      {/* Slider Section */}
      <Slider images={sliderImages} autoPlayInterval={5000} />

      {/* Sektörler Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#261dcf] text-center mb-6">
            Sektörler
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12 text-lg">
            Yarınlara değer katmak için çalışıyoruz. Büyümek ve sağlam bir çözüm ortağıyla yürümek isteyenlerin yanındayız.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Otomotiv', image: '/otomotiv.jpg', slug: 'otomotiv' },
              { name: 'Dayanıklı Tüketim', image: '/dayaniklituketim.jpg', slug: 'dayanikli-tuketim' },
              { name: 'Enerji', image: '/enerji.jpeg', slug: 'enerji' },
              { name: 'İnşaat', image: '/insaat.jpg', slug: 'insaat' },
              { name: 'Makine ve Ekipman', image: '/makinaekipman.jpg', slug: 'makine-ve-ekipman' },
              { name: 'Ambalaj', image: '/ambalaj.jpg', slug: 'ambalaj' },
            ].map((sector, index) => (
              <a key={index} href={`/sektorler/${sector.slug}`} className="relative group overflow-hidden rounded-lg cursor-pointer block">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img 
                    src={sector.image} 
                    alt={sector.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {/* Şeffaf arka plan ve ortalanmış başlık */}
                  <div className="absolute inset-0 flex items-center justify-center bg-[#261dcf]/30 group-hover:bg-[#261dcf]/40 transition-all duration-300">
                    <h3 className="text-white font-bold text-xl md:text-2xl text-center px-4 group-hover:scale-110 transition-transform duration-300">
                      {sector.name}
                    </h3>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Ürünler ve Hizmetler Section */}
      <section id="urunler-ve-hizmetler" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#261dcf] text-center mb-6">
            Ürünler ve Hizmetler
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12 text-lg">
            Yarının ihtiyaçlarına bugünden çözüm üreterek iş hedeflerinize değer katıyoruz.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Ürünler Flip Card */}
            <div className="h-[500px] md:h-[650px] max-w-md mx-auto w-full perspective-1000 flip-card">
              <div className="relative w-full h-full flip-card-inner cursor-pointer">
                {/* Front Face - Ürünler */}
                <div className="absolute inset-0 backface-hidden rounded-lg overflow-hidden">
                  <img 
                    src="/urunler.jpg" 
                    alt="Ürünler"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-8">
                    <h3 className="text-white text-3xl md:text-4xl font-bold mb-4">Ürünler</h3>
                    <p className="text-white text-lg">
                      Kusursuz tedarik sürecinizle yakından ilgileniyoruz.
                    </p>
                  </div>
                </div>
                
                {/* Back Face - Ürünler Detay */}
                <div className="absolute inset-0 rotate-y-180 backface-hidden rounded-lg bg-[#261dcf] flex flex-col p-8 text-white overflow-y-auto">
                  <h3 className="text-3xl md:text-4xl font-bold mb-6 text-center">Ürünler</h3>
                  <p className="text-lg text-center mb-6">
                    Kusursuz tedarik sürecinizle yakından ilgileniyoruz.
                  </p>
                  <div className="space-y-2 max-w-md mx-auto w-full">
                    <a href="/urunler/zam" className="block border-t border-white/30 pt-3 hover:bg-white/10 transition-colors duration-200 rounded px-2">
                      <p className="text-sm md:text-base font-semibold text-center">ZAM (Min 25 Yıl Yüksek Korozyon Dayanımı)</p>
                    </a>
                    <a href="/urunler/sicak-haddelenmis-sac" className="block border-t border-white/30 pt-3 hover:bg-white/10 transition-colors duration-200 rounded px-2">
                      <p className="text-sm md:text-base font-semibold text-center">Sıcak Haddelenmiş Sac</p>
                    </a>
                    <a href="/urunler/galvanizli-sac" className="block border-t border-white/30 pt-3 hover:bg-white/10 transition-colors duration-200 rounded px-2">
                      <p className="text-sm md:text-base font-semibold text-center">Galvanizli Sac</p>
                    </a>
                    <a href="/urunler/boyali-sac" className="block border-t border-white/30 pt-3 hover:bg-white/10 transition-colors duration-200 rounded px-2">
                      <p className="text-sm md:text-base font-semibold text-center">Boyalı Sac</p>
                    </a>
                    <a href="/urunler/soguk-haddelenmis-sac" className="block border-t border-white/30 pt-3 hover:bg-white/10 transition-colors duration-200 rounded px-2">
                      <p className="text-sm md:text-base font-semibold text-center">Soğuk Haddelenmiş Sac</p>
                    </a>
                    <a href="/urunler/asitlenmis-sac" className="block border-t border-white/30 pt-3 hover:bg-white/10 transition-colors duration-200 rounded px-2">
                      <p className="text-sm md:text-base font-semibold text-center">Asitlenmiş Sac</p>
                    </a>
                    <a href="/urunler/silisli-sac" className="block border-t border-white/30 pt-3 hover:bg-white/10 transition-colors duration-200 rounded px-2">
                      <p className="text-sm md:text-base font-semibold text-center">Silisli Sac</p>
                    </a>
                    <a href="/urunler/boru-ve-profil" className="block border-t border-white/30 pt-3 hover:bg-white/10 transition-colors duration-200 rounded px-2">
                      <p className="text-sm md:text-base font-semibold text-center">Boru ve Profil</p>
                    </a>
                    <a href="/urunler/insaat-demiri" className="block border-t border-white/30 pt-3 hover:bg-white/10 transition-colors duration-200 rounded px-2">
                      <p className="text-sm md:text-base font-semibold text-center">İnşaat Demiri</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Hizmetler Flip Card */}
            <div className="h-[500px] md:h-[650px] max-w-md mx-auto w-full perspective-1000 flip-card">
              <div className="relative w-full h-full flip-card-inner cursor-pointer">
                {/* Front Face - Hizmetler */}
                <div className="absolute inset-0 backface-hidden rounded-lg overflow-hidden">
                  <img 
                    src="/hizmetler.jpg" 
                    alt="Hizmetler"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-8">
                    <h3 className="text-white text-3xl md:text-4xl font-bold mb-4">Hizmetler</h3>
                    <p className="text-white text-lg">
                      Güvenin karşılığı; koşulsuz memnuniyet, biliyoruz.
                    </p>
                  </div>
                </div>
                
                {/* Back Face - Hizmetler Detay */}
                <div className="absolute inset-0 rotate-y-180 backface-hidden rounded-lg bg-[#261dcf] flex flex-col justify-center p-8 text-white">
                  <h3 className="text-3xl md:text-4xl font-bold mb-6 text-center">Hizmetler</h3>
                  <p className="text-lg text-center mb-6">
                    Güvenin karşılığı; koşulsuz memnuniyet, biliyoruz.
                  </p>
                  <div className="space-y-3 max-w-md mx-auto w-full">
                    <a href="/hizmetler/celik-servis-hizmetleri" className="block border-t border-white/30 pt-3 hover:bg-white/10 transition-colors duration-200 rounded">
                      <p className="text-base font-semibold text-center">Çelik Servis Hizmetleri</p>
                    </a>
                    <a href="/hizmetler/musteri-teknik-hizmetleri" className="block border-t border-white/30 pt-3 hover:bg-white/10 transition-colors duration-200 rounded">
                      <p className="text-base font-semibold text-center">Müşteri Teknik Hizmetleri</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hakkımızda Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/hakkimizda.jpg" 
            alt="About Us Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#261dcf]/50"></div>
        </div>
        
        <div className="relative container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#261dcf] mb-8 bg-white inline-block px-4 py-2">
              Hakkımızda
            </h2>
            <div className="max-w-2xl">
              <p className="text-white text-2xl md:text-3xl font-semibold mb-8 leading-relaxed">
                Geleceğe değer katan iş yapış şekillerimiz, çalışma kültürümüz ve üretici kimliğimize yakından bakın
              </p>
              <a href="/kurumsal/hakkimizda" className="bg-[#261dcf] hover:bg-[#1a16a8] text-white font-bold py-3 px-8 rounded transition-colors inline-block">
                DETAYLI BİLGİ
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Bülten Abonelik Section */}
      <section className="py-16 md:py-24 bg-gray-100 relative overflow-hidden">
        {/* Arka Plan Görseli - Ortaya yakın solda */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 flex items-center justify-center">
            <img 
              src="/MetalXbg.png" 
              alt="Metal X Background"
              className="h-full w-auto object-cover opacity-10 md:opacity-15 -translate-x-[35%] md:-translate-x-[35%]"
            />
          </div>
        </div>
        
        <div className="relative container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-[#261dcf] font-bold text-lg mb-2">
              Metal X Endüstriyel San. ve Tic. LTD. ŞTİ.
            </h3>
            <h2 className="text-3xl md:text-4xl font-bold text-[#261dcf] mb-4">
              İşinizi geleceğe birlikte taşıyalım
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Güncel haberler, özel teklifler ve sektörden gelişmeler için bültenimize abone olun.
            </p>
            
            <NewsletterForm />
          </div>
        </div>
      </section>
    </div>
  );
}
