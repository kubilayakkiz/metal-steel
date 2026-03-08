import Link from 'next/link';
import type { ProductCategory } from '@/lib/productCategories';
import { getPathWithLocale } from '@/lib/i18n/translations';
import type { Locale } from '@/lib/i18n/translations';

interface ProductCategoryPageProps {
  category: ProductCategory;
  heroImage?: string;
  locale?: Locale;
}

const defaultHeroImage = '/urunler.jpg';

export default function ProductCategoryPage({ category, heroImage = defaultHeroImage, locale = 'tr' }: ProductCategoryPageProps) {
  const path = (p: string) => getPathWithLocale(p, locale);
  const productName = (p: { nameTr: string; nameEn?: string }) => (locale === 'en' && p.nameEn ? p.nameEn : p.nameTr);
  const categoryName = locale === 'en' && category.nameEn ? category.nameEn : category.nameTr;
  const categoryDesc = category.description;

  return (
    <div className="w-full min-h-screen">
      {/* Hero Section - Full width */}
      <section className="relative py-24 md:py-36 lg:py-48 overflow-hidden text-white">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt={categoryName}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#3d4f5f]/90 to-[#1a1a5e]/90" />
        </div>
        <div className="relative w-full px-6 md:px-10 lg:px-16 xl:px-24">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 max-w-4xl">
            {categoryName}
          </h1>
          {categoryDesc && (
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-100 max-w-3xl">
              {categoryDesc}
            </p>
          )}
        </div>
      </section>

      {/* Ürünler Listesi - Full width */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="w-full px-6 md:px-10 lg:px-16 xl:px-24">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#3d4f5f] text-center mb-12 md:mb-16">
            Ürünler
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {category.products.map((product) => (
              <Link
                key={product.slug}
                href={path(`/urunler/${product.slug}`)}
                className="group block bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 hover:border-[#3d4f5f]/20"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                  <img
                    src={product.image || '/urunler.jpg'}
                    alt={productName(product)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-[#3d4f5f] group-hover:text-[#1a1a5e] transition-colors line-clamp-2">
                    {productName(product)}
                  </h3>
                  <p className="text-sm text-gray-500 mt-2 flex items-center gap-1 group-hover:text-[#3d4f5f] transition-colors">
                    Detaylı bilgi
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Full width */}
      <section className="py-16 md:py-24 lg:py-32 bg-gray-50">
        <div className="w-full px-6 md:px-10 lg:px-16 xl:px-24 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#3d4f5f] mb-4">
            Teklif veya bilgi almak ister misiniz?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            {categoryName} ürünlerimiz hakkında detaylı bilgi ve teklif için bizimle iletişime geçin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={path('/teklif-al')}
              className="px-8 py-4 bg-[#3d4f5f] text-white font-bold rounded-lg hover:bg-[#1a1a5e] transition-colors"
            >
              Teklif Al
            </a>
            <a
              href={path('/iletisim')}
              className="px-8 py-4 bg-transparent border-2 border-[#3d4f5f] text-[#3d4f5f] font-bold rounded-lg hover:bg-[#3d4f5f]/10 transition-colors"
            >
              İletişime Geç
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
