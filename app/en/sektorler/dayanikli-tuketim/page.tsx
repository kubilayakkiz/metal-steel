'use client';

import { useTranslations } from '@/lib/i18n/hooks';
import { getPathWithLocale } from '@/lib/i18n/translations';

export default function DayanikliTuketimPageEN() {
  const { t, locale } = useTranslations();

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/dayaniklituketim.jpg" 
            alt={t.sectors.dayanikliTuketim.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#261dcf]/90 via-[#261dcf]/80 to-[#261dcf]/70"></div>
        </div>
        
        <div className="relative container mx-auto px-4 text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-3xl">
            {t.sectors.dayanikliTuketim.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl">
            {t.sectors.dayanikliTuketim.subtitle}
          </p>
        </div>
      </section>

      {/* Açıklama */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#261dcf] mb-6">
              {t.sectors.dayanikliTuketim.aboutTitle}
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>{t.sectors.dayanikliTuketim.aboutText1}</p>
              <p>{t.sectors.dayanikliTuketim.aboutText2}</p>
              <p>{t.sectors.dayanikliTuketim.aboutText3}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hizmet Alanları */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#261dcf] mb-8 text-center">
              {t.sectors.dayanikliTuketim.serviceAreasTitle}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#261dcf] mb-3">
                  {t.sectors.dayanikliTuketim.whiteGoods}
                </h3>
                <p className="text-gray-700">
                  {t.sectors.dayanikliTuketim.whiteGoodsDesc}
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#261dcf] mb-3">
                  {t.sectors.dayanikliTuketim.electronics}
                </h3>
                <p className="text-gray-700">
                  {t.sectors.dayanikliTuketim.electronicsDesc}
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#261dcf] mb-3">
                  {t.sectors.dayanikliTuketim.smallAppliances}
                </h3>
                <p className="text-gray-700">
                  {t.sectors.dayanikliTuketim.smallAppliancesDesc}
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#261dcf] mb-3">
                  {t.sectors.dayanikliTuketim.furniture}
                </h3>
                <p className="text-gray-700">
                  {t.sectors.dayanikliTuketim.furnitureDesc}
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#261dcf] mb-3">
                  {t.sectors.dayanikliTuketim.packaging}
                </h3>
                <p className="text-gray-700">
                  {t.sectors.dayanikliTuketim.packagingDesc}
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#261dcf] mb-3">
                  {t.sectors.dayanikliTuketim.customDesign}
                </h3>
                <p className="text-gray-700">
                  {t.sectors.dayanikliTuketim.customDesignDesc}
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
              {t.sectors.dayanikliTuketim.advantagesTitle}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#261dcf]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#261dcf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{t.sectors.dayanikliTuketim.longLife}</h3>
                  <p className="text-gray-700">
                    {t.sectors.dayanikliTuketim.longLifeDesc}
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
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{t.sectors.dayanikliTuketim.aestheticDesign}</h3>
                  <p className="text-gray-700">
                    {t.sectors.dayanikliTuketim.aestheticDesignDesc}
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
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{t.sectors.dayanikliTuketim.hygiene}</h3>
                  <p className="text-gray-700">
                    {t.sectors.dayanikliTuketim.hygieneDesc}
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
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{t.sectors.dayanikliTuketim.recycling}</h3>
                  <p className="text-gray-700">
                    {t.sectors.dayanikliTuketim.recyclingDesc}
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
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{t.sectors.dayanikliTuketim.costEffectiveness}</h3>
                  <p className="text-gray-700">
                    {t.sectors.dayanikliTuketim.costEffectivenessDesc}
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
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{t.sectors.dayanikliTuketim.processability}</h3>
                  <p className="text-gray-700">
                    {t.sectors.dayanikliTuketim.processabilityDesc}
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
              Related Products for the Durable Consumer Goods Sector
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-[#261dcf] mb-3">
                  {t.home.productsList.boyaliSac}
                </h3>
                <p className="text-gray-700 mb-4">
                  Painted sheets with aesthetic and protective properties used in white goods and electronic products.
                </p>
                <a href={getPathWithLocale('/urunler/boyali-sac', locale)} className="text-[#261dcf] font-semibold hover:underline">
                  {t.sectors.otomotiv.viewDetails}
                </a>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-[#261dcf] mb-3">
                  {t.home.productsList.galvanizliSac}
                </h3>
                <p className="text-gray-700 mb-4">
                  Corrosion-resistant galvanized sheet provides long life in durable consumer products.
                </p>
                <a href={getPathWithLocale('/urunler/galvanizli-sac', locale)} className="text-[#261dcf] font-semibold hover:underline">
                  {t.sectors.otomotiv.viewDetails}
                </a>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-[#261dcf] mb-3">
                  {t.home.productsList.sogukHaddelenmisSac}
                </h3>
                <p className="text-gray-700 mb-4">
                  Applications requiring precision production with precise tolerances and excellent surface quality.
                </p>
                <a href={getPathWithLocale('/urunler/soguk-haddelenmis-sac', locale)} className="text-[#261dcf] font-semibold hover:underline">
                  {t.sectors.otomotiv.viewDetails}
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
            alt={t.sectors.dayanikliTuketim.ctaTitle}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#261dcf]/80"></div>
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t.sectors.dayanikliTuketim.ctaTitle}
            </h2>
            <p className="text-xl mb-8 text-gray-100">
              {t.sectors.dayanikliTuketim.ctaDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={getPathWithLocale('/iletisim', locale)} className="px-8 py-4 bg-white text-[#261dcf] font-bold rounded-lg hover:bg-gray-100 transition-colors">
                {t.common.contact}
              </a>
              <a href={getPathWithLocale('/teklif-al', locale)} className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors">
                {t.common.getQuote}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

