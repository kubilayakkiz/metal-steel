import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Стальной лист с покрытием Magnelis (ZAM) - Metal X Endüstriyel San. ve Tic. LTD. ŞTİ.',
  description: 'Стальной лист с покрытием Magnelis (ZAM). Длительный срок службы в суровых условиях окружающей среды, высокая коррозионная стойкость и низкие требования к обслуживанию.',
};

export default function MagnelisZAMPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 lg:py-40 overflow-hidden text-white">
        <div className="absolute inset-0">
          <img 
            src="/ZAM.jpg" 
            alt="Стальной лист с покрытием Magnelis (ZAM)"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#3d4f5f]/90 to-[#1a1a5e]/90"></div>
        </div>
        <div className="relative container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-3xl">
            Стальной лист с покрытием Magnelis (ZAM)
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl">
            Длительный срок службы в суровых условиях окружающей среды, высокая коррозионная стойкость и низкие требования к обслуживанию.
          </p>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mt-2">
            Metal X Steel – Сила промышленной стали
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
                alt="Стальной лист с покрытием Magnelis (ZAM)"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#3d4f5f]/30"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#3d4f5f] mb-6">
              О продукте
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                Стальной лист с покрытием ZAM (цинк-алюминий-магний) — это решение для покрытия нового поколения, 
                которое обеспечивает продвинутую защиту от коррозии благодаря структуре покрытия, состоящей из 
                сплава цинка, алюминия и магния. Оно направлено на продление срока службы в наружных конструкциях; 
                обеспечивая общее преимущество в стоимости за счет снижения потребности в обслуживании и ремонте.
              </p>
              <p>
                Листы с покрытием ZAM предпочтительны для долговечных применений, особенно в суровых условиях 
                окружающей среды, влажной/коррозионной атмосфере, прибрежном воздействии, промышленных площадках 
                и других средах с высоким риском. Они широко используются в автомобильной промышленности, строительстве, 
                сельскохозяйственной технике и общих промышленных применениях.
              </p>
              <p>
                Как Metal X Endüstriyel San. ve Tic. Ltd. Şti., мы предлагаем наши решения для листов с покрытием ZAM 
                в соответствии с техническими требованиями и стандартами качества; мы управляем выбором размера/качества 
                на основе проекта, планированием поставок и организацией отгрузки от начала до конца.
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
              Почему ZAM? (Magnelis)
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                Критическое отличие покрытия ZAM — это активное защитное поведение, поддерживаемое 
                вкладом магния. Оно помогает контролировать риск коррозии на поверхностях, образованных 
                после резки, сверления и формовки. Это обеспечивает более безопасное и долговечное 
                использование в наружных проектах.
              </p>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-[#3d4f5f] mb-6 mt-12">
              Ключевые преимущества
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#3d4f5f] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Высокая коррозионная стойкость</h4>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#3d4f5f] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Длительный срок службы и низкие требования к обслуживанию</h4>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#3d4f5f] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Надежная производительность в наружных применениях</h4>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#3d4f5f] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Общее преимущество в стоимости (долгосрочное)</h4>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md md:col-span-2">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#3d4f5f] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Прочность, поддерживающая непрерывность проекта</h4>
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
              Пределы производства / поставки
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#3d4f5f] mb-4">Толщина</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#3d4f5f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Минимум: 0.4 мм</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#3d4f5f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Максимум: 3.0 мм</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#3d4f5f] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Стандартные толщины: 0.5 / 0.7 / 0.8 / 1.0 / 1.2 / 1.5 / 2.0 / 2.5 / 3.0 мм</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#3d4f5f] mb-4">Ширина</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#3d4f5f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Минимум: 600 мм</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#3d4f5f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Максимум: 1500 мм</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#3d4f5f] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Нестандартные ширины: Свяжитесь с нашей командой для запросов на основе проекта.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#3d4f5f] mb-4">Вес покрытия</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#3d4f5f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Минимум: 100 г/м²</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#3d4f5f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Максимум: 350 г/м²</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#3d4f5f] mb-4">Количество заказа</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#3d4f5f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Минимальный заказ: 3 тонны</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#3d4f5f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Максимальный заказ: 300 тонн</span>
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
              Стандарты качества
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#3d4f5f] mb-3">Международные стандарты</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#3d4f5f] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span><strong>EN 10346:</strong> Непрерывно горячеоцинкованные стальные изделия</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#3d4f5f] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span><strong>ASTM A653:</strong> Стандарт для оцинкованной стали</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#3d4f5f] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span><strong>JIS G 3315:</strong> Японский стандарт покрытия стали</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#3d4f5f] mb-3">Производительность защиты от коррозии</h3>
                <p className="text-gray-700 mb-4">
                  Стальной лист с покрытием ZAM является сильной альтернативой в средах с риском коррозии. 
                  При правильном выборе и правильном весе покрытия он поддерживает следующие цели:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#3d4f5f] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Производительность покрытия, нацеленная на минимум 25 лет коррозионной стойкости</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#3d4f5f] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>В 3–4 раза более высокая защита по сравнению с традиционным оцинкованным</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#3d4f5f] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Сильное защитное поведение даже на обрезанных краях</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#3d4f5f] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Высокая устойчивость к условиям окружающей среды</span>
                  </li>
                </ul>
                <p className="text-gray-600 text-sm mt-4 italic">
                  <strong>Примечание:</strong> Производительность может варьироваться в зависимости от класса среды, 
                  деталей дизайна, сборки/качества изготовления, веса покрытия и условий использования. 
                  Мы предоставляем техническое руководство для конкретных проектов.
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
              Области применения
            </h2>
            <p className="text-center text-gray-700 mb-8 text-lg">
              Листы с покрытием ZAM выделяются в применениях, требующих высокой прочности и низких потребностей в обслуживании:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#3d4f5f] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700 font-medium">Автомобильная промышленность и смежные отрасли</span>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#3d4f5f] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700 font-medium">Строительство и применение стальных конструкций</span>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#3d4f5f] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700 font-medium">Сельскохозяйственная техника и сельскохозяйственные конструкции</span>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#3d4f5f] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700 font-medium">Общее промышленное производство</span>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md md:col-span-2">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#3d4f5f] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700 font-medium">Наружное оборудование и системы</span>
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
              Поставка ZAM с Metal X Steel
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                Для нас ZAM — это не просто продукт; это целостность правильного продукта + правильная поставка + правильная логистика. 
                В соответствии с потребностями вашего проекта мы предоставляем поддержку в:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>руководство по качеству/толщине/весу покрытия,</li>
                <li>оптимизация размера,</li>
                <li>планирование поставки,</li>
                <li>организация отгрузки</li>
              </ul>
              <p className="font-semibold">
                темах.
              </p>
              <p className="text-center text-lg font-bold text-[#3d4f5f] mt-6">
                Metal X Steel – сила промышленной стали.
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
              Получить предложение / Техническая консультация
            </h2>
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <p className="text-gray-700 mb-6">
                Для ваших потребностей в листах с покрытием ZAM отправьте нам следующую информацию, давайте уточним в тот же день:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#3d4f5f] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Область применения (строительство / автомобили / сельское хозяйство / промышленность)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#3d4f5f] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Толщина – ширина – вес покрытия</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#3d4f5f] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Ожидания стандарта качества</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#3d4f5f] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Количество (тоннаж) и график поставки</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#3d4f5f] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Место поставки / план отгрузки</span>
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <a href="/ru/teklif-al" className="px-8 py-4 bg-[#3d4f5f] text-white font-bold rounded-lg hover:bg-[#1a1a5e] transition-colors text-center">
                  Получить предложение
                </a>
                <a href="/ru/iletisim" className="px-8 py-4 bg-transparent border-2 border-[#3d4f5f] text-[#3d4f5f] font-bold rounded-lg hover:bg-[#3d4f5f]/10 transition-colors text-center">
                  Техническая консультация
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
              Часто задаваемые вопросы (FAQ)
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#3d4f5f] mb-3">
                  В чем основное различие между ZAM и оцинкованным?
                </h3>
                <p className="text-gray-700">
                  Покрытие ZAM нацелено на более высокую коррозионную стойкость и более длительный срок службы в наружных средах 
                  со сплавом цинк-алюминий-магний.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#3d4f5f] mb-3">
                  Продолжается ли защита после резки/сверления?
                </h3>
                <p className="text-gray-700">
                  Активное защитное поведение ZAM помогает снизить риск коррозии в обрезанных участках.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#3d4f5f] mb-3">
                  В каких размерах может быть поставлен?
                </h3>
                <p className="text-gray-700">
                  Варианты поставки доступны в диапазоне толщины 0.4–3.0 мм; ширине 600–1500 мм; 
                  весе покрытия 100–350 г/м².
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#3d4f5f] mb-3">
                  Каково минимальное количество заказа?
                </h3>
                <p className="text-gray-700">
                  Поставка может быть запланирована в диапазоне заказа минимум 3 тонны; максимум 300 тонн.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#3d4f5f] mb-3">
                  По каким стандартам предлагается?
                </h3>
                <p className="text-gray-700">
                  Решения предоставляются в соответствии со стандартными ссылками, такими как EN 10346, ASTM A653 и JIS G 3315.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#3d4f5f] mb-3">
                  Какая информация необходима для предложения?
                </h3>
                <p className="text-gray-700">
                  Толщина–ширина–вес покрытия, ожидания качества, количество, место поставки и график поставки.
                </p>
              </div>
            </div>
            <p className="text-center text-gray-700 mt-8 text-lg">
              Если вы ищете долговечное решение в сложных условиях, давайте вместе уточним подходящий выбор ZAM для вашего проекта.
            </p>
            <p className="text-center text-lg font-bold text-[#3d4f5f] mt-4">
              Metal X Steel – сила промышленной стали.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 md:py-24 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/bizimleiletisimegecin.jpg" 
            alt="Свяжитесь с нами"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#3d4f5f]/80"></div>
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Свяжитесь с нами
            </h2>
            <p className="text-xl mb-8 text-gray-100">
              Свяжитесь с нами для получения подробной информации и предложений о наших продуктах из листов с покрытием Magnelis (ZAM).
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/ru/iletisim" className="px-8 py-4 bg-white text-[#3d4f5f] font-bold rounded-lg hover:bg-gray-100 transition-colors">
                Связаться
              </a>
              <a href="/ru/teklif-al" className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors">
                Получить предложение
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
