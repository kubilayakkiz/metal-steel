'use client';

import { useTranslations } from '@/lib/i18n/hooks';
import { getPathWithLocale } from '@/lib/i18n/translations';
import type { Locale } from '@/lib/i18n/translations';

interface ServicesMegaMenuProps {
  locale: Locale;
  isOpen: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const services = [
  { slug: 'celik-servis-hizmetleri', image: '/celikservis2.jpg' },
  { slug: 'musteri-teknik-hizmetleri', image: '/musteriservis2.jpg' },
];

export default function ServicesMegaMenu({ locale, isOpen, onMouseEnter, onMouseLeave }: ServicesMegaMenuProps) {
  const { t } = useTranslations();

  if (!isOpen) return null;

  const serviceNames = {
    'celik-servis-hizmetleri': t.home.servicesList.celikServis || 'Çelik Servis Hizmetleri',
    'musteri-teknik-hizmetleri': t.home.servicesList.musteriTeknik || 'Müşteri Teknik Hizmetleri',
  };

  return (
    <div
      className="absolute left-0 right-0 top-full z-[9999] animate-mega-menu"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="bg-white shadow-2xl border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-8 md:py-10">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl md:text-2xl font-bold text-[#3d4f5f]">
              {t.common.services || 'Hizmetler'}
            </h3>
            <a
              href={getPathWithLocale('/hizmetler/celik-servis-hizmetleri', locale)}
              className="text-sm font-semibold text-[#3d4f5f] hover:text-[#1a1a5e] transition-colors flex items-center gap-1"
            >
              {locale === 'en' ? 'View all services' : 'Tüm hizmetleri gör'}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <a
                key={service.slug}
                href={getPathWithLocale(`/hizmetler/${service.slug}`, locale)}
                className="group flex items-center gap-6 p-6 rounded-xl hover:bg-gray-50 transition-colors border border-gray-100 hover:border-[#3d4f5f]/20"
              >
                <div className="flex-shrink-0 w-24 h-24 rounded-xl overflow-hidden bg-[#3d4f5f]/10">
                  <img
                    src={service.image}
                    alt=""
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-[#3d4f5f] text-lg group-hover:text-[#1a1a5e] transition-colors">
                    {serviceNames[service.slug as keyof typeof serviceNames]}
                  </h4>
                  <p className="text-sm text-gray-500 mt-1 flex items-center gap-1">
                    {locale === 'en' ? 'Learn more' : 'Detaylı bilgi'}
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </p>
                </div>
              </a>
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
