'use client';

import { useTranslations } from '@/lib/i18n/hooks';
import { getPathWithLocale } from '@/lib/i18n/translations';
import ProductSectionWithImage from '@/components/ProductSectionWithImage';

export default function HEAProfillerPageFR() {
  const { locale } = useTranslations();

  return (
    <div className="w-full">
      <section className="relative py-20 md:py-32 lg:py-40 overflow-hidden text-white">
        <div className="absolute inset-0">
          <img src="/insaatdemiri.jpg" alt="Profils HEA" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#3d4f5f]/90 to-[#1a1a5e]/90" />
        </div>
        <div className="relative container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-3xl">Profils HEA</h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl">Profils européens HEA (poutres en I) standards</p>
        </div>
      </section>

      <ProductSectionWithImage src="/insaatdemiri.jpg" alt="Profils HEA" imagePosition="left">
        <h2 className="text-3xl md:text-4xl font-bold text-[#3d4f5f] mb-6">À propos du produit</h2>
        <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
          <p>
            Les profils HEA (poutres en I européennes) sont des profils en I standards largement utilisés dans les applications d&apos;acier de construction. Leur haute résistance et rigidité les rendent idéaux pour les ossatures de bâtiments, ponts et structures industrielles.
          </p>
          <p>
            Metal X fournit des profils HEA de HEA 100 à HEA 1000, conformes aux normes EN 10365.
          </p>
        </div>
      </ProductSectionWithImage>

      <ProductSectionWithImage src="/insaatdemiri.jpg" alt="Profils HEA" imagePosition="right" bgColor="gray">
        <h2 className="text-3xl md:text-4xl font-bold text-[#3d4f5f] mb-8">Dimensions standard</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-[#3d4f5f] mb-4">Série de profil</h3>
            <ul className="space-y-2 text-gray-700">
              <li>HEA 100 – HEA 1000</li>
              <li>Norme EN 10365</li>
              <li>Longueurs standard 6–18 m</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-[#3d4f5f] mb-4">Applications</h3>
            <ul className="space-y-2 text-gray-700">
              <li>Ossatures de bâtiments</li>
              <li>Structures industrielles</li>
              <li>Ponts et viaducs</li>
            </ul>
          </div>
        </div>
      </ProductSectionWithImage>

      <section className="relative py-16 md:py-24 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img src="/bizimleiletisimegecin.jpg" alt="Contactez-nous" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#3d4f5f]/80" />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Contactez-nous</h2>
            <p className="text-xl mb-8 text-gray-100">Contactez-nous pour des informations détaillées et des devis sur nos profils HEA.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={getPathWithLocale('/iletisim', locale)} className="px-8 py-4 bg-white text-[#3d4f5f] font-bold rounded-lg hover:bg-gray-100 transition-colors">Contact</a>
              <a href={getPathWithLocale('/teklif-al', locale)} className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors">Obtenir un devis</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
