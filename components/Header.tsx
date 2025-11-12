'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { useTranslations, useLocale } from '@/lib/i18n/hooks';
import { getPathWithLocale } from '@/lib/i18n/translations';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mouseLeaveTimeout, setMouseLeaveTimeout] = useState<NodeJS.Timeout | null>(null);
  const pathname = usePathname();
  const { t } = useTranslations();
  const locale = useLocale();
  
  // Dil isimleri
  const languages: { [key: string]: string } = {
    'tr': 'Türkçe',
    'en': 'English',
    'ar': 'العربية',
    'ru': 'Русский',
    'fr': 'Français',
  };

  const currentLanguage = languages[locale] || 'Türkçe';

  const handleDropdownToggle = (menu: string) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const handleMouseLeave = () => {
    // Timeout ile kapatma - nested menu geçişlerine izin ver
    if (mouseLeaveTimeout) {
      clearTimeout(mouseLeaveTimeout);
    }
    const timeout = setTimeout(() => {
    setOpenDropdown(null);
    }, 150);
    setMouseLeaveTimeout(timeout);
  };

  const handleMouseEnter = (menu: string) => {
    // Mouse geldiğinde timeout'u iptal et
    if (mouseLeaveTimeout) {
      clearTimeout(mouseLeaveTimeout);
      setMouseLeaveTimeout(null);
    }
    setOpenDropdown(menu);
  };

  return (
    <header className="w-full bg-[#261dcf] text-white">
      {/* Top Bar */}
      <div className="bg-[#261dcf] py-2 border-b border-[#6dd5fb]/30">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center gap-3 md:gap-6 text-xs md:text-sm">
            {/* Sol taraf - Slogan */}
            <div className="flex items-center">
              <p className="text-white text-sm md:text-base font-bold">
                {t.common.slogan || 'Endüstriyel Çeliğin Gücü'}
              </p>
            </div>

            {/* Sağ taraf - Dropdown Menüler, Sosyal Medya ve Dil Seçici */}
            <div className="flex justify-end items-center gap-3 md:gap-6">
            {/* Top Navigation Links */}
            <div className="hidden md:flex items-center gap-6">
              {/* Kariyer Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setOpenDropdown('kariyer')}
                onMouseLeave={handleMouseLeave}
              >
                <button 
                  className="flex items-center gap-1 hover:text-gray-300 transition-colors"
                  onClick={() => handleDropdownToggle('kariyer')}
                >
                  {t.common.career || 'Kariyer'}
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openDropdown === 'kariyer' && (
                  <div className="absolute top-full left-0 mt-0 pt-2 bg-[#261dcf] border border-[#6dd5fb]/30 rounded shadow-lg py-2 min-w-[200px] z-50">
                    <a href={getPathWithLocale('/kariyer/neden-metal-x', locale)} className="block px-4 py-2 hover:bg-[#6dd5fb]/20 transition-colors">
                        {t.common.why_metal_x || 'Neden Metal X Endüstriyel San. ve Tic. LTD. ŞTİ.'}
                    </a>
                    <a href={getPathWithLocale('/kariyer/insan-kaynaklari', locale)} className="block px-4 py-2 hover:bg-[#6dd5fb]/20 transition-colors">
                      {t.common.human_resources || 'İnsan Kaynakları'}
                    </a>
                    <a href={getPathWithLocale('/kariyer/basvuru', locale)} className="block px-4 py-2 hover:bg-[#6dd5fb]/20 transition-colors">
                      {t.common.application || 'Başvuru'}
                    </a>
                  </div>
                )}
              </div>

            </div>

            {/* Social Media Icons */}
            <div className="hidden lg:flex items-center gap-4 border-l border-[#6dd5fb]/30 pl-6">
              <a href="#" className="hover:text-gray-300 transition-colors" aria-label="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors" aria-label="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors" aria-label="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.47h3.047v-2.64c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.513c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385c5.737-.9 10.125-5.864 10.125-11.854z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors" aria-label="X (Twitter)">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>

            {/* Language Selector */}
            <div 
              className="relative border-l border-[#6dd5fb]/30 pl-3 md:pl-6"
              onMouseEnter={() => setOpenDropdown('language')}
              onMouseLeave={handleMouseLeave}
            >
              <button 
                className="flex items-center gap-1 hover:text-gray-300 transition-colors"
                onClick={() => handleDropdownToggle('language')}
              >
                {currentLanguage}
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openDropdown === 'language' && (
                <div className="absolute top-full right-0 mt-0 pt-2 bg-[#261dcf] border border-[#6dd5fb]/30 rounded shadow-lg py-2 min-w-[180px] z-50">
                  <a href={getPathWithLocale(pathname, 'tr')} className="block px-4 py-2 hover:bg-[#6dd5fb]/20 transition-colors">
                    Türkçe
                  </a>
                  <a href={getPathWithLocale(pathname, 'en')} className="block px-4 py-2 hover:bg-[#6dd5fb]/20 transition-colors">
                    English
                  </a>
                  <a href={getPathWithLocale(pathname, 'ar')} className="block px-4 py-2 hover:bg-[#6dd5fb]/20 transition-colors">
                    العربية
                  </a>
                  <a href={getPathWithLocale(pathname, 'ru')} className="block px-4 py-2 hover:bg-[#6dd5fb]/20 transition-colors">
                    Русский
                  </a>
                  <a href={getPathWithLocale(pathname, 'fr')} className="block px-4 py-2 hover:bg-[#6dd5fb]/20 transition-colors">
                    Français
                  </a>
                </div>
              )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="bg-[#261dcf] py-2 md:py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center pr-2 md:pr-4">
              <a href={getPathWithLocale('/', locale)} className="flex items-center">
                <img 
                  src="/LogoMetalSteelWhite.png" 
                  alt="METAL X STEEL Logo" 
                  className="h-10 md:h-12 lg:h-16 w-auto object-cover min-w-[120px] md:min-w-[180px] lg:min-w-[200px]"
                />
              </a>
            </div>

            {/* Navigation Links */}
            <nav className="hidden lg:flex items-center gap-4 xl:gap-8">
              {/* Ürünler Dropdown */}
              <div 
                className="relative urunler-dropdown-container"
                onMouseEnter={() => handleMouseEnter('urunler')}
                onMouseLeave={handleMouseLeave}
              >
                <button 
                  className="flex items-center gap-1 hover:text-gray-300 transition-colors"
                  onClick={() => handleDropdownToggle('urunler')}
                >
                  {t.common.products || 'Ürünler'}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openDropdown === 'urunler' && (
                  <div 
                    className="urunler-dropdown-container absolute top-full left-0 bg-[#261dcf] border border-[#6dd5fb]/30 rounded shadow-lg py-2 min-w-[400px] z-50"
                    onMouseEnter={() => handleMouseEnter('urunler')}
                    onMouseLeave={handleMouseLeave}
                    style={{ paddingTop: '8px' }}
                  >
                    <a href={getPathWithLocale('/urunler/zam', locale)} className="block px-4 py-2 hover:bg-[#6dd5fb]/20 transition-colors">
                      {t.home.productsList.zam || 'ZAM (Min 25 Yıl Yüksek Korozyon Dayanımı)'}
                    </a>
                    <a href={getPathWithLocale('/urunler/sicak-haddelenmis-sac', locale)} className="block px-4 py-2 hover:bg-[#6dd5fb]/20 transition-colors">
                      {t.home.productsList.sicakHaddelenmisSac || 'Sıcak Haddelenmiş Sac'}
                    </a>
                    <a href={getPathWithLocale('/urunler/galvanizli-sac', locale)} className="block px-4 py-2 hover:bg-[#6dd5fb]/20 transition-colors">
                      {t.home.productsList.galvanizliSac || 'Galvanizli Sac'}
                    </a>
                    <a href={getPathWithLocale('/urunler/boyali-sac', locale)} className="block px-4 py-2 hover:bg-[#6dd5fb]/20 transition-colors">
                      {t.home.productsList.boyaliSac || 'Boyalı Sac'}
                    </a>
                    <a href={getPathWithLocale('/urunler/soguk-haddelenmis-sac', locale)} className="block px-4 py-2 hover:bg-[#6dd5fb]/20 transition-colors">
                      {t.home.productsList.sogukHaddelenmisSac || 'Soğuk Haddelenmiş Sac'}
                    </a>
                    <a href={getPathWithLocale('/urunler/asitlenmis-sac', locale)} className="block px-4 py-2 hover:bg-[#6dd5fb]/20 transition-colors">
                      {t.home.productsList.asitlenmisSac || 'Asitlenmiş Sac'}
                    </a>
                    <a href={getPathWithLocale('/urunler/silisli-sac', locale)} className="block px-4 py-2 hover:bg-[#6dd5fb]/20 transition-colors">
                      {t.home.productsList.silisliSac || 'Silisli Sac'}
                    </a>
                    <a href={getPathWithLocale('/urunler/boru-ve-profil', locale)} className="block px-4 py-2 hover:bg-[#6dd5fb]/20 transition-colors">
                      {t.home.productsList.boruProfil || 'Boru ve Profil'}
                    </a>
                    <a href={getPathWithLocale('/urunler/insaat-demiri', locale)} className="block px-4 py-2 hover:bg-[#6dd5fb]/20 transition-colors">
                      {t.home.productsList.insaatDemiri || 'İnşaat Demiri'}
                    </a>
                  </div>
                )}
              </div>

              {/* Hizmetler Dropdown */}
              <div 
                className="relative hizmetler-dropdown-container"
                onMouseEnter={() => handleMouseEnter('hizmetler')}
                onMouseLeave={handleMouseLeave}
              >
                <button 
                  className="flex items-center gap-1 hover:text-gray-300 transition-colors"
                  onClick={() => handleDropdownToggle('hizmetler')}
                >
                      {t.common.services || 'Hizmetler'}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openDropdown === 'hizmetler' && (
                  <div 
                    className="hizmetler-dropdown-container absolute top-full left-0 bg-[#261dcf] border border-[#6dd5fb]/30 rounded shadow-lg py-2 min-w-[280px] z-50"
                    onMouseEnter={() => handleMouseEnter('hizmetler')}
                    onMouseLeave={handleMouseLeave}
                    style={{ paddingTop: '8px' }}
                  >
                    <a href={getPathWithLocale('/hizmetler/celik-servis-hizmetleri', locale)} className="block px-4 py-2 hover:bg-[#6dd5fb]/20 transition-colors">
                      {t.home.servicesList.celikServis || 'Çelik Servis Hizmetleri'}
                    </a>
                    <a href={getPathWithLocale('/hizmetler/musteri-teknik-hizmetleri', locale)} className="block px-4 py-2 hover:bg-[#6dd5fb]/20 transition-colors">
                      {t.home.servicesList.musteriTeknik || 'Müşteri Teknik Hizmetleri'}
                    </a>
                  </div>
                )}
              </div>

              {/* Sektörler Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setOpenDropdown('sektorler')}
                onMouseLeave={handleMouseLeave}
              >
                <button 
                  className="flex items-center gap-1 hover:text-gray-300 transition-colors"
                  onClick={() => handleDropdownToggle('sektorler')}
                >
                  {t.common.sectors || 'Sektörler'}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openDropdown === 'sektorler' && (
                  <div className="absolute top-full left-0 mt-0 pt-2 bg-[#261dcf] border border-[#6dd5fb]/30 rounded shadow-lg py-2 min-w-[220px] z-50">
                    <a href={getPathWithLocale('/sektorler/otomotiv', locale)} className="block px-4 py-2 hover:bg-[#6dd5fb]/20 transition-colors">
                      {t.home.sectorsList.otomotiv || 'Otomotiv'}
                    </a>
                    <a href={getPathWithLocale('/sektorler/dayanikli-tuketim', locale)} className="block px-4 py-2 hover:bg-[#6dd5fb]/20 transition-colors">
                      {t.home.sectorsList.dayanikliTuketim || 'Dayanıklı Tüketim'}
                    </a>
                    <a href={getPathWithLocale('/sektorler/enerji', locale)} className="block px-4 py-2 hover:bg-[#6dd5fb]/20 transition-colors">
                      {t.home.sectorsList.enerji || 'Enerji'}
                    </a>
                    <a href={getPathWithLocale('/sektorler/insaat', locale)} className="block px-4 py-2 hover:bg-[#6dd5fb]/20 transition-colors">
                      {t.home.sectorsList.insaat || 'İnşaat'}
                    </a>
                    <a href={getPathWithLocale('/sektorler/makine-ve-ekipman', locale)} className="block px-4 py-2 hover:bg-[#6dd5fb]/20 transition-colors">
                      {t.home.sectorsList.makineEkipman || 'Makine ve Ekipman'}
                    </a>
                    <a href={getPathWithLocale('/sektorler/ambalaj', locale)} className="block px-4 py-2 hover:bg-[#6dd5fb]/20 transition-colors">
                      {t.home.sectorsList.ambalaj || 'Ambalaj'}
                    </a>
                  </div>
                )}
              </div>

              {/* Kurumsal Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => handleMouseEnter('kurumsal')}
                onMouseLeave={handleMouseLeave}
              >
                <button 
                  className="flex items-center gap-1 hover:text-gray-300 transition-colors"
                  onClick={() => handleDropdownToggle('kurumsal')}
                >
                  {t.common.corporate || 'Kurumsal'}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openDropdown === 'kurumsal' && (
                  <div className="absolute top-full left-0 mt-0 pt-2 bg-[#261dcf] border border-[#6dd5fb]/30 rounded shadow-lg py-2 min-w-[200px] z-50">
                    <a href={getPathWithLocale('/kurumsal/hakkimizda', locale)} className="block px-4 py-2 hover:bg-[#6dd5fb]/20 transition-colors">
                      {t.common.about_us || 'Hakkımızda'}
                    </a>
                    <a href={getPathWithLocale('/kurumsal/politikalarimiz', locale)} className="block px-4 py-2 hover:bg-[#6dd5fb]/20 transition-colors">
                      {t.common.our_policies || 'Politikalarımız'}
                    </a>
                    <a href={getPathWithLocale('/kurumsal/kurumsal-kimlik', locale)} className="block px-4 py-2 hover:bg-[#6dd5fb]/20 transition-colors">
                      {t.common.corporate_identity || 'Kurumsal Kimlik'}
                    </a>
                  </div>
                )}
              </div>

              <a href={getPathWithLocale('/iletisim', locale)} className="hover:text-gray-300 transition-colors">
                {t.common.contact || 'İletişim'}
              </a>
              <button className="hover:text-gray-300 transition-colors ml-2" aria-label={t.common.search || 'Ara'}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden text-white p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-[#6dd5fb]/30 pt-4">
              <div className="flex flex-col gap-4">
                {/* Top Bar Menus */}
                <div className="border-b border-[#6dd5fb]/30 pb-3 space-y-3">
                  <div>
                    <button 
                      className="flex items-center justify-between w-full hover:text-gray-300 transition-colors text-sm"
                      onClick={() => handleDropdownToggle('kariyer-mobile')}
                    >
                      {t.common.career || 'Kariyer'}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {openDropdown === 'kariyer-mobile' && (
                      <div className="pl-4 mt-2 space-y-2">
                        <a href={getPathWithLocale('/kariyer/neden-metal-x', locale)} className="block text-gray-300 hover:text-white text-sm">{t.common.why_metal_x || 'Neden Metal X Endüstriyel San. ve Tic. LTD. ŞTİ.'}</a>
                        <a href={getPathWithLocale('/kariyer/insan-kaynaklari', locale)} className="block text-gray-300 hover:text-white text-sm">{t.common.human_resources || 'İnsan Kaynakları'}</a>
                        <a href={getPathWithLocale('/kariyer/basvuru', locale)} className="block text-gray-300 hover:text-white text-sm">{t.common.application || 'Başvuru'}</a>
                      </div>
                    )}
                  </div>
                </div>

                {/* Main Navigation */}
                <div className="space-y-3">
                  <div>
                    <button 
                      className="flex items-center justify-between w-full hover:text-gray-300 transition-colors"
                      onClick={() => handleDropdownToggle('urunler-mobile')}
                    >
                      {t.common.products || 'Ürünler'}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {openDropdown === 'urunler-mobile' && (
                      <div className="pl-4 mt-2 space-y-2">
                        <a href={getPathWithLocale('/urunler/zam', locale)} className="block text-gray-300 hover:text-white text-sm">{t.home.productsList.zam || 'ZAM (Min 25 Yıl Yüksek Korozyon Dayanımı)'}</a>
                        <a href={getPathWithLocale('/urunler/sicak-haddelenmis-sac', locale)} className="block text-gray-300 hover:text-white text-sm">{t.home.productsList.sicakHaddelenmisSac || 'Sıcak Haddelenmiş Sac'}</a>
                        <a href={getPathWithLocale('/urunler/galvanizli-sac', locale)} className="block text-gray-300 hover:text-white text-sm">{t.home.productsList.galvanizliSac || 'Galvanizli Sac'}</a>
                        <a href={getPathWithLocale('/urunler/boyali-sac', locale)} className="block text-gray-300 hover:text-white text-sm">{t.home.productsList.boyaliSac || 'Boyalı Sac'}</a>
                        <a href={getPathWithLocale('/urunler/soguk-haddelenmis-sac', locale)} className="block text-gray-300 hover:text-white text-sm">{t.home.productsList.sogukHaddelenmisSac || 'Soğuk Haddelenmiş Sac'}</a>
                        <a href={getPathWithLocale('/urunler/asitlenmis-sac', locale)} className="block text-gray-300 hover:text-white text-sm">{t.home.productsList.asitlenmisSac || 'Asitlenmiş Sac'}</a>
                        <a href={getPathWithLocale('/urunler/silisli-sac', locale)} className="block text-gray-300 hover:text-white text-sm">{t.home.productsList.silisliSac || 'Silisli Sac'}</a>
                        <a href={getPathWithLocale('/urunler/boru-ve-profil', locale)} className="block text-gray-300 hover:text-white text-sm">{t.home.productsList.boruProfil || 'Boru ve Profil'}</a>
                        <a href={getPathWithLocale('/urunler/insaat-demiri', locale)} className="block text-gray-300 hover:text-white text-sm">{t.home.productsList.insaatDemiri || 'İnşaat Demiri'}</a>
                      </div>
                    )}
                  </div>
                  <div>
                    <button 
                      className="flex items-center justify-between w-full hover:text-gray-300 transition-colors"
                      onClick={() => handleDropdownToggle('hizmetler-mobile')}
                    >
                      {t.common.services || 'Hizmetler'}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {openDropdown === 'hizmetler-mobile' && (
                      <div className="pl-4 mt-2 space-y-2">
                        <a href={getPathWithLocale('/hizmetler/celik-servis-hizmetleri', locale)} className="block text-gray-300 hover:text-white text-sm">{t.home.servicesList.celikServis || 'Çelik Servis Hizmetleri'}</a>
                        <a href={getPathWithLocale('/hizmetler/musteri-teknik-hizmetleri', locale)} className="block text-gray-300 hover:text-white text-sm">{t.home.servicesList.musteriTeknik || 'Müşteri Teknik Hizmetleri'}</a>
                      </div>
                    )}
                  </div>
                <div>
                  <button 
                    className="flex items-center justify-between w-full hover:text-gray-300 transition-colors"
                    onClick={() => handleDropdownToggle('sektorler-mobile')}
                  >
                    {t.common.sectors || 'Sektörler'}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openDropdown === 'sektorler-mobile' && (
                    <div className="pl-4 mt-2 space-y-2">
                            <a href={getPathWithLocale('/sektorler/otomotiv', locale)} className="block text-gray-300 hover:text-white">{t.home.sectorsList.otomotiv || 'Otomotiv'}</a>
                            <a href={getPathWithLocale('/sektorler/dayanikli-tuketim', locale)} className="block text-gray-300 hover:text-white">{t.home.sectorsList.dayanikliTuketim || 'Dayanıklı Tüketim'}</a>
                            <a href={getPathWithLocale('/sektorler/enerji', locale)} className="block text-gray-300 hover:text-white">{t.home.sectorsList.enerji || 'Enerji'}</a>
                            <a href={getPathWithLocale('/sektorler/insaat', locale)} className="block text-gray-300 hover:text-white">{t.home.sectorsList.insaat || 'İnşaat'}</a>
                            <a href={getPathWithLocale('/sektorler/makine-ve-ekipman', locale)} className="block text-gray-300 hover:text-white">{t.home.sectorsList.makineEkipman || 'Makine ve Ekipman'}</a>
                            <a href={getPathWithLocale('/sektorler/ambalaj', locale)} className="block text-gray-300 hover:text-white">{t.home.sectorsList.ambalaj || 'Ambalaj'}</a>
                    </div>
                  )}
                </div>
                  <div>
                    <button 
                      className="flex items-center justify-between w-full hover:text-gray-300 transition-colors"
                      onClick={() => handleDropdownToggle('kurumsal-mobile')}
                    >
                      {t.common.corporate || 'Kurumsal'}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {openDropdown === 'kurumsal-mobile' && (
                      <div className="pl-4 mt-2 space-y-2">
                        <a href={getPathWithLocale('/kurumsal/hakkimizda', locale)} className="block text-gray-300 hover:text-white text-sm">{t.common.about_us || 'Hakkımızda'}</a>
                        <a href={getPathWithLocale('/kurumsal/politikalarimiz', locale)} className="block text-gray-300 hover:text-white text-sm">{t.common.our_policies || 'Politikalarımız'}</a>
                        <a href={getPathWithLocale('/kurumsal/kurumsal-kimlik', locale)} className="block text-gray-300 hover:text-white text-sm">{t.common.corporate_identity || 'Kurumsal Kimlik'}</a>
                      </div>
                    )}
                  </div>
                <a href={getPathWithLocale('/iletisim', locale)} className="block hover:text-gray-300 transition-colors">
                  {t.common.contact || 'İletişim'}
                </a>
                <button className="flex items-center gap-2 hover:text-gray-300 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <span>{t.common.search || 'Ara'}</span>
                </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
