'use client';

import { useTranslations } from '@/lib/i18n/hooks';
import { getPathWithLocale } from '@/lib/i18n/translations';
import ProductSectionWithImage from '@/components/ProductSectionWithImage';

export default function CProfilPageRU() {
  const { locale } = useTranslations();

  return (
    <div className="w-full">
      <section className="relative py-20 md:py-32 lg:py-40 overflow-hidden text-white">
        <div className="absolute inset-0">
          <img src="/boru_profil.jpg" alt="C-профиль" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#3d4f5f]/90 to-[#1a1a5e]/90" />
        </div>
        <div className="relative container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-3xl">C-профиль</h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl">Холодногнутые C-образные (швеллерные) профили</p>
        </div>
      </section>

      <ProductSectionWithImage src="/boru_profil.jpg" alt="C-профиль" imagePosition="left">
        <h2 className="text-3xl md:text-4xl font-bold text-[#3d4f5f] mb-6">О продукте</h2>
        <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
          <p>
            C-профили (холодногнутые швеллерные профили) — это открытые U-образные профили. Они широко применяются
            в лёгких стальных конструкциях, стропильных фермах, фасадных системах, стеллажах и складских системах.
            Изготовленные методом холодной гибки, они обеспечивают высокую точность размеров и качество поверхности.
          </p>
          <p>
            Metal X поставляет C-профили различных размеров и толщин. Наша продукция подходит для несущих конструкций
            и лёгкого стального строительства.
          </p>
        </div>
      </ProductSectionWithImage>

      <ProductSectionWithImage src="/boru_profil.jpg" alt="C-профиль" imagePosition="right" bgColor="gray">
        <h2 className="text-3xl md:text-4xl font-bold text-[#3d4f5f] mb-8">Стандартные размеры</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-[#3d4f5f] mb-4">Характеристики профиля</h3>
            <ul className="space-y-2 text-gray-700">
              <li>Холодногнутый</li>
              <li>Различная высота и ширина</li>
              <li>Толщина 0,8–3,0 мм</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-[#3d4f5f] mb-4">Области применения</h3>
            <ul className="space-y-2 text-gray-700">
              <li>Лёгкие стальные конструкции</li>
              <li>Кровельные и фасадные системы</li>
              <li>Стеллажи и складские системы</li>
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
            <p className="text-xl mb-8 text-gray-100">Свяжитесь с нами для получения подробной информации и коммерческих предложений по C-профилям.</p>
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
