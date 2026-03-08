'use client';

import { useTranslations } from '@/lib/i18n/hooks';
import { getPathWithLocale } from '@/lib/i18n/translations';
import ProductSectionWithImage from '@/components/ProductSectionWithImage';

export default function CProfilPageAR() {
  const { locale } = useTranslations();

  return (
    <div className="w-full">
      <section className="relative py-20 md:py-32 lg:py-40 overflow-hidden text-white">
        <div className="absolute inset-0">
          <img src="/boru_profil.jpg" alt="ملف C" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#3d4f5f]/90 to-[#1a1a5e]/90" />
        </div>
        <div className="relative container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-3xl">ملف C</h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl">ملفات C (قنوات) مدرفلة على البارد</p>
        </div>
      </section>

      <ProductSectionWithImage src="/boru_profil.jpg" alt="ملف C" imagePosition="left">
        <h2 className="text-3xl md:text-4xl font-bold text-[#3d4f5f] mb-6">عن المنتج</h2>
        <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
          <p>
            ملفات C (ملفات القناة المدرفلة على البارد) هي ملفات ذات مقطع مفتوح على شكل U. تُستخدم على نطاق واسع
            في الهياكل الفولاذية الخفيفة وعوارض الأسقف وأنظمة الواجهات وأنظمة الرفوف والتخزين. تُصنع بالدرفلة
            على البارد، وتوفر دقة أبعاد عالية وجودة سطح ممتازة.
          </p>
          <p>
            توفر Metal X ملفات C بأحجام وسماكات مختلفة. منتجاتنا مناسبة للتطبيقات الإنشائية والبناء الفولاذي الخفيف.
          </p>
        </div>
      </ProductSectionWithImage>

      <ProductSectionWithImage src="/boru_profil.jpg" alt="ملف C" imagePosition="right" bgColor="gray">
        <h2 className="text-3xl md:text-4xl font-bold text-[#3d4f5f] mb-8">الأحجام القياسية</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-[#3d4f5f] mb-4">مواصفات الملف</h3>
            <ul className="space-y-2 text-gray-700">
              <li>مدرفل على البارد</li>
              <li>ارتفاعات وعروض مختلفة</li>
              <li>نطاق السماكة 0.8–3.0 ملم</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-[#3d4f5f] mb-4">التطبيقات</h3>
            <ul className="space-y-2 text-gray-700">
              <li>الهياكل الفولاذية الخفيفة</li>
              <li>أنظمة الأسقف والواجهات</li>
              <li>أنظمة الرفوف والتخزين</li>
            </ul>
          </div>
        </div>
      </ProductSectionWithImage>

      <section className="relative py-16 md:py-24 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img src="/bizimleiletisimegecin.jpg" alt="اتصل بنا" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#3d4f5f]/80" />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">اتصل بنا</h2>
            <p className="text-xl mb-8 text-gray-100">اتصل بنا للحصول على معلومات تفصيلية وعروض أسعار لملفات C.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={getPathWithLocale('/iletisim', locale)} className="px-8 py-4 bg-white text-[#3d4f5f] font-bold rounded-lg hover:bg-gray-100 transition-colors">اتصل</a>
              <a href={getPathWithLocale('/teklif-al', locale)} className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors">اطلب عرض سعر</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
