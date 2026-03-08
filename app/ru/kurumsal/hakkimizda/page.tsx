import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'О нас - Metal X Steel (Metal Steel) - Metal X Endüstriyel San. ve Tic. LTD. ŞTİ.',
  description: 'Metal X Steel (Metal Steel) с более чем 15-летним опытом работы в отрасли поставок стали: надежность, правильный выбор продукта и своевременная поставка.',
};

export default function HakkimizdaPageRU() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/hakkimizda.jpg" 
            alt="О нас"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#3d4f5f]/90 via-[#3d4f5f]/80 to-[#3d4f5f]/70"></div>
        </div>
        
        <div className="relative container mx-auto px-4 text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-3xl">
            О НАС – METAL X STEEL (Metal Steel)
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl">
            Надежность, правильный выбор продукта и своевременная поставка в поставках стали
          </p>
        </div>
      </section>

      {/* About Us Main Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3d4f5f] mb-6">
              О нас
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                Как Metal X Steel (Metal Steel), мы объединяем надежность, правильный выбор продукта и подход своевременной поставки 
                в поставках стали с более чем 15-летним опытом работы в отрасли. С нашим широким спектром деятельности, простирающимся 
                от плоской стали до труб–профилей, от продуктов из покрытой стали до решений поставок на основе проектов; мы добавляем 
                устойчивую ценность проектам промышленности, строительства, энергетики и инфраструктуры.
              </p>
              <p>
                В стальном секторе мы действуем с осознанием того, что технические требования каждого проекта различны. Мы оцениваем 
                выбор продукта не только с точки зрения цены; но вместе с критериями, такими как место использования, условия окружающей 
                среды, обрабатываемость, качество поверхности, точность размеров и непрерывность поставок. Этот подход гарантирует, 
                что наши клиенты не испытывают проблем на месте и оптимизируют свои долгосрочные затраты.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Slogan Below */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg border-l-4 border-[#3d4f5f]">
              <p className="text-xl md:text-2xl text-gray-700 mb-4 leading-relaxed">
                Ценность в поставках стали; создается не только в материале, но в правильном решении и своевременной поставке.
              </p>
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                Metal X Steel работает с дисциплинированным подходом к поставкам и надежным решением, которое делает ваши проекты сильными на месте.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Product Groups */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3d4f5f] mb-8 text-center">
              Наши группы продуктов
            </h2>
            <p className="text-center text-gray-700 mb-8 text-lg">
              Ассортимент продуктов Metal X Steel структурирован для удовлетворения потребностей различных секторов:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#3d4f5f] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700 font-medium text-lg">Холоднокатаный лист (ХКЛ)</span>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#3d4f5f] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700 font-medium text-lg">Горячекатаный травленый лист (ГТЛ)</span>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#3d4f5f] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700 font-medium text-lg">Черный лист</span>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#3d4f5f] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700 font-medium text-lg">Оцинкованный лист</span>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#3d4f5f] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700 font-medium text-lg">Решения из специально покрытых листов (Magnelis / ZAM и т.д.)</span>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#3d4f5f] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700 font-medium text-lg">Группы труб–профилей (на основе проекта)</span>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md md:col-span-2">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#3d4f5f] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700 font-medium text-lg">Поставки на основе проекта и управление сроками</span>
                </div>
              </div>
            </div>
            <p className="text-gray-700 text-center">
              Наши листовые продукты имеют широкий спектр применений от автомобилей до бытовой техники, от энергетического оборудования 
              до строительной стали. Мы основываем наши принципы на качестве, непрерывности и прослеживаемости в процессе от производства до отгрузки.
            </p>
          </div>
        </div>
      </section>

      {/* Strategic Product in Coated Steel: Magnelis (ZAM) */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3d4f5f] mb-6">
              Стратегический продукт в покрытой стали: Magnelis (ZAM)
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                Среди наших решений из покрытой стали Magnelis (ZAM) является одной из групп продуктов, которым Metal X Steel стратегически 
                придает значение. Эта технология покрытия нового поколения со сплавом цинк–алюминий–магний нацелена на долгий срок службы и 
                низкие потребности в обслуживании в наружных применениях, обеспечивая более высокую коррозионную стойкость по сравнению со 
                стандартным оцинкованным.
              </p>
              <p>
                Причина выбора Magnelis; заключается в том, что она способствует продлению срока службы в проектах благодаря поведению покрытия, 
                которое поддерживает защиту даже в областях поверхности/среза, которые могут возникнуть после полевых операций. Поэтому она 
                выделяется как сильная альтернатива в сложных областях применения, таких как:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Несущие конструкции солнечных электростанций</li>
                <li>промышленные объекты</li>
                <li>инфраструктурные проекты</li>
                <li>наружные применения</li>
              </ul>
              <p className="font-semibold">
                Как Metal X Steel, мы позиционируем Magnelis не только как тип покрытия; но как стратегический структурный компонент, который 
                предлагает долгосрочную производительность, устойчивость и общее преимущество в стоимости.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Metal X Steel Approach */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3d4f5f] mb-6">
              Подход Metal X Steel
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                Metal X Steel стремится быть не просто компанией, которая поставляет продукты, а деловым партнером, который управляет процессом от начала до конца:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Правильное руководство по продукту</li>
                <li>Техническая поддержка и планирование на основе проекта</li>
                <li>Сильная логистика и дисциплина поставок</li>
                <li>Прозрачное и устойчивое управление поставками</li>
              </ul>
              <p>
                С нашей структурой, которая может быстро принимать решения в изменяющихся рыночных условиях, мы предлагаем нашим клиентам надежные поставки и долгосрочную ценность.
              </p>
              <p className="text-center text-lg font-bold text-[#3d4f5f] mt-6">
                Metal X Steel – сила промышленной стали.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Metal X Steel in Numbers */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3d4f5f] mb-12 text-center">
              Metal X Steel в цифрах
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-[#3d4f5f]">
                <div className="text-4xl md:text-5xl font-bold text-[#3d4f5f] mb-2">15+</div>
                <div className="text-lg font-semibold text-gray-800 mb-2">Лет</div>
                <p className="text-sm text-gray-600">Опыт работы в поставках железа и стали</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-[#3d4f5f]">
                <div className="text-4xl md:text-5xl font-bold text-[#3d4f5f] mb-2">200+</div>
                <div className="text-lg font-semibold text-gray-800 mb-2">Клиентов / Партнеров</div>
                <p className="text-sm text-gray-600">Постоянная сеть клиентов</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-[#3d4f5f]">
                <div className="text-4xl md:text-5xl font-bold text-[#3d4f5f] mb-2">8+</div>
                <div className="text-lg font-semibold text-gray-800 mb-2">Групп</div>
                <p className="text-sm text-gray-600">Плоская сталь, покрытые продукты, трубы–профили и т.д.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-[#3d4f5f]">
                <div className="text-4xl md:text-5xl font-bold text-[#3d4f5f] mb-2">3,000</div>
                <div className="text-lg font-semibold text-gray-800 mb-2">Тонн/Месяц</div>
                <p className="text-sm text-gray-600">Мощность поставок и отгрузки (масштабируемая на основе проекта)</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-[#3d4f5f]">
                <div className="text-4xl md:text-5xl font-bold text-[#3d4f5f] mb-2">0–1</div>
                <div className="text-lg font-semibold text-gray-800 mb-2">День</div>
                <p className="text-sm text-gray-600">Ответ в тот же день для большинства запросов</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-[#3d4f5f]">
                <div className="text-lg font-semibold text-gray-800 mb-2">По всей Турции</div>
                <p className="text-sm text-gray-600">Планирование поставок и организация отгрузки</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-[#3d4f5f]">
                <div className="text-4xl md:text-5xl font-bold text-[#3d4f5f] mb-2">95%+</div>
                <div className="text-lg font-semibold text-gray-800 mb-2">Цель</div>
                <p className="text-sm text-gray-600">С запланированной отгрузкой и отслеживанием процесса</p>
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
                <h2 className="text-3xl md:text-4xl font-bold text-[#3d4f5f] mb-6">
                  Миссия
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                  <p>
                    Миссия Metal X Steel — предоставлять нашим клиентам надежные поставки, правильный выбор продукта и устойчивые решения 
                    с нашим более чем 15-летним опытом работы с железом и сталью.
                  </p>
                  <p>
                    С нашим широким ассортиментом продуктов и сильной сетью поставок; в группах плоской стали, труб–профилей и покрытой стали, 
                    мы поддерживаем операционную непрерывность наших клиентов, обеспечивая управление качеством–поставками–логистикой, подходящее для проектов.
                  </p>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg relative">
                <img 
                  src="/mission.jpg" 
                  alt="Наша миссия"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#3d4f5f]/30"></div>
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
                  alt="Наше видение"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#3d4f5f]/30"></div>
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl md:text-4xl font-bold text-[#3d4f5f] mb-6">
                  Видение
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                  <p>
                    Наше видение — укрепить идентичность надежного делового партнера в поставках стали и быть среди референсных компаний 
                    в отрасли с конкурентоспособным, отслеживаемым и устойчивым подходом к поставкам в Турции и на международном рынке.
                  </p>
                  <p>
                    Правильно анализируя потребности наших клиентов; мы стремимся создавать измеримую добавленную стоимость в каждом проекте 
                    с принципами высокого качества, конкурентоспособных условий и своевременной поставки.
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#3d4f5f] mb-8 text-center">
              Почему Metal X Steel?
            </h2>
            <p className="text-center text-gray-700 mb-8 text-lg">
              Причина, по которой наши клиенты предпочитают нас, проста: мы действуем с подходом к поставкам, который решает задачу на месте.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#3d4f5f] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-[#3d4f5f]">Правильный выбор продукта</h3>
                    <p className="text-gray-700">Руководство по качеству/покрытию/размеру в соответствии с условиями проекта</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#3d4f5f] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-[#3d4f5f]">Дисциплина поставок</h3>
                    <p className="text-gray-700">Отслеживание процесса, запланированная отгрузка и четкий график поставки</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#3d4f5f] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-[#3d4f5f]">Сильная сеть поставок</h3>
                    <p className="text-gray-700">Непрерывность и управление альтернативными источниками</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#3d4f5f] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-[#3d4f5f]">Прозрачное общение</h3>
                    <p className="text-gray-700">Четкая информация, реалистичные сроки поставки и быстрый ответ</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md md:col-span-2">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#3d4f5f] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-[#3d4f5f]">Долгосрочное партнерство</h3>
                    <p className="text-gray-700">Не разовая продажа, а устойчивые деловые отношения</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#3d4f5f] mb-8 text-center">
              Наши ценности
            </h2>
            <div className="mb-8 rounded-lg overflow-hidden shadow-lg relative">
              <img 
                src="/values.jpg" 
                alt="Наши ценности"
                className="w-full h-[250px] md:h-[300px] object-cover"
              />
              <div className="absolute inset-0 bg-[#3d4f5f]/30"></div>
            </div>
            <p className="text-center text-gray-700 mb-8 text-lg">
              Рабочая культура Metal X Steel построена на доверии и непрерывности, а не на краткосрочной выгоде.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#3d4f5f] mb-3">Доверие</h3>
                <p className="text-gray-700">
                  Подход, который делает то, что говорит, и выполняет свои обязательства
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#3d4f5f] mb-3">Качество</h3>
                <p className="text-gray-700">
                  Соответствующая стандартам, отслеживаемая и контролируемая поставка
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#3d4f5f] mb-3">Скорость</h3>
                <p className="text-gray-700">
                  Гибкие операции в предложениях, утверждениях, поставках и отгрузке
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#3d4f5f] mb-3">Прозрачность</h3>
                <p className="text-gray-700">
                  Открытое общение, реалистичное планирование, точная информация
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md md:col-span-2">
                <h3 className="text-xl font-bold text-[#3d4f5f] mb-3">Устойчивость</h3>
                <p className="text-gray-700">
                  Долговечные решения, правильный выбор продукта, правильная стоимость
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#3d4f5f] mb-8 text-center">
              Послание основателя
            </h2>
            <div className="bg-gray-50 p-8 md:p-12 rounded-lg shadow-lg border-l-4 border-[#3d4f5f]">
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p>
                  Мы позиционировали Metal X Steel как партнера по решениям, который доставляет правильный материал в проект в нужное время, 
                  а не "говорить о цене и двигаться дальше" в поставках стали. Потому что реальная ценность на месте проявляется через 
                  производительность продукта, надежность поставок и управление процессом.
                </p>
                <p>
                  На том этапе, которого мы достигли сегодня, мы объединяем наш 15-летний опыт с более сильной сетью поставок и более 
                  дисциплинированным логистическим подходом; мы продолжаем создавать непрерывность и доверие в проектах наших клиентов.
                </p>
                <p className="text-center text-lg font-bold text-[#3d4f5f] mt-6">
                  Metal X Steel – сила промышленной стали.
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
              Свяжитесь с нами, чтобы узнать больше о нас или изучить возможности сотрудничества.
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
