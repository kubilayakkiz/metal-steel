'use client';

import Slider from '@/components/Slider';
import NewsletterForm from '@/components/NewsletterForm';
import { useTranslations } from '@/lib/i18n/hooks';
import { getPathWithLocale } from '@/lib/i18n/translations';

export default function HomeEN() {
  const { t, locale } = useTranslations();

  const sliderImages = [
    {
      src: '/slider1.jpg',
      alt: 'Slider Image 1',
      title: t.home.slider1.title,
      subtitle: t.home.slider1.subtitle,
      buttons: [
        {
          text: t.home.slider1.button1,
          href: getPathWithLocale('/teklif-al', locale),
          variant: 'primary' as const,
        },
        {
          text: t.home.slider1.button2,
          href: '#products-and-services',
          variant: 'secondary' as const,
        },
      ],
    },
    {
      src: '/slider2.jpg',
      alt: 'Slider Image 2',
      title: t.home.slider2.title,
      subtitle: t.home.slider2.subtitle,
      buttons: [
        {
          text: t.home.slider2.button1,
          href: getPathWithLocale('/kurumsal/hakkimizda', locale),
          variant: 'primary' as const,
        },
        {
          text: t.home.slider2.button2,
          href: getPathWithLocale('/iletisim', locale),
          variant: 'secondary' as const,
        },
      ],
    },
    {
      src: '/slider3.jpg',
      alt: 'Slider Image 3',
      title: t.home.slider3.title,
      subtitle: t.home.slider3.subtitle,
      buttons: [
        {
          text: t.home.slider3.button1,
          href: '#products-and-services',
          variant: 'primary' as const,
        },
        {
          text: t.home.slider3.button2,
          href: getPathWithLocale('/teklif-al', locale),
          variant: 'secondary' as const,
        },
      ],
    },
  ];

  const sectors = [
    { name: t.home.sectorsList.otomotiv, image: '/otomotiv.jpg', slug: 'otomotiv' },
    { name: t.home.sectorsList.dayanikliTuketim, image: '/dayaniklituketim.jpg', slug: 'dayanikli-tuketim' },
    { name: t.home.sectorsList.enerji, image: '/enerji.jpeg', slug: 'enerji' },
    { name: t.home.sectorsList.insaat, image: '/insaat.jpg', slug: 'insaat' },
    { name: t.home.sectorsList.makineEkipman, image: '/makinaekipman.jpg', slug: 'makine-ve-ekipman' },
    { name: t.home.sectorsList.ambalaj, image: '/ambalaj.jpg', slug: 'ambalaj' },
  ];

  const products = [
    { name: t.home.productsList.zam, slug: 'zam' },
    { name: t.home.productsList.sicakHaddelenmisSac, slug: 'sicak-haddelenmis-sac' },
    { name: t.home.productsList.galvanizliSac, slug: 'galvanizli-sac' },
    { name: t.home.productsList.boyaliSac, slug: 'boyali-sac' },
    { name: t.home.productsList.sogukHaddelenmisSac, slug: 'soguk-haddelenmis-sac' },
    { name: t.home.productsList.asitlenmisSac, slug: 'asitlenmis-sac' },
    { name: t.home.productsList.silisliSac, slug: 'silisli-sac' },
    { name: t.home.productsList.boruProfil, slug: 'boru-ve-profil' },
    { name: t.home.productsList.insaatDemiri, slug: 'insaat-demiri' },
  ];

  const services = [
    { name: t.home.servicesList.celikServis, slug: 'celik-servis-hizmetleri' },
    { name: t.home.servicesList.musteriTeknik, slug: 'musteri-teknik-hizmetleri' },
  ];

  return (
    <div className="w-full">
      {/* Slider Section */}
      <Slider images={sliderImages} autoPlayInterval={5000} />

      {/* Sectors Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#261dcf] text-center mb-6">
            {t.home.sectors.title}
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12 text-lg">
            {t.home.sectors.description}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sectors.map((sector, index) => (
              <a key={index} href={getPathWithLocale(`/sektorler/${sector.slug}`, locale)} className="relative group overflow-hidden rounded-lg cursor-pointer block">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img 
                    src={sector.image} 
                    alt={sector.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
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

      {/* Products and Services Section */}
      <section id="products-and-services" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#261dcf] text-center mb-6">
            {t.home.productsAndServices.title}
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12 text-lg">
            {t.home.productsAndServices.description}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Products Flip Card */}
            <div className="h-[500px] md:h-[650px] max-w-md mx-auto w-full perspective-1000 flip-card">
              <div className="relative w-full h-full flip-card-inner cursor-pointer">
                <div className="absolute inset-0 backface-hidden rounded-lg overflow-hidden">
                  <img 
                    src="/urunler.jpg" 
                    alt={t.home.productsAndServices.products}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-8">
                    <h3 className="text-white text-3xl md:text-4xl font-bold mb-4">{t.home.productsAndServices.products}</h3>
                    <p className="text-white text-lg">
                      {t.home.productsAndServices.productsDesc}
                    </p>
                  </div>
                </div>
                
                <div className="absolute inset-0 rotate-y-180 backface-hidden rounded-lg bg-[#261dcf] flex flex-col p-8 text-white overflow-y-auto">
                  <h3 className="text-3xl md:text-4xl font-bold mb-6 text-center">{t.home.productsAndServices.products}</h3>
                  <p className="text-lg text-center mb-6">
                    {t.home.productsAndServices.productsDesc}
                  </p>
                  <div className="space-y-2 max-w-md mx-auto w-full">
                    {products.map((product, index) => (
                      <a key={index} href={getPathWithLocale(`/urunler/${product.slug}`, locale)} className="block border-t border-white/30 pt-3 hover:bg-white/10 transition-colors duration-200 rounded px-2">
                        <p className="text-sm md:text-base font-semibold text-center">{product.name}</p>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Services Flip Card */}
            <div className="h-[500px] md:h-[650px] max-w-md mx-auto w-full perspective-1000 flip-card">
              <div className="relative w-full h-full flip-card-inner cursor-pointer">
                <div className="absolute inset-0 backface-hidden rounded-lg overflow-hidden">
                  <img 
                    src="/hizmetler.jpg" 
                    alt={t.home.productsAndServices.services}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-8">
                    <h3 className="text-white text-3xl md:text-4xl font-bold mb-4">{t.home.productsAndServices.services}</h3>
                    <p className="text-white text-lg">
                      {t.home.productsAndServices.servicesDesc}
                    </p>
                  </div>
                </div>
                
                <div className="absolute inset-0 rotate-y-180 backface-hidden rounded-lg bg-[#261dcf] flex flex-col justify-center p-8 text-white">
                  <h3 className="text-3xl md:text-4xl font-bold mb-6 text-center">{t.home.productsAndServices.services}</h3>
                  <p className="text-lg text-center mb-6">
                    {t.home.productsAndServices.servicesDesc}
                  </p>
                  <div className="space-y-3 max-w-md mx-auto w-full">
                    {services.map((service, index) => (
                      <a key={index} href={getPathWithLocale(`/hizmetler/${service.slug}`, locale)} className="block border-t border-white/30 pt-3 hover:bg-white/10 transition-colors duration-200 rounded">
                        <p className="text-base font-semibold text-center">{service.name}</p>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
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
              {t.home.about.title}
            </h2>
            <div className="max-w-2xl">
              <p className="text-white text-2xl md:text-3xl font-semibold mb-8 leading-relaxed">
                {t.home.about.description}
              </p>
              <a href={getPathWithLocale('/kurumsal/hakkimizda', locale)} className="bg-[#261dcf] hover:bg-[#1a16a8] text-white font-bold py-3 px-8 rounded transition-colors inline-block">
                {t.home.about.button}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 md:py-24 bg-gray-100 relative overflow-hidden">
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
              {t.home.newsletter.title}
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              {t.home.newsletter.description}
            </p>
            
            <NewsletterForm />
          </div>
        </div>
      </section>
    </div>
  );
}

