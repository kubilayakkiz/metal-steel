import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'حولنا - Metal X Steel (Metal Steel) - Metal X Endüstriyel San. ve Tic. LTD. ŞTİ.',
  description: 'Metal X Steel (Metal Steel) مع أكثر من 15 عاماً من الخبرة في القطاع في توريد الصلب: الموثوقية، اختيار المنتج الصحيح والتسليم في الوقت المحدد.',
};

export default function HakkimizdaPageAR() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/hakkimizda.jpg" 
            alt="حولنا"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#261dcf]/90 via-[#261dcf]/80 to-[#261dcf]/70"></div>
        </div>
        
        <div className="relative container mx-auto px-4 text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-3xl">
            حولنا – METAL X STEEL (Metal Steel)
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl">
            الموثوقية، اختيار المنتج الصحيح والتسليم في الوقت المحدد في توريد الصلب
          </p>
        </div>
      </section>

      {/* About Us Main Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#261dcf] mb-6">
              حولنا
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                كشركة Metal X Steel (Metal Steel)، نجمع بين الموثوقية واختيار المنتج الصحيح ونهج التسليم في الوقت المحدد في توريد الصلب 
                مع أكثر من 15 عاماً من الخبرة في القطاع. مع نطاق أنشطتنا الواسع الممتد من الصلب المسطح إلى الأنابيب–الملفات، 
                من منتجات الصلب المطلية إلى حلول التوريد القائمة على المشروع؛ نضيف قيمة مستدامة لمشاريع الصناعة والبناء والطاقة والبنية التحتية.
              </p>
              <p>
                في قطاع الصلب، نعمل بوعي أن المتطلبات الفنية لكل مشروع مختلفة. لا نقيم اختيار المنتج فقط على أساس السعر؛ 
                بل مع معايير مثل موقع الاستخدام وظروف البيئة والقابلية للمعالجة وجودة السطح ودقة القياس واستمرارية التوريد. 
                يضمن هذا النهج أن عملاءنا لا يواجهون مشاكل في الموقع ويحسنون تكاليفهم طويلة الأمد.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Slogan Below */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg border-l-4 border-[#261dcf]">
              <p className="text-xl md:text-2xl text-gray-700 mb-4 leading-relaxed">
                القيمة في توريد الصلب؛ لا تُخلق فقط في المادة، بل في القرار الصحيح والتسليم في الوقت المحدد.
              </p>
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                تعمل Metal X Steel بنهج توريد منضبط وحلول موثوقة تجعل مشاريعك قوية في الموقع.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Product Groups */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#261dcf] mb-8 text-center">
              مجموعات منتجاتنا
            </h2>
            <p className="text-center text-gray-700 mb-8 text-lg">
              مجموعة منتجات Metal X Steel منظمة لتلبية احتياجات القطاعات المختلفة:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#261dcf] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700 font-medium text-lg">صفيح بارد (DKP)</span>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#261dcf] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700 font-medium text-lg">صفيح ساخن منقوع (HRP)</span>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#261dcf] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700 font-medium text-lg">صفيح أسود</span>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#261dcf] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700 font-medium text-lg">صفيح مجلفن</span>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#261dcf] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700 font-medium text-lg">حلول صفيح مطلية خاصة (Magnelis / ZAM وغيرها)</span>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#261dcf] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700 font-medium text-lg">مجموعات الأنابيب–الملفات (قائمة على المشروع)</span>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md md:col-span-2">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#261dcf] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700 font-medium text-lg">التوريد القائم على المشروع وإدارة التسليم</span>
                </div>
              </div>
            </div>
            <p className="text-gray-700 text-center">
              منتجات الصفيح لدينا لها نطاق واسع من التطبيقات من السيارات إلى الأجهزة المنزلية، من معدات الطاقة إلى صلب البناء. 
              نعتمد مبادئ الجودة والاستمرارية والتتبع في العملية من الإنتاج إلى الشحن.
            </p>
          </div>
        </div>
      </section>

      {/* Strategic Product in Coated Steel: Magnelis (ZAM) */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#261dcf] mb-6">
              منتج استراتيجي في الصلب المطلي: Magnelis (ZAM)
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                من بين حلول الصلب المطلي لدينا، Magnelis (ZAM) هي إحدى مجموعات المنتجات التي تقدرها Metal X Steel استراتيجياً. 
                تقنية الطلاء من الجيل الجديد هذه مع سبائك الزنك–الألومنيوم–المغنيسيوم تستهدف عمراً طويلاً واحتياجات صيانة منخفضة 
                في التطبيقات الخارجية من خلال توفير مقاومة أعلى للتآكل مقارنة بالمجلفن القياسي.
              </p>
              <p>
                سبب اختيار Magnelis؛ هو أنها تساهم في إطالة عمر الخدمة في المشاريع بسلوك الطلاء الذي يدعم الحماية حتى في مناطق 
                السطح/القطع التي قد تحدث بعد العمليات الميدانية. لذلك، تبرز كبديل قوي في مجالات التطبيق الصعبة مثل:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>هياكل حاملات محطات الطاقة الشمسية</li>
                <li>المنشآت الصناعية</li>
                <li>مشاريع البنية التحتية</li>
                <li>التطبيقات في الأماكن المفتوحة</li>
              </ul>
              <p className="font-semibold">
                كشركة Metal X Steel، نضع Magnelis ليس فقط كنوع من الطلاء؛ بل كمكون هيكلي استراتيجي يقدم أداءً طويل الأمد 
                واستدامة وميزة تكلفة إجمالية.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Metal X Steel Approach */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#261dcf] mb-6">
              نهج Metal X Steel
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                تهدف Metal X Steel إلى أن تكون ليس فقط شركة توفر المنتجات، بل شريك عمل يدير العملية من طرف إلى طرف:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>توجيه المنتج الصحيح</li>
                <li>الدعم الفني والتخطيط القائم على المشروع</li>
                <li>اللوجستيات القوية وانضباط التسليم</li>
                <li>إدارة التوريد الشفافة والمستدامة</li>
              </ul>
              <p>
                بهيكلنا الذي يمكنه اتخاذ قرارات سريعة في ظروف السوق المتغيرة، نقدم لعملائنا توريداً موثوقاً وقيمة طويلة الأمد.
              </p>
              <p className="text-center text-lg font-bold text-[#261dcf] mt-6">
                Metal X Steel – قوة الفولاذ الصناعي.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Metal X Steel in Numbers */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#261dcf] mb-12 text-center">
              Metal X Steel بالأرقام
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-[#261dcf]">
                <div className="text-4xl md:text-5xl font-bold text-[#261dcf] mb-2">15+</div>
                <div className="text-lg font-semibold text-gray-800 mb-2">عام</div>
                <p className="text-sm text-gray-600">خبرة ميدانية في توريد الحديد والصلب</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-[#261dcf]">
                <div className="text-4xl md:text-5xl font-bold text-[#261dcf] mb-2">200+</div>
                <div className="text-lg font-semibold text-gray-800 mb-2">عميل / شريك</div>
                <p className="text-sm text-gray-600">شبكة عملاء مستمرة</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-[#261dcf]">
                <div className="text-4xl md:text-5xl font-bold text-[#261dcf] mb-2">8+</div>
                <div className="text-lg font-semibold text-gray-800 mb-2">مجموعة</div>
                <p className="text-sm text-gray-600">الصلب المسطح، المنتجات المطلية، الأنابيب–الملفات، إلخ</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-[#261dcf]">
                <div className="text-4xl md:text-5xl font-bold text-[#261dcf] mb-2">3,000</div>
                <div className="text-lg font-semibold text-gray-800 mb-2">طن/شهر</div>
                <p className="text-sm text-gray-600">قدرة التوريد والشحن (قابلة للتوسع قائمة على المشروع)</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-[#261dcf]">
                <div className="text-4xl md:text-5xl font-bold text-[#261dcf] mb-2">0–1</div>
                <div className="text-lg font-semibold text-gray-800 mb-2">يوم</div>
                <p className="text-sm text-gray-600">استجابة في نفس اليوم لمعظم الطلبات</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-[#261dcf]">
                <div className="text-lg font-semibold text-gray-800 mb-2">جميع أنحاء تركيا</div>
                <p className="text-sm text-gray-600">تخطيط التسليم وتنظيم الشحن</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-[#261dcf]">
                <div className="text-4xl md:text-5xl font-bold text-[#261dcf] mb-2">95%+</div>
                <div className="text-lg font-semibold text-gray-800 mb-2">هدف</div>
                <p className="text-sm text-gray-600">مع الشحن المخطط ومتابعة العملية</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#261dcf] mb-6">
                  المهمة
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                  <p>
                    مهمة Metal X Steel هي تقديم توريد موثوق واختيار المنتج الصحيح وحلول مستدامة لعملائنا 
                    مع أكثر من 15 عاماً من خبرتنا في الحديد والصلب.
                  </p>
                  <p>
                    مع مجموعة منتجاتنا الواسعة وشبكة التوريد القوية لدينا؛ في مجموعات الصلب المسطح والأنابيب–الملفات والصلب المطلي، 
                    ندعم استمرارية عمليات عملائنا من خلال توفير إدارة الجودة–التسليم–اللوجستيات المناسبة للمشاريع.
                  </p>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg relative">
                <img 
                  src="/mission.jpg" 
                  alt="مهمتنا"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#261dcf]/30"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1 rounded-lg overflow-hidden shadow-lg relative">
                <img 
                  src="/vision.jpg" 
                  alt="رؤيتنا"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#261dcf]/30"></div>
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl md:text-4xl font-bold text-[#261dcf] mb-6">
                  الرؤية
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                  <p>
                    رؤيتنا هي تعزيز هوية شريك عمل موثوق في توريد الصلب، وأن نكون من بين الشركات المرجعية في القطاع 
                    بنهج توريد تنافسي وقابل للتتبع ومستدام في تركيا والسوق الدولية.
                  </p>
                  <p>
                    من خلال تحليل احتياجات عملائنا بشكل صحيح؛ نهدف إلى إنتاج قيمة مضافة قابلة للقياس في كل مشروع 
                    بمبادئ الجودة العالية والظروف التنافسية والتسليم في الوقت المحدد.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Metal X Steel? */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#261dcf] mb-8 text-center">
              لماذا Metal X Steel؟
            </h2>
            <p className="text-center text-gray-700 mb-8 text-lg">
              سبب تفضيل عملائنا لنا بسيط: نعمل بنهج توريد يحل المشكلة في الموقع.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#261dcf] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-[#261dcf]">اختيار المنتج الصحيح</h3>
                    <p className="text-gray-700">توجيه الجودة/الطلاء/الحجم وفقاً لظروف المشروع</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#261dcf] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-[#261dcf]">انضباط التسليم</h3>
                    <p className="text-gray-700">متابعة العملية والشحن المخطط وجدول التسليم الواضح</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#261dcf] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-[#261dcf]">شبكة توريد قوية</h3>
                    <p className="text-gray-700">الاستمرارية وإدارة المصادر البديلة</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#261dcf] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-[#261dcf]">تواصل شفاف</h3>
                    <p className="text-gray-700">معلومات واضحة ووقت تسليم واقعي واستجابة سريعة</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md md:col-span-2">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#261dcf] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-[#261dcf]">شراكة طويلة الأمد</h3>
                    <p className="text-gray-700">ليست مبيعات لمرة واحدة، بل علاقة عمل مستدامة</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#261dcf] mb-8 text-center">
              قيمنا
            </h2>
            <div className="mb-8 rounded-lg overflow-hidden shadow-lg relative">
              <img 
                src="/values.jpg" 
                alt="قيمنا"
                className="w-full h-[250px] md:h-[300px] object-cover"
              />
              <div className="absolute inset-0 bg-[#261dcf]/30"></div>
            </div>
            <p className="text-center text-gray-700 mb-8 text-lg">
              ثقافة عمل Metal X Steel مبنية على الثقة والاستمرارية بدلاً من المكاسب قصيرة الأمد.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#261dcf] mb-3">الثقة</h3>
                <p className="text-gray-700">
                  نهج يفعل ما يقوله ويلتزم بتعهداته
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#261dcf] mb-3">الجودة</h3>
                <p className="text-gray-700">
                  توريد متوافق مع المعايير وقابل للتتبع ومراقب
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#261dcf] mb-3">السرعة</h3>
                <p className="text-gray-700">
                  عمليات مرنة في العروض والموافقات والتسليم والشحن
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#261dcf] mb-3">الشفافية</h3>
                <p className="text-gray-700">
                  تواصل مفتوح وتخطيط واقعي ومعلومات دقيقة
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md md:col-span-2">
                <h3 className="text-xl font-bold text-[#261dcf] mb-3">الاستدامة</h3>
                <p className="text-gray-700">
                  حلول طويلة الأمد واختيار المنتج الصحيح والتكلفة الصحيحة
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Message */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#261dcf] mb-8 text-center">
              رسالة المؤسس
            </h2>
            <div className="bg-gray-50 p-8 md:p-12 rounded-lg shadow-lg border-l-4 border-[#261dcf]">
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p>
                  وضعنا Metal X Steel كشريك حل يصل بالمنتج الصحيح إلى المشروع في الوقت الصحيح، 
                  بدلاً من "التحدث عن السعر والمضي قدماً" في توريد الصلب. لأن القيمة الحقيقية في الموقع 
                  تظهر من خلال أداء المنتج وموثوقية التسليم وإدارة العملية.
                </p>
                <p>
                  في النقطة التي وصلنا إليها اليوم، نجمع بين خبرتنا التي تبلغ 15 عاماً مع شبكة توريد أقوى 
                  ونهج لوجستي أكثر انضباطاً؛ نستمر في إنتاج الاستمرارية والثقة في مشاريع عملائنا.
                </p>
                <p className="text-center text-lg font-bold text-[#261dcf] mt-6">
                  Metal X Steel – قوة الفولاذ الصناعي.
                </p>
              </div>
            </div>
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
          <div className="absolute inset-0 bg-[#261dcf]/80"></div>
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              اتصل بنا
            </h2>
            <p className="text-xl mb-8 text-gray-100">
              اتصل بنا لمعرفة المزيد عنا أو لاستكشاف فرص التعاون.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/ar/iletisim" className="px-8 py-4 bg-white text-[#261dcf] font-bold rounded-lg hover:bg-gray-100 transition-colors">
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
