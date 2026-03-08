'use client';

import { useTranslations } from '@/lib/i18n/hooks';
import { getPathWithLocale } from '@/lib/i18n/translations';
import ProductSectionWithImage from '@/components/ProductSectionWithImage';

export default function KosebentDemiriPageRU() {
  const { locale } = useTranslations();

  return (
    <div className="w-full">
      <section className="relative py-20 md:py-32 lg:py-40 overflow-hidden text-white">
        <div className="absolute inset-0">
          <img src="/insaatdemiri.jpg" alt="Угловая сталь" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#3d4f5f]/90 to-[#1a1a5e]/90" />
        </div>
        <div className="relative container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-3xl">Угловая сталь</h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl">Равнополочные и неравнополочные L-профили</p>
        </div>
      </section>

      <ProductSectionWithImage src="/insaatdemiri.jpg" alt="Угловая сталь" imagePosition="left">
        <h2 className="text-3xl md:text-4xl font-bold text-[#3d4f5f] mb-6">О продукте</h2>
        <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
          <p>
            Угловая сталь (L-профили) — стальные профили L-образного сечения. Выпускаются в равнополочном и
            неравнополочном исполнении. Применяются в стыковочных узлах, углах каркасов и несущих элементах.
          </p>
          <p>Metal X поставляет угловую сталь от 20x20 мм до 200x200 мм.</p>
        </div>
      </ProductSectionWithImage>

      <ProductSectionWithImage src="/insaatdemiri.jpg" alt="Угловая сталь" imagePosition="right" bgColor="gray">
        <h2 className="text-3xl md:text-4xl font-bold text-[#3d4f5f] mb-8">Стандартные размеры</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-[#3d4f5f] mb-4">Типы профилей</h3>
            <ul className="space-y-2 text-gray-700">
              <li>Равнополочная угловая сталь</li>
              <li>Неравнополочная угловая сталь</li>
              <li>20x20 – 200x200 мм</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-[#3d4f5f] mb-4">Области применения</h3>
            <ul className="space-y-2 text-gray-700">
              <li>Стыковочные узлы</li>
              <li>Углы каркасов</li>
            </ul>
          </div>
        </div>
      </ProductSectionWithImage>

      <section className="relative py-16 md:py-24 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img src="/bizimleiletisimegecin.jpg" alt="Свяжитесь с нами" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#3d4f5f]/80" />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-xl mb-8 text-gray-100">Свяжитесь с нами для получения информации по угловой стали.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={getPathWithLocale('/iletisim', locale)} className="px-8 py-4 bg-white text-[#3d4f5f] font-bold rounded-lg hover:bg-gray-100 transition-colors">Связаться</a>
              <a href={getPathWithLocale('/teklif-al', locale)} className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors">Запросить предложение</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
