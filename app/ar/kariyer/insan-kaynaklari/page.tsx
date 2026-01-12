'use client';

import { useTranslations } from '@/lib/i18n/hooks';
import { getPathWithLocale } from '@/lib/i18n/translations';

export default function InsanKaynaklariPage() {
  const { t, locale } = useTranslations();

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 lg:py-40 overflow-hidden text-white">
        <div className="absolute inset-0">
          <img 
            src="https://placehold.co/1200x400/261dcf/ffffff?text=Human+Resources" 
            alt={t.career.insanKaynaklari.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#261dcf]/90 to-[#1a1a5e]/90"></div>
        </div>
        <div className="relative container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-3xl">
            {t.career.insanKaynaklari.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl">
            {t.career.insanKaynaklari.subtitle}
          </p>
        </div>
      </section>

      {/* İK Politikamız */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#261dcf] mb-8 text-center">
              {t.career.insanKaynaklari.policyTitle}
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p>
                {t.career.insanKaynaklari.policyText1}
              </p>
              <p>
                {t.career.insanKaynaklari.policyText2}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Süreçler */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#261dcf] mb-12 text-center">
              {t.career.insanKaynaklari.processTitle}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-[#261dcf] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold text-[#261dcf] mb-3">
                  {t.career.insanKaynaklari.step1}
                </h3>
                <p className="text-gray-700">
                  {t.career.insanKaynaklari.step1Desc}
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-[#261dcf] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold text-[#261dcf] mb-3">
                  {t.career.insanKaynaklari.step2}
                </h3>
                <p className="text-gray-700">
                  {t.career.insanKaynaklari.step2Desc}
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-[#261dcf] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold text-[#261dcf] mb-3">
                  {t.career.insanKaynaklari.step3}
                </h3>
                <p className="text-gray-700">
                  {t.career.insanKaynaklari.step3Desc}
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-[#261dcf] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  4
                </div>
                <h3 className="text-xl font-bold text-[#261dcf] mb-3">
                  {t.career.insanKaynaklari.step4}
                </h3>
                <p className="text-gray-700">
                  {t.career.insanKaynaklari.step4Desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* İş Başvuru Formu */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#261dcf] mb-8 text-center">
              {t.career.insanKaynaklari.formTitle}
            </h2>
            <p className="text-gray-700 text-center mb-8">
              {t.career.insanKaynaklari.formText}
            </p>
            
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <a href={getPathWithLocale('/kariyer/basvuru', locale)} className="block w-full px-8 py-4 bg-[#261dcf] text-white font-bold rounded-lg hover:bg-[#1a16a8] transition-colors text-center">
                {t.career.insanKaynaklari.goToForm}
              </a>
              <p className="text-sm text-gray-600 text-center mt-4">
                {t.career.insanKaynaklari.formDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* İletişim */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#261dcf] mb-8 text-center">
              {t.career.insanKaynaklari.contactTitle}
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#261dcf]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#261dcf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">{t.career.insanKaynaklari.email}</h3>
                    <a href="mailto:ik@metalxsteel.com" className="text-[#261dcf] hover:underline block">
                      ik@metalxsteel.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#261dcf]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#261dcf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">{t.career.insanKaynaklari.phone}</h3>
                    <a href="tel:+902123456789" className="text-[#261dcf] hover:underline block">
                      +90 (212) 345 67 89
                    </a>
                  </div>
                </div>
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
              {t.career.insanKaynaklari.ctaTitle}
            </h2>
            <p className="text-xl mb-8 text-gray-100">
              {t.career.insanKaynaklari.ctaText}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={getPathWithLocale('/kariyer/basvuru', locale)} className="px-8 py-4 bg-white text-[#261dcf] font-bold rounded-lg hover:bg-gray-100 transition-colors">
                {t.career.insanKaynaklari.apply}
              </a>
              <a href={getPathWithLocale('/iletisim', locale)} className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors">
                {t.common.contact}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

