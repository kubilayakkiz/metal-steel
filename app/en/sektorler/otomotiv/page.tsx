'use client';

import { useTranslations } from '@/lib/i18n/hooks';
import { getPathWithLocale } from '@/lib/i18n/translations';

export default function OtomotivPageEN() {
  const { t, locale } = useTranslations();

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/otomotiv.jpg" 
            alt={t.sectors.otomotiv.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#261dcf]/90 via-[#261dcf]/80 to-[#261dcf]/70"></div>
        </div>
        
        <div className="relative container mx-auto px-4 text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-3xl">
            {t.sectors.otomotiv.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl">
            {t.sectors.otomotiv.subtitle}
          </p>
        </div>
      </section>

      {/* Açıklama */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#261dcf] mb-6">
              {t.sectors.otomotiv.aboutTitle}
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>{t.sectors.otomotiv.aboutText1}</p>
              <p>{t.sectors.otomotiv.aboutText2}</p>
              <p>{t.sectors.otomotiv.aboutText3}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hizmet Alanları */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#261dcf] mb-8 text-center">
              {t.sectors.otomotiv.serviceAreasTitle}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#261dcf] mb-3">
                  {t.sectors.otomotiv.bodywork}
                </h3>
                <p className="text-gray-700">
                  {t.sectors.otomotiv.bodyworkDesc}
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#261dcf] mb-3">
                  {t.sectors.otomotiv.safetyComponents}
                </h3>
                <p className="text-gray-700">
                  {t.sectors.otomotiv.safetyDesc}
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#261dcf] mb-3">
                  {t.sectors.otomotiv.engineComponents}
                </h3>
                <p className="text-gray-700">
                  {t.sectors.otomotiv.engineDesc}
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#261dcf] mb-3">
                  {t.sectors.otomotiv.suspension}
                </h3>
                <p className="text-gray-700">
                  {t.sectors.otomotiv.suspensionDesc}
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#261dcf] mb-3">
                  {t.sectors.otomotiv.electricVehicles}
                </h3>
                <p className="text-gray-700">
                  {t.sectors.otomotiv.electricDesc}
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#261dcf] mb-3">
                  {t.sectors.otomotiv.technicalConsulting}
                </h3>
                <p className="text-gray-700">
                  {t.sectors.otomotiv.consultingDesc}
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
              {t.sectors.otomotiv.advantagesTitle}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#261dcf]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#261dcf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{t.sectors.otomotiv.durability}</h3>
                  <p className="text-gray-700">
                    {t.sectors.otomotiv.durabilityDesc}
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
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{t.sectors.otomotiv.lightness}</h3>
                  <p className="text-gray-700">
                    {t.sectors.otomotiv.lightnessDesc}
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
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{t.sectors.otomotiv.safety}</h3>
                  <p className="text-gray-700">
                    {t.sectors.otomotiv.safetyDesc}
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
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{t.sectors.otomotiv.recycling}</h3>
                  <p className="text-gray-700">
                    {t.sectors.otomotiv.recyclingDesc}
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
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{t.sectors.otomotiv.costEffectiveness}</h3>
                  <p className="text-gray-700">
                    {t.sectors.otomotiv.costDesc}
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
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{t.sectors.otomotiv.customizability}</h3>
                  <p className="text-gray-700">
                    {t.sectors.otomotiv.customDesc}
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
              {t.sectors.otomotiv.relatedProductsTitle}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-[#261dcf] mb-3">
                  {t.sectors.otomotiv.hotRolled}
                </h3>
                <p className="text-gray-700 mb-4">
                  {t.sectors.otomotiv.hotRolledDesc}
                </p>
                <a href={getPathWithLocale('/urunler/sicak-haddelenmis-sac', locale)} className="text-[#261dcf] font-semibold hover:underline">
                  {t.sectors.otomotiv.viewDetails}
                </a>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-[#261dcf] mb-3">
                  {t.sectors.otomotiv.coldRolled}
                </h3>
                <p className="text-gray-700 mb-4">
                  {t.sectors.otomotiv.coldRolledDesc}
                </p>
                <a href={getPathWithLocale('/urunler/soguk-haddelenmis-sac', locale)} className="text-[#261dcf] font-semibold hover:underline">
                  {t.sectors.otomotiv.viewDetails}
                </a>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-[#261dcf] mb-3">
                  {t.sectors.otomotiv.galvanized}
                </h3>
                <p className="text-gray-700 mb-4">
                  {t.sectors.otomotiv.galvanizedDesc}
                </p>
                <a href={getPathWithLocale('/urunler/galvanizli-sac', locale)} className="text-[#261dcf] font-semibold hover:underline">
                  {t.sectors.otomotiv.viewDetails}
                </a>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-[#261dcf] mb-3">
                  {t.sectors.otomotiv.highStrength}
                </h3>
                <p className="text-gray-700 mb-4">
                  {t.sectors.otomotiv.highStrengthDesc}
                </p>
                <a href={getPathWithLocale('/urunler/sicak-haddelenmis-sac', locale)} className="text-[#261dcf] font-semibold hover:underline">
                  {t.sectors.otomotiv.viewDetails}
                </a>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-[#261dcf] mb-3">
                  {t.sectors.otomotiv.specialAlloy}
                </h3>
                <p className="text-gray-700 mb-4">
                  {t.sectors.otomotiv.specialAlloyDesc}
                </p>
                <a href={getPathWithLocale('/urunler/zam', locale)} className="text-[#261dcf] font-semibold hover:underline">
                  {t.sectors.otomotiv.viewDetails}
                </a>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-[#261dcf] mb-3">
                  {t.sectors.otomotiv.technicalConsultingService}
                </h3>
                <p className="text-gray-700 mb-4">
                  {t.sectors.otomotiv.technicalConsultingDesc}
                </p>
                <a href={getPathWithLocale('/iletisim', locale)} className="text-[#261dcf] font-semibold hover:underline">
                  {t.sectors.otomotiv.contactUs}
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
            alt={t.sectors.otomotiv.ctaTitle}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#261dcf]/80"></div>
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t.sectors.otomotiv.ctaTitle}
            </h2>
            <p className="text-xl mb-8 text-gray-100">
              {t.sectors.otomotiv.ctaDescription}
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

