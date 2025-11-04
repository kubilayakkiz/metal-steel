import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Politikalarımız - Metal X Endüstriyel San. ve Tic. LTD. ŞTİ.',
  description: 'Metal X Endüstriyel San. ve Tic. LTD. ŞTİ. politikaları. Kalite, çevre, iş sağlığı ve güvenliği, etik değerler ve sürdürülebilirlik politikalarımız.',
};

export default function PolitikalarimizPage() {
  const policies = [
    {
      id: 'kalite',
      title: 'Kalite Politikası',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      description: 'Metal X Endüstriyel San. ve Tic. LTD. ŞTİ. olarak, müşterilerimize en yüksek kalitede ürün ve hizmet sunmak temel hedefimizdir. Kalite yönetim sistemimiz, ISO 9001:2015 standardına uygun olarak yürütülmektedir.',
      image: '/quality.jpg',
      principles: [
        'Müşteri memnuniyetini ön planda tutmak',
        'Sürekli iyileştirme anlayışı ile çalışmak',
        'Uluslararası kalite standartlarına uygun üretim yapmak',
        'Deneyimli ve eğitimli personel ile çalışmak',
        'Kalite kontrol süreçlerini titizlikle yürütmek'
      ],
      standard: 'ISO 9001:2015'
    },
    {
      id: 'cevre',
      title: 'Çevre Politikası',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      description: 'Çevre dostu üretim anlayışımız, sürdürülebilir bir gelecek için temel taşlarımızdan biridir. ISO 14001 çevre yönetim sistemi standartlarına uygun olarak çalışmaktayız.',
      image: '/environmental_policy.JPG',
      principles: [
        'Doğal kaynakların verimli kullanılması',
        'Çevresel etkilerin minimize edilmesi',
        'Atık yönetimi ve geri dönüşüm uygulamaları',
        'Enerji verimliliği ve yenilenebilir enerji kullanımı',
        'Çevre mevzuatına tam uyum'
      ],
      standard: 'ISO 14001'
    },
    {
      id: 'is-sagligi',
      title: 'İş Sağlığı ve Güvenliği',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      description: 'Çalışanlarımızın sağlığı ve güvenliği, en önemli önceliklerimizden biridir. ISO 45001 iş sağlığı ve güvenliği yönetim sistemi standartlarına uygun olarak çalışmaktayız.',
      image: '/occupational_healt_and_safety_policy.jpg',
      principles: [
        'Çalışanlarımızın sağlık ve güvenliğini korumak',
        'İş kazalarını ve meslek hastalıklarını önlemek',
        'Düzenli eğitim ve bilinçlendirme çalışmaları yapmak',
        'Risk değerlendirme ve kontrol önlemleri almak',
        'İş sağlığı ve güvenliği mevzuatına tam uyum'
      ],
      standard: 'ISO 45001'
    },
    {
      id: 'etik',
      title: 'Etik Değerler Politikası',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      description: 'Etik değerler ve dürüstlük, iş yapış şekillerimizin temelini oluşturur. Tüm iş ortaklarımızla şeffaf, adil ve dürüst ilişkiler kurmayı hedefleriz.',
      image: '/ethical_values.jpg',
      principles: [
        'Dürüstlük ve şeffaflık',
        'Adil ve eşitlikçi yaklaşım',
        'İnsan haklarına saygı',
        'Rüşvet ve yolsuzlukla mücadele',
        'Rekabet hukukuna uyum'
      ],
      standard: 'Etik İlkeler'
    },
    {
      id: 'surdurulebilirlik',
      title: 'Sürdürülebilirlik Politikası',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      description: 'Sürdürülebilir bir gelecek için, ekonomik, çevresel ve sosyal sorumluluklarımızı dengeli bir şekilde yürütmekteyiz.',
      image: '/sustainability.jpg',
      principles: [
        'Sürdürülebilir üretim süreçleri',
        'Toplumsal sorumluluk projeleri',
        'Karbon ayak izini azaltma çalışmaları',
        'Yenilenebilir enerji kullanımı',
        'Gelecek nesillere daha iyi bir dünya bırakma'
      ],
      standard: 'Sürdürülebilirlik'
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/policies.jpg" 
            alt="Politikalarımız"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#261dcf]/90 via-[#261dcf]/80 to-[#261dcf]/70"></div>
        </div>
        
        <div className="relative container mx-auto px-4 text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-3xl">
            Politikalarımız
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl">
            Kalite, çevre, iş sağlığı ve güvenliği politikalarımız
          </p>
        </div>
      </section>

      {/* Policies Grid */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {policies.map((policy, index) => (
                <div
                  key={policy.id}
                  className={`group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 ${
                    index % 2 === 0 ? 'lg:mt-0' : 'lg:mt-12'
                  }`}
                >
                  {/* Image and Icon Header */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={policy.image} 
                      alt={policy.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#261dcf]/90 via-[#261dcf]/50 to-transparent"></div>
                    <div className="absolute top-4 right-4 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white group-hover:bg-white/30 transition-colors">
                      {policy.icon}
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <span className="inline-block px-3 py-1 bg-[#6dd5fb]/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                        {policy.standard}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#261dcf] mb-4">
                      {policy.title}
                    </h2>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {policy.description}
                    </p>

                    {/* Principles */}
                    <div className="border-t border-gray-200 pt-6">
                      <h3 className="text-sm font-semibold text-[#261dcf] mb-4 uppercase tracking-wide">
                        Temel Prensipleri
                      </h3>
                      <ul className="space-y-3">
                        {policy.principles.map((principle, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-6 h-6 bg-[#261dcf]/10 rounded-full flex items-center justify-center mt-0.5">
                              <svg className="w-4 h-4 text-[#261dcf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <span className="text-gray-700 text-sm leading-relaxed">{principle}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#261dcf] mb-6">
              Politikalarımızın Önemi
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Metal X Endüstriyel San. ve Tic. LTD. ŞTİ. olarak, tüm politikalarımızı şeffaf ve sorumlu bir şekilde yürütmekteyiz. 
              Bu politikalar, iş yapış şekillerimizin temelini oluşturur ve müşterilerimiz, çalışanlarımız 
              ve toplum için sürdürülebilir değer yaratmamızı sağlar.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-12">
              {policies.map((policy) => (
                <div key={policy.id} className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-[#261dcf]/10 rounded-full flex items-center justify-center text-[#261dcf] mb-4">
                    {policy.icon}
                  </div>
                  <p className="text-sm font-semibold text-gray-700 text-center">{policy.standard}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-[#261dcf] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Daha Fazla Bilgi
            </h2>
            <p className="text-xl mb-8 text-gray-100">
              Politikalarımız hakkında detaylı bilgi almak için bizimle iletişime geçin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/iletisim" className="px-8 py-4 bg-white text-[#261dcf] font-bold rounded-lg hover:bg-gray-100 transition-colors">
                İletişime Geç
              </a>
              <a href="/kurumsal/hakkimizda" className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors">
                Hakkımızda
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
