'use client';

import { useTranslations } from '@/lib/i18n/hooks';
import { getPathWithLocale } from '@/lib/i18n/translations';
import ProductSectionWithImage from '@/components/ProductSectionWithImage';

export default function KareDikdortgenKutuProfilPageRU() {
  const { locale } = useTranslations();

  return (
    <div className="w-full">
      <section className="relative py-20 md:py-32 lg:py-40 overflow-hidden text-white">
        <div className="absolute inset-0">
          <img src="/boru_profil.jpg" alt="Квадратный и прямоугольный профиль" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#3d4f5f]/90 to-[#1a1a5e]/90" />
        </div>
        <div className="relative container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-3xl">Квадратный и прямоугольный профиль</h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl">Высокопрочные квадратные и прямоугольные полые профили</p>
        </div>
      </section>

      <ProductSectionWithImage src="/boru_profil.jpg" alt="Квадратный и прямоугольный профиль" imagePosition="left">
        <h2 className="text-3xl md:text-4xl font-bold text-[#3d4f5f] mb-6">О продукте</h2>
        <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
          <p>
            Квадратные и прямоугольные коробчатые профили — это стальные профили закрытого сечения. Их высокая
            крутильная и изгибная прочность обеспечивает широкое применение в металлоконструкциях, мостовых и
            башенных сооружениях, машиностроении и общих промышленных применениях.
          </p>
          <p>
            Metal X поставляет сварные коробчатые профили в широком диапазоне размеров. Наша продукция соответствует
            стандартам EN 10219 и EN 10210.
          </p>
        </div>
      </ProductSectionWithImage>

      <ProductSectionWithImage src="/boru_profil.jpg" alt="Квадратный и прямоугольный профиль" imagePosition="right" bgColor="gray">
        <h2 className="text-3xl md:text-4xl font-bold text-[#3d4f5f] mb-8">Стандартные размеры</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-[#3d4f5f] mb-4">Типы профилей</h3>
            <ul className="space-y-2 text-gray-700">
              <li>Квадратный коробчатый профиль (равные стороны)</li>
              <li>Прямоугольный коробчатый профиль</li>
              <li>EN 10219 / EN 10210</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-[#3d4f5f] mb-4">Области применения</h3>
            <ul className="space-y-2 text-gray-700">
              <li>Металлокаркасные здания</li>
              <li>Мостовые и башенные сооружения</li>
              <li>Машиностроение и производство оборудования</li>
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
            <p className="text-xl mb-8 text-gray-100">Свяжитесь с нами для получения подробной информации и коммерческих предложений по квадратным и прямоугольным коробчатым профилям.</p>
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
