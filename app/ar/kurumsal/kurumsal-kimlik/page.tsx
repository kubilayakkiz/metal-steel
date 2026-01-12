'use client';

import { useTranslations } from '@/lib/i18n/hooks';
import { getPathWithLocale } from '@/lib/i18n/translations';

export default function KurumsalKimlikPage() {
  const { t, locale } = useTranslations();

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 lg:py-40 overflow-hidden bg-gradient-to-br from-[#261dcf] to-[#1a1a5e] text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-3xl">
            {t.corporate.kurumsalKimlik.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl">
            {t.corporate.kurumsalKimlik.subtitle}
          </p>
        </div>
      </section>

      {/* Logo */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#261dcf] mb-8 text-center">
              {t.corporate.kurumsalKimlik.logoTitle}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-[#261dcf] mb-4">{t.corporate.kurumsalKimlik.darkBackground}</h3>
                <div className="bg-[#261dcf] p-6 rounded-lg flex items-center justify-center">
                  <img 
                    src="/LogoMetalSteelWhite.png" 
                    alt="Metal X Endüstriyel San. ve Tic. LTD. ŞTİ. Logo - White"
                    className="h-20 w-auto"
                  />
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  {t.corporate.kurumsalKimlik.darkBackgroundDesc}
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-[#261dcf] mb-4">{t.corporate.kurumsalKimlik.lightBackground}</h3>
                <div className="bg-white border-2 border-gray-200 p-6 rounded-lg flex items-center justify-center">
                  <img 
                    src="/LogoMetalSteel.png" 
                    alt="Metal X Endüstriyel San. ve Tic. LTD. ŞTİ. Logo"
                    className="h-20 w-auto"
                  />
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  {t.corporate.kurumsalKimlik.lightBackgroundDesc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Renk Paleti */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://placehold.co/1200x400/261dcf/ffffff?text=Color+Palette" 
                alt={t.corporate.kurumsalKimlik.colorPaletteTitle}
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#261dcf] mb-8 text-center">
              {t.corporate.kurumsalKimlik.colorPaletteTitle}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#261dcf] mb-4">{t.corporate.kurumsalKimlik.primaryColor}</h3>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-24 h-24 bg-[#261dcf] rounded-lg shadow-md"></div>
                  <div>
                    <p className="font-semibold text-gray-700">#261dcf</p>
                    <p className="text-sm text-gray-600">RGB: 38, 29, 207</p>
                    <p className="text-sm text-gray-600">CMYK: 82, 86, 0, 19</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm">
                  {t.corporate.kurumsalKimlik.primaryColorDesc}
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#261dcf] mb-4">{t.corporate.kurumsalKimlik.accentColor}</h3>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-24 h-24 bg-[#6dd5fb] rounded-lg shadow-md"></div>
                  <div>
                    <p className="font-semibold text-gray-700">#6dd5fb</p>
                    <p className="text-sm text-gray-600">RGB: 109, 213, 251</p>
                    <p className="text-sm text-gray-600">CMYK: 57, 15, 0, 2</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm">
                  {t.corporate.kurumsalKimlik.accentColorDesc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tipografi */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://placehold.co/1200x400/261dcf/ffffff?text=Typography" 
                alt={t.corporate.kurumsalKimlik.typographyTitle}
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#261dcf] mb-8 text-center">
              {t.corporate.kurumsalKimlik.typographyTitle}
            </h2>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#261dcf] mb-4">{t.corporate.kurumsalKimlik.mainFont}</h3>
                <p className="text-2xl mb-2" style={{ fontFamily: 'Proxima Nova, sans-serif' }}>
                  Proxima Nova
                </p>
                <p className="text-gray-700 text-sm">
                  {t.corporate.kurumsalKimlik.mainFontDesc}
                </p>
                <div className="mt-4 space-y-2">
                  <p className="text-sm text-gray-600">
                    <strong>{t.corporate.kurumsalKimlik.light}</strong>
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>{t.corporate.kurumsalKimlik.regular}</strong>
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>{t.corporate.kurumsalKimlik.bold}</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kurumsal Değerler */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#261dcf] mb-8 text-center">
              {t.corporate.kurumsalKimlik.brandValuesTitle}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-[#261dcf] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[#261dcf] mb-2">{t.corporate.kurumsalKimlik.reliability}</h3>
                <p className="text-gray-600 text-sm">
                  {t.corporate.kurumsalKimlik.reliabilityDesc}
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-[#261dcf] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[#261dcf] mb-2">{t.corporate.kurumsalKimlik.innovation}</h3>
                <p className="text-gray-600 text-sm">
                  {t.corporate.kurumsalKimlik.innovationDesc}
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-[#261dcf] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[#261dcf] mb-2">{t.corporate.kurumsalKimlik.sustainability}</h3>
                <p className="text-gray-600 text-sm">
                  {t.corporate.kurumsalKimlik.sustainabilityDesc}
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
            alt={t.common.contactUs}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#261dcf]/80"></div>
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t.corporate.kurumsalKimlik.contactUsTitle}
            </h2>
            <p className="text-xl mb-8 text-gray-100">
              {t.corporate.kurumsalKimlik.contactUsText}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={getPathWithLocale('/iletisim', locale)} className="px-8 py-4 bg-white text-[#261dcf] font-bold rounded-lg hover:bg-gray-100 transition-colors">
                {t.common.contact}
              </a>
              <a href={getPathWithLocale('/teklif-al', locale)} className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors">
                {t.corporate.kurumsalKimlik.getQuote}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

