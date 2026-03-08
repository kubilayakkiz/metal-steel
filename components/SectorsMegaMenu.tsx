'use client';

import { useTranslations } from '@/lib/i18n/hooks';
import { getPathWithLocale } from '@/lib/i18n/translations';
import type { Locale } from '@/lib/i18n/translations';

interface SectorsMegaMenuProps {
  locale: Locale;
  isOpen: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const sectors = [
  { slug: 'otomotiv', image: '/otomotiv.jpg' },
  { slug: 'dayanikli-tuketim', image: '/dayaniklituketim.jpg' },
  { slug: 'enerji', image: '/enerji.jpeg' },
  { slug: 'insaat', image: '/insaat.jpg' },
  { slug: 'makine-ve-ekipman', image: '/makinaekipman.jpg' },
  { slug: 'ambalaj', image: '/ambalaj.jpg' },
];

export default function SectorsMegaMenu({ locale, isOpen, onMouseEnter, onMouseLeave }: SectorsMegaMenuProps) {
  const { t } = useTranslations();

  if (!isOpen) return null;

  const sectorNames: Record<string, string> = {
    'otomotiv': t.home.sectorsList.otomotiv || 'Otomotiv',
    'dayanikli-tuketim': t.home.sectorsList.dayanikliTuketim || 'Dayanıklı Tüketim',
    'enerji': t.home.sectorsList.enerji || 'Enerji',
    'insaat': t.home.sectorsList.insaat || 'İnşaat',
    'makine-ve-ekipman': t.home.sectorsList.makineEkipman || 'Makine ve Ekipman',
    'ambalaj': t.home.sectorsList.ambalaj || 'Ambalaj',
  };

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
              {t.common.sectors || 'Sektörler'}
            </h3>
            <a
              href={getPathWithLocale('/sektorler/otomotiv', locale)}
              className="text-sm font-semibold text-[#3d4f5f] hover:text-[#1a1a5e] transition-colors flex items-center gap-1"
            >
              {locale === 'en' ? 'View all sectors' : 'Tüm sektörleri gör'}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {sectors.map((sector) => (
              <a
                key={sector.slug}
                href={getPathWithLocale(`/sektorler/${sector.slug}`, locale)}
                className="group flex flex-col items-center text-center p-4 rounded-xl hover:bg-gray-50 transition-colors"
              >
                <div className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden bg-[#3d4f5f]/10 mb-3">
                  <img
                    src={sector.image}
                    alt=""
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h4 className="font-bold text-[#3d4f5f] text-sm md:text-base group-hover:text-[#1a1a5e] transition-colors">
                  {sectorNames[sector.slug]}
                </h4>
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
