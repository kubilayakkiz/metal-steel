'use client';

import { useTranslations } from '@/lib/i18n/hooks';
import { getPathWithLocale } from '@/lib/i18n/translations';

export default function HakkimizdaPageEN() {
  const { t, locale } = useTranslations();

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/hakkimizda.jpg" 
            alt={t.corporate.hakkimizda.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#261dcf]/90 via-[#261dcf]/80 to-[#261dcf]/70"></div>
        </div>
        
        <div className="relative container mx-auto px-4 text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-3xl">
            {t.corporate.hakkimizda.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl">
            {t.corporate.hakkimizda.subtitle}
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
                  {t.corporate.hakkimizda.missionTitle}
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                  <p>{t.corporate.hakkimizda.missionText1}</p>
                  <p>{t.corporate.hakkimizda.missionText2}</p>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg relative">
                <img 
                  src="/mission.jpg" 
                  alt={t.corporate.hakkimizda.missionTitle}
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
                  alt={t.corporate.hakkimizda.visionTitle}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#261dcf]/30"></div>
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl md:text-4xl font-bold text-[#261dcf] mb-6">
                  {t.corporate.hakkimizda.visionTitle}
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                  <p>{t.corporate.hakkimizda.visionText1}</p>
                  <p>{t.corporate.hakkimizda.visionText2}</p>
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
              {t.corporate.hakkimizda.valuesTitle}
            </h2>
            <div className="mb-8 rounded-lg overflow-hidden shadow-lg relative">
              <img 
                src="/values.jpg" 
                alt={t.corporate.hakkimizda.valuesTitle}
                className="w-full h-[250px] md:h-[300px] object-cover"
              />
              <div className="absolute inset-0 bg-[#261dcf]/30"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#261dcf] mb-3">{t.corporate.hakkimizda.quality}</h3>
                <p className="text-gray-700">
                  {t.corporate.hakkimizda.qualityDesc}
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#261dcf] mb-3">{t.corporate.hakkimizda.innovation}</h3>
                <p className="text-gray-700">
                  {t.corporate.hakkimizda.innovationDesc}
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#261dcf] mb-3">{t.corporate.hakkimizda.customerFocus}</h3>
                <p className="text-gray-700">
                  {t.corporate.hakkimizda.customerDesc}
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#261dcf] mb-3">{t.corporate.hakkimizda.sustainability}</h3>
                <p className="text-gray-700">
                  {t.corporate.hakkimizda.sustainabilityDesc}
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
            alt="Contact Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#261dcf]/80"></div>
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Contact Us
            </h2>
            <p className="text-xl mb-8 text-gray-100">
              Contact us to learn more about us or to explore collaboration opportunities.
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

