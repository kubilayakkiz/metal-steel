'use client';

import { useTranslations, useLocale } from '@/lib/i18n/hooks';
import { getPathWithLocale } from '@/lib/i18n/translations';

export default function ZAMDetayPage() {
  const { t, locale } = useTranslations();
  
  return (
    <div className="w-full">
      <section className="relative py-20 md:py-32 lg:py-40 overflow-hidden bg-gradient-to-br from-[#261dcf] to-[#1a1a5e] text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-3xl">
            ZAM – Min 25 Years High Corrosion Resistance
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl">
            Superior corrosion protection with Zinc + Aluminum + Magnesium alloy
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#261dcf] mb-6">
              About the Product
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                ZAM (Zinc-Aluminum-Magnesium) coated steel sheet is a superior coating technology 
                that provides advanced corrosion protection. This coating, consisting of zinc, aluminum 
                and magnesium alloy, offers minimum 25 years of high corrosion resistance.
              </p>
              <p>
                Our ZAM coated sheet products are preferred especially in challenging environmental 
                conditions and long-lasting applications. They are widely used in automotive, construction, 
                agricultural machinery and general industrial applications.
              </p>
              <p>
                <strong>Alloy Composition:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Zinc (Zn): Main protection element</li>
                <li>Aluminum (Al): Corrosion resistance and surface stability</li>
                <li>Magnesium (Mg): Enhanced corrosion protection and cut edge protection</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#261dcf] mb-8 text-center">
              Production Limits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#261dcf] mb-4">Thickness</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#261dcf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Minimum: 0.4 mm</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#261dcf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Maximum: 3.0 mm</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#261dcf] mb-4">Coating Thickness</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#261dcf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Minimum: 100 g/m²</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#261dcf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Maximum: 350 g/m²</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#261dcf] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Would You Like to Get a Quote?
            </h2>
            <p className="text-xl mb-8 text-gray-100">
              Contact us for detailed information and quotes about our ZAM coated sheet products.
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

