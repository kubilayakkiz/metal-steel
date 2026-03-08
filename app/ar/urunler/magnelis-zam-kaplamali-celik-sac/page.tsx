import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'صفيح فولاذي مطلي بـ Magnelis (ZAM) - Metal X Endüstriyel San. ve Tic. LTD. ŞTİ.',
  description: 'صفيح فولاذي مطلي بـ Magnelis (ZAM). عمر خدمة طويل في الظروف البيئية القاسية، مقاومة عالية للتآكل واحتياجات صيانة منخفضة.',
};

export default function MagnelisZAMPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 lg:py-40 overflow-hidden text-white">
        <div className="absolute inset-0">
          <img 
            src="/ZAM.jpg" 
            alt="صفيح فولاذي مطلي بـ Magnelis (ZAM)"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#3d4f5f]/90 to-[#1a1a5e]/90"></div>
        </div>
        <div className="relative container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-3xl">
            صفيح فولاذي مطلي بـ Magnelis (ZAM)
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl">
            عمر خدمة طويل في الظروف البيئية القاسية، مقاومة عالية للتآكل واحتياجات صيانة منخفضة.
          </p>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mt-2">
            Metal X Steel – قوة الفولاذ الصناعي
          </p>
        </div>
      </section>

      {/* About Product */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 rounded-lg overflow-hidden shadow-lg relative h-[300px] md:h-[400px]">
              <img 
                src="/ZAM.jpg" 
                alt="صفيح فولاذي مطلي بـ Magnelis (ZAM)"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#3d4f5f]/30"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#3d4f5f] mb-6">
              حول المنتج
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                الصفيح الفولاذي المطلي بـ ZAM (الزنك-الألومنيوم-المغنيسيوم) هو حل طلاء من الجيل الجديد 
                يوفر حماية متقدمة من التآكل من خلال بنية طلاء تتكون من سبائك الزنك والألومنيوم والمغنيسيوم. 
                يهدف إلى إطالة عمر الخدمة في الهياكل الخارجية؛ مما يوفر ميزة التكلفة الإجمالية من خلال 
                تقليل احتياجات الصيانة والإصلاح.
              </p>
              <p>
                تُفضل الألواح المطلية بـ ZAM للتطبيقات طويلة الأمد، خاصة في الظروف البيئية القاسية، 
                والأجواء الرطبة/المسببة للتآكل، وتأثير السواحل، والمواقع الصناعية وغيرها من البيئات عالية المخاطر. 
                تُستخدم على نطاق واسع في السيارات والبناء والآلات الزراعية والتطبيقات الصناعية العامة.
              </p>
              <p>
                كشركة Metal X Endüstriyel San. ve Tic. Ltd. Şti.، نقدم حلول الألواح المطلية بـ ZAM 
                لدينا بما يتماشى مع المتطلبات الفنية ومعايير الجودة؛ ندير اختيار الحجم/الجودة القائم على المشروع، 
                وتخطيط التسليم وتنظيم الشحن من طرف إلى طرف.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why ZAM? */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3d4f5f] mb-6 text-center">
              لماذا ZAM؟ (Magnelis)
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                الفرق الحاسم في طلاء ZAM هو سلوك الحماية النشط المدعوم بمساهمة المغنيسيوم. 
                يساعد في السيطرة على مخاطر التآكل على الأسطح المتكونة بعد القطع والحفر والتشكيل. 
                هذا يمكّن من استخدام أكثر أماناً وأطول أمداً في المشاريع الخارجية.
              </p>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-[#3d4f5f] mb-6 mt-12">
              المزايا البارزة
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#3d4f5f] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h4 className="font-bold text-lg mb-2">مقاومة عالية للتآكل</h4>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#3d4f5f] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h4 className="font-bold text-lg mb-2">عمر خدمة طويل واحتياجات صيانة منخفضة</h4>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#3d4f5f] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h4 className="font-bold text-lg mb-2">أداء موثوق في التطبيقات الخارجية</h4>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#3d4f5f] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h4 className="font-bold text-lg mb-2">ميزة التكلفة الإجمالية (على المدى الطويل)</h4>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md md:col-span-2">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#3d4f5f] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h4 className="font-bold text-lg mb-2">متانة تدعم استمرارية المشروع</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Production / Supply Limits */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3d4f5f] mb-8 text-center">
              حدود الإنتاج / التوريد
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#3d4f5f] mb-4">السماكة</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#3d4f5f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>الحد الأدنى: 0.4 مم</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#3d4f5f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>الحد الأقصى: 3.0 مم</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#3d4f5f] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>السماكات القياسية: 0.5 / 0.7 / 0.8 / 1.0 / 1.2 / 1.5 / 2.0 / 2.5 / 3.0 مم</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#3d4f5f] mb-4">العرض</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#3d4f5f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>الحد الأدنى: 600 مم</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#3d4f5f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>الحد الأقصى: 1500 مم</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#3d4f5f] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>أعرض مخصصة: يمكنك الاتصال بفريق العملاء لدينا للطلبات القائمة على المشروع.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#3d4f5f] mb-4">وزن الطلاء</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#3d4f5f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>الحد الأدنى: 100 جم/م²</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#3d4f5f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>الحد الأقصى: 350 جم/م²</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#3d4f5f] mb-4">كمية الطلب</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#3d4f5f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>الحد الأدنى للطلب: 3 أطنان</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#3d4f5f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>الحد الأقصى للطلب: 300 طن</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3d4f5f] mb-8 text-center">
              معايير الجودة
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#3d4f5f] mb-3">المعايير الدولية</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#3d4f5f] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span><strong>EN 10346:</strong> منتجات الصلب المطلية بالغمس الساخن المستمر</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#3d4f5f] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span><strong>ASTM A653:</strong> معيار الصلب المطلي بالزنك</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#3d4f5f] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span><strong>JIS G 3315:</strong> معيار الطلاء الفولاذي الياباني</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#3d4f5f] mb-3">أداء حماية التآكل</h3>
                <p className="text-gray-700 mb-4">
                  الصفيح الفولاذي المطلي بـ ZAM هو بديل قوي في البيئات المعرضة لخطر التآكل. 
                  مع الاختيار المناسب ووزن الطلاء الصحيح، يدعم الأهداف التالية:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#3d4f5f] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>أداء الطلاء الذي يستهدف مقاومة التآكل لمدة 25 عاماً على الأقل</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#3d4f5f] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>حماية أعلى بـ 3-4 مرات مقارنة بالمجلفن التقليدي</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#3d4f5f] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>سلوك حماية قوي حتى على الحواف المقطوعة</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#3d4f5f] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>مقاومة عالية للظروف البيئية</span>
                  </li>
                </ul>
                <p className="text-gray-600 text-sm mt-4 italic">
                  <strong>ملاحظة:</strong> قد يختلف الأداء حسب فئة البيئة وتفاصيل التصميم والتجميع/العمالة 
                  ووزن الطلاء وظروف الاستخدام. نقدم التوجيه الفني للمشاريع المحددة.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Areas */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3d4f5f] mb-8 text-center">
              مجالات التطبيق
            </h2>
            <p className="text-center text-gray-700 mb-8 text-lg">
              تبرز الألواح المطلية بـ ZAM في التطبيقات التي تتطلب متانة عالية واحتياجات صيانة منخفضة:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#3d4f5f] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700 font-medium">السيارات والصناعة المساعدة</span>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#3d4f5f] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700 font-medium">البناء وتطبيقات الهياكل الفولاذية</span>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#3d4f5f] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700 font-medium">الآلات الزراعية والهياكل الزراعية</span>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#3d4f5f] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700 font-medium">التصنيع الصناعي العام</span>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md md:col-span-2">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#3d4f5f] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700 font-medium">المعدات والأنظمة الخارجية</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ZAM Supply with Metal X Steel */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3d4f5f] mb-6 text-center">
              توريد ZAM مع Metal X Steel
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                بالنسبة لنا، ZAM ليس مجرد منتج؛ بل هو تكامل المنتج الصحيح + التسليم الصحيح + اللوجستيات الصحيحة. 
                وفقاً لاحتياجات مشروعك، نقدم الدعم في:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>توجيه الجودة/السماكة/وزن الطلاء،</li>
                <li>تحسين الحجم،</li>
                <li>تخطيط التسليم،</li>
                <li>تنظيم الشحن</li>
              </ul>
              <p className="font-semibold">
                المواضيع.
              </p>
              <p className="text-center text-lg font-bold text-[#3d4f5f] mt-6">
                Metal X Steel – قوة الفولاذ الصناعي.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Get Quote / Technical Consultation */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3d4f5f] mb-6 text-center">
              احصل على عرض أسعار / استشارة تقنية
            </h2>
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <p className="text-gray-700 mb-6">
                لاحتياجاتك من الألواح المطلية بـ ZAM، أرسل لنا المعلومات التالية، دعنا نوضح في نفس اليوم:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#3d4f5f] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>مجال التطبيق (البناء / السيارات / الزراعة / الصناعة)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#3d4f5f] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>السماكة – العرض – وزن الطلاء</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#3d4f5f] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>توقعات معيار الجودة</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#3d4f5f] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>الكمية (بالأطنان) وجدول التسليم</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#3d4f5f] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>مكان التسليم / خطة الشحن</span>
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <a href="/ar/teklif-al" className="px-8 py-4 bg-[#3d4f5f] text-white font-bold rounded-lg hover:bg-[#1a1a5e] transition-colors text-center">
                  احصل على عرض أسعار
                </a>
                <a href="/ar/iletisim" className="px-8 py-4 bg-transparent border-2 border-[#3d4f5f] text-[#3d4f5f] font-bold rounded-lg hover:bg-[#3d4f5f]/10 transition-colors text-center">
                  استشارة تقنية
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3d4f5f] mb-8 text-center">
              الأسئلة الشائعة (FAQ)
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#3d4f5f] mb-3">
                  ما الفرق الأساسي بين ZAM والمجلفن؟
                </h3>
                <p className="text-gray-700">
                  يستهدف طلاء ZAM مقاومة أعلى للتآكل وعمر خدمة أطول في البيئات الخارجية 
                  مع سبائك الزنك-الألومنيوم-المغنيسيوم.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#3d4f5f] mb-3">
                  هل تستمر الحماية بعد القطع/الحفر؟
                </h3>
                <p className="text-gray-700">
                  يساعد سلوك الحماية النشط لـ ZAM في تقليل مخاطر التآكل في المناطق المقطوعة.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#3d4f5f] mb-3">
                  بأي أحجام يمكن توريده؟
                </h3>
                <p className="text-gray-700">
                  تتوفر خيارات التوريد في نطاق سماكة 0.4-3.0 مم؛ عرض 600-1500 مم؛ 
                  وزن طلاء 100-350 جم/م².
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#3d4f5f] mb-3">
                  ما هي الحد الأدنى لكمية الطلب؟
                </h3>
                <p className="text-gray-700">
                  يمكن التخطيط للتوريد في نطاق طلب يبلغ الحد الأدنى 3 أطنان؛ الحد الأقصى 300 طن.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#3d4f5f] mb-3">
                  تحت أي معايير يتم تقديمه؟
                </h3>
                <p className="text-gray-700">
                  يتم توفير الحلول بما يتماشى مع المراجع القياسية مثل EN 10346 وASTM A653 وJIS G 3315.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#3d4f5f] mb-3">
                  ما المعلومات المطلوبة لعرض الأسعار؟
                </h3>
                <p className="text-gray-700">
                  السماكة-العرض-وزن الطلاء، توقعات الجودة، الكمية، مكان التسليم وجدول التسليم.
                </p>
              </div>
            </div>
            <p className="text-center text-gray-700 mt-8 text-lg">
              إذا كنت تبحث عن حل طويل الأمد في ظروف صعبة، دعنا نوضح معاً اختيار ZAM المناسب لمشروعك.
            </p>
            <p className="text-center text-lg font-bold text-[#3d4f5f] mt-4">
              Metal X Steel – قوة الفولاذ الصناعي.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 md:py-24 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/bizimleiletisimegecin.jpg" 
            alt="اتصل بنا"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#3d4f5f]/80"></div>
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              اتصل بنا
            </h2>
            <p className="text-xl mb-8 text-gray-100">
              اتصل بنا للحصول على معلومات مفصلة وعروض أسعار حول منتجاتنا من الألواح المطلية بـ Magnelis (ZAM).
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/ar/iletisim" className="px-8 py-4 bg-white text-[#3d4f5f] font-bold rounded-lg hover:bg-gray-100 transition-colors">
                اتصل
              </a>
              <a href="/ar/teklif-al" className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors">
                احصل على عرض أسعار
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
