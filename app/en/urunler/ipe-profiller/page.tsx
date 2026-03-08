'use client';

import { useTranslations } from '@/lib/i18n/hooks';
import { getPathWithLocale } from '@/lib/i18n/translations';
import ProductSectionWithImage from '@/components/ProductSectionWithImage';

export default function IPEProfillerPageEN() {
  const { locale } = useTranslations();

  return (
    <div className="w-full">
      <section className="relative py-20 md:py-32 lg:py-40 overflow-hidden text-white">
        <div className="absolute inset-0">
          <img src="/insaatdemiri.jpg" alt="IPE Profiles" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#3d4f5f]/90 to-[#1a1a5e]/90" />
        </div>
        <div className="relative container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-3xl">IPE Profiles</h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl">Thin-flange IPE I-beam profiles</p>
        </div>
      </section>

      <ProductSectionWithImage src="/insaatdemiri.jpg" alt="IPE Profiles" imagePosition="left">
        <h2 className="text-3xl md:text-4xl font-bold text-[#3d4f5f] mb-6">About the Product</h2>
        <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
          <p>
            IPE profiles are thin-flange I-beams, lighter and more economical than HEA and HEB. They are widely used
            in structures requiring medium load capacity, such as roof trusses, steel frame buildings, and industrial
            facilities.
          </p>
          <p>
            Metal X supplies IPE profiles from IPE 80 to IPE 600 in a wide range of sizes.
          </p>
        </div>
      </ProductSectionWithImage>

      <ProductSectionWithImage src="/insaatdemiri.jpg" alt="IPE Profiles" imagePosition="right" bgColor="gray">
        <h2 className="text-3xl md:text-4xl font-bold text-[#3d4f5f] mb-8">Standard Sizes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-[#3d4f5f] mb-4">Profile Series</h3>
            <ul className="space-y-2 text-gray-700">
              <li>IPE 80 – IPE 600</li>
              <li>EN 10365 standard</li>
              <li>Thin flange, lightweight</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-[#3d4f5f] mb-4">Applications</h3>
            <ul className="space-y-2 text-gray-700">
              <li>Roof trusses</li>
              <li>Light steel construction</li>
              <li>Industrial buildings</li>
            </ul>
          </div>
        </div>
      </ProductSectionWithImage>

      <section className="relative py-16 md:py-24 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img src="/bizimleiletisimegecin.jpg" alt="Contact Us" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#3d4f5f]/80" />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
            <p className="text-xl mb-8 text-gray-100">Contact us for detailed information and quotes on our IPE profile products.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={getPathWithLocale('/iletisim', locale)} className="px-8 py-4 bg-white text-[#3d4f5f] font-bold rounded-lg hover:bg-gray-100 transition-colors">Contact</a>
              <a href={getPathWithLocale('/teklif-al', locale)} className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors">Get Quote</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
