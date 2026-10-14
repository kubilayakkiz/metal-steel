'use client';

import { useTranslations } from '@/lib/i18n/hooks';
import { getPathWithLocale } from '@/lib/i18n/translations';
import ProductSectionWithImage from '@/components/ProductSectionWithImage';
import { getFlatSteelProduct } from '@/lib/flatSteelProducts';

export default function FlatSteelProductPage({ slug }: { slug: string }) {
  const { locale } = useTranslations();
  const product = getFlatSteelProduct(slug);
  if (!product) return null;

  const copy = locale === 'tr' ? product.tr : product.en;
  const L = copy.labels;
  const path = (p: string) => getPathWithLocale(p, locale);
  const specTitle = (key: typeof product.specs[number]['titleKey']) => L[key];

  return (
    <div className="w-full">
      <section className="relative py-20 md:py-32 lg:py-40 overflow-hidden text-white">
        <div className="absolute inset-0">
          <img src={product.image} alt={copy.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#3d4f5f]/90 to-[#1a1a5e]/90" />
        </div>
        <div className="relative container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-3xl">{copy.title}</h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl">{copy.subtitle}</p>
        </div>
      </section>

      <ProductSectionWithImage src={product.image} alt={copy.title} imagePosition="left">
        <h2 className="text-3xl md:text-4xl font-bold text-[#3d4f5f] mb-6">{L.about}</h2>
        <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
          {copy.about.map((p) => (
            <p key={p.slice(0, 40)}>{p}</p>
          ))}
        </div>
      </ProductSectionWithImage>

      <ProductSectionWithImage src={product.image} alt={copy.title} imagePosition="right" bgColor="gray">
        <h2 className="text-3xl md:text-4xl font-bold text-[#3d4f5f] mb-8">{L.limits}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {product.specs.map((group) => (
            <div key={group.titleKey} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-[#3d4f5f] mb-4">{specTitle(group.titleKey)}</h3>
              <ul className="space-y-2 text-gray-700">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#3d4f5f] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </ProductSectionWithImage>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#3d4f5f] mb-3">{L.features}</h3>
              <ul className="space-y-2 text-gray-700">
                {copy.features.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#3d4f5f] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#3d4f5f] mb-3">{L.standards}</h3>
              <ul className="space-y-2 text-gray-700">
                {copy.standards.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#3d4f5f] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#3d4f5f] mb-3">{L.applications}</h3>
              <ul className="space-y-2 text-gray-700">
                {copy.applications.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#3d4f5f] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {product.related.length > 0 && (
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-[#3d4f5f] mb-6 text-center">{L.related}</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {product.related.map((rel) => (
                <a
                  key={rel.slug}
                  href={path(`/urunler/${rel.slug}`)}
                  className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-[#3d4f5f] font-medium hover:border-[#3d4f5f] hover:shadow-sm transition-all"
                >
                  {locale === 'tr' ? rel.nameTr : rel.nameEn}
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="relative py-16 md:py-24 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img src="/bizimleiletisimegecin.jpg" alt={L.contact} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#3d4f5f]/80" />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{L.contact}</h2>
            <p className="text-xl mb-8 text-gray-100">{copy.cta}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={path('/iletisim')} className="px-8 py-4 bg-white text-[#3d4f5f] font-bold rounded-lg hover:bg-gray-100 transition-colors">
                {L.contact}
              </a>
              <a href={path('/teklif-al')} className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors">
                {L.quote}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
