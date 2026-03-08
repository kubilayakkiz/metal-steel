'use client';

import { useTranslations } from '@/lib/i18n/hooks';
import { getPathWithLocale } from '@/lib/i18n/translations';
import { productCategories } from '@/lib/productCategories';
import type { Locale } from '@/lib/i18n/translations';

interface ProductsMegaMenuProps {
  locale: Locale;
  isOpen: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export default function ProductsMegaMenu({ locale, isOpen, onMouseEnter, onMouseLeave }: ProductsMegaMenuProps) {
  const { t } = useTranslations();
  const categoryName = (cat: { nameTr: string; nameEn?: string }) =>
    locale === 'en' && cat.nameEn ? cat.nameEn : cat.nameTr;
  const productName = (p: { nameTr: string; nameEn?: string }) =>
    locale === 'en' && p.nameEn ? p.nameEn : p.nameTr;

  if (!isOpen) return null;

  return (
    <div
      className="absolute left-0 right-0 top-full z-[9999] animate-mega-menu"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="bg-white shadow-2xl border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-8 md:py-10">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl md:text-2xl font-bold text-[#3d4f5f]">
              {t.common.products || 'Ürünler'}
            </h3>
            <a
              href={getPathWithLocale('/urunler/yassi-celikler', locale)}
              className="text-sm font-semibold text-[#3d4f5f] hover:text-[#1a1a5e] transition-colors flex items-center gap-1"
            >
              {locale === 'en' ? 'View all products' : 'Tüm ürünleri gör'}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {productCategories.map((category) => (
              <div key={category.slug} className="group p-4 rounded-xl hover:bg-gray-50 transition-colors -m-4">
                <a
                  href={getPathWithLocale(`/urunler/${category.slug}`, locale)}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-[#3d4f5f]/10 flex items-center justify-center group-hover:bg-[#3d4f5f]/20 transition-colors overflow-hidden">
                    {category.products[0]?.image ? (
                      <img
                        src={category.products[0].image}
                        alt=""
                        className="w-full h-full object-cover opacity-80"
                      />
                    ) : (
                      <svg className="w-7 h-7 text-[#3d4f5f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-[#3d4f5f] text-lg mb-1 group-hover:text-[#1a1a5e] transition-colors">
                      {categoryName(category)}
                    </h4>
                    {category.description && (
                      <p className="text-sm text-gray-500 line-clamp-2 mb-3">
                        {category.description}
                      </p>
                    )}
                  </div>
                </a>
                <div className="space-y-1.5 mt-2">
                  {category.products.slice(0, 5).map((product) => (
                    <a
                      key={product.slug}
                      href={getPathWithLocale(`/urunler/${product.slug}`, locale)}
                      className="block text-sm text-gray-600 hover:text-[#3d4f5f] hover:translate-x-1 transition-all duration-150 py-0.5"
                    >
                      <span className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-[#3d4f5f]/40 group-hover:bg-[#3d4f5f] transition-colors flex-shrink-0" />
                        {productName(product)}
                      </span>
                    </a>
                  ))}
                  {category.products.length > 5 && (
                    <a
                      href={getPathWithLocale(`/urunler/${category.slug}`, locale)}
                      className="inline-flex items-center gap-1 text-sm font-medium text-[#3d4f5f] hover:text-[#1a1a5e] mt-2"
                    >
                      +{category.products.length - 5} {locale === 'en' ? 'more' : 'daha'}
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t border-gray-100 flex flex-wrap gap-4 justify-center">
            <a
              href={getPathWithLocale('/teklif-al', locale)}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#3d4f5f] text-white text-sm font-semibold rounded-lg hover:bg-[#1a1a5e] transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              {t.common.getQuote || 'Teklif Al'}
            </a>
            <a
              href={getPathWithLocale('/iletisim', locale)}
              className="inline-flex items-center gap-2 px-4 py-2 border-2 border-[#3d4f5f] text-[#3d4f5f] text-sm font-semibold rounded-lg hover:bg-[#3d4f5f]/5 transition-colors"
            >
              {t.common.contact || 'İletişim'}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
