export interface FlatSteelCopy {
  title: string;
  subtitle: string;
  about: string[];
  features: string[];
  standards: string[];
  applications: string[];
  cta: string;
  labels: {
    about: string;
    limits: string;
    thickness: string;
    width: string;
    coating: string;
    grades: string;
    features: string;
    standards: string;
    applications: string;
    related: string;
    contact: string;
    quote: string;
  };
}

export interface SpecGroup {
  titleKey: 'thickness' | 'width' | 'coating' | 'grades';
  items: string[];
}

export interface FlatSteelProduct {
  slug: string;
  image: string;
  related: { slug: string; nameTr: string; nameEn: string }[];
  specs: SpecGroup[];
  tr: FlatSteelCopy;
  en: FlatSteelCopy;
}

const labelsTr = {
  about: 'Ürün Hakkında',
  limits: 'Teknik Özellikler',
  thickness: 'Kalınlık',
  width: 'Genişlik',
  coating: 'Kaplama',
  grades: 'Kaliteler',
  features: 'Öne çıkan özellikler',
  standards: 'Kalite standartları',
  applications: 'Kullanım alanları',
  related: 'İlgili ürünler',
  contact: 'İletişime Geç',
  quote: 'Teklif Al',
};

const labelsEn = {
  about: 'About the product',
  limits: 'Technical specifications',
  thickness: 'Thickness',
  width: 'Width',
  coating: 'Coating',
  grades: 'Grades',
  features: 'Key features',
  standards: 'Quality standards',
  applications: 'Typical applications',
  related: 'Related products',
  contact: 'Contact us',
  quote: 'Request a quote',
};

export const extraFlatSteelProducts: FlatSteelProduct[] = [
  {
    slug: 'corten-sac',
    image: '/products/corten-sac.png',
    related: [
      { slug: 'sicak-haddelenmis-sac', nameTr: 'Sıcak Haddelenmiş Sac', nameEn: 'Hot Rolled Steel' },
      { slug: 'sicak-haddelenmis-asitlenmis-sac', nameTr: 'Sıcak Haddelenmiş Asitlenmiş Sac', nameEn: 'Pickled Hot Rolled' },
    ],
    specs: [
      { titleKey: 'thickness', items: ['1.50 mm – 20.00 mm'] },
      { titleKey: 'width', items: ['900 mm – 2000 mm'] },
      {
        titleKey: 'grades',
        items: [
          'S235J0W, S235J2W',
          'S355J0WP, S355J2WP',
          'S355J0W, S355J2W, S355J2W+N',
          'S355K2W, S355K2W+N',
        ],
      },
    ],
    tr: {
      title: 'Corten Sac',
      subtitle: 'Atmosferik korozyona dayanıklı weathering steel — mimari ve dış ortam uygulamaları için.',
      about: [
        'Corten sac, bakır, krom, nikel ve fosfor alaşımı sayesinde açık havada yüzeyinde kararlı bir pas patinası oluşturan özel yapı çeliğidir. Bu tabaka, sıradan karbon çeliğindeki gibi içeri işlemez; metalin altını korozyondan koruyan doğal bir bariyer görevi görür.',
        'Metal X, EN 10025-5 kalitelerinde corten sacı rulo ve levha olarak tedarik eder. Cephe, peyzaj, köprü ve endüstriyel dış ortam projelerinde boyasız kullanım hedefleyen müşterilerimize ölçü, kalite ve sevkiyat planını birlikte kurgularız.',
        'Patinanın sağlıklı oluşması için yüzeyin ıslanıp kuruyabilmesi gerekir. Sürekli su birikintisi olan detaylarda standart korozyon devam edebileceğinden, proje aşamasında drenaj ve birleşim detaylarını birlikte değerlendiririz.',
      ],
      features: [
        'Boyasız ve düşük bakımlı dış ortam kullanımı',
        'Zamanla koyulaşan karakteristik kahverengi patina',
        'Yapısal mukavemet ile mimari görünümü bir arada sunar',
        'Rulo ve levha tedariki, proje bazlı ebatlama',
      ],
      standards: [
        'EN 10025-5: Atmosferik korozyona dayanıklı yapı çelikleri',
        'ASTM A588 / A242: Weathering steel referans kaliteleri',
      ],
      applications: [
        'Cephe kaplama, kent mobilyası ve peyzaj elemanları',
        'Köprü, konteyner ve dış konstrüksiyon',
        'Enerji ve altyapı dış ortam yapıları',
      ],
      cta: 'Corten sac kalite, kalınlık ve ölçü talebiniz için bizimle iletişime geçin.',
      labels: labelsTr,
    },
    en: {
      title: 'Corten Steel',
      subtitle: 'Weathering steel for architectural and outdoor use, with a stable protective patina.',
      about: [
        'Corten (weathering steel) forms a stable rust patina in outdoor exposure thanks to copper, chromium, nickel and phosphorus alloying. The layer stays on the surface and shields the steel underneath, unlike ordinary carbon steel rust.',
        'Metal X supplies EN 10025-5 corten in coil and plate. We plan grade, size and logistics with you for façades, landscaping, bridges and industrial outdoor structures intended for unpainted service.',
        'The patina needs wet-dry cycles. Standing water can interrupt protection, so drainage and joint details should be reviewed at the design stage.',
      ],
      features: [
        'Unpainted, low-maintenance outdoor service',
        'Characteristic brown patina that darkens over time',
        'Structural strength with an architectural finish',
        'Coil and plate supply, cut-to-size on request',
      ],
      standards: [
        'EN 10025-5 atmospheric corrosion-resistant structural steels',
        'ASTM A588 / A242 weathering steel references',
      ],
      applications: [
        'Façades, street furniture and landscape elements',
        'Bridges, containers and outdoor structures',
        'Energy and infrastructure frames',
      ],
      cta: 'Contact us for corten grade, thickness and size requirements.',
      labels: labelsEn,
    },
  },
  {
    slug: 'elektro-galvanizli-sac',
    image: '/products/elektro-galvanizli-sac.jpg',
    related: [
      { slug: 'galvanizli-sac', nameTr: 'Galvanizli Sac', nameEn: 'Galvanized Steel' },
      { slug: 'galvanil-sac', nameTr: 'Galvanil Sac', nameEn: 'Galvannealed Steel' },
      { slug: 'soguk-haddelenmis-sac', nameTr: 'Soğuk Haddelenmiş Sac', nameEn: 'Cold Rolled Steel' },
    ],
    specs: [
      { titleKey: 'thickness', items: ['0.30 mm – 3.00 mm'] },
      { titleKey: 'width', items: ['800 mm – 2000 mm'] },
      {
        titleKey: 'grades',
        items: [
          'DC01+ZE – DC07+ZE',
          'HC260LA+ZE – HC500LA+ZE',
        ],
      },
    ],
    tr: {
      title: 'Elektro Galvanizli Sac',
      subtitle: 'Elektrolitik çinko kaplama: pürüzsüz yüzey, yüksek boya tutunması — otomotiv ve beyaz eşya için.',
      about: [
        'Elektro galvanizli sac (EN 10152, +ZE), çeliğin yüzeyine elektrolitik yöntemle ince ve homojen çinko kaplama uygulanarak üretilir. Sıcak daldırma galvanize göre kaplama daha incedir; yüzey ise boyama ve şekillendirme için daha düzgündür.',
        'Metal X, soğuk haddelenmiş kaliteler üzerine ZE kaplamalı sacı otomotiv panelleri, beyaz eşya gövdesi ve boyalı iç aksam ihtiyacı olan üreticilere tedarik eder. Sıcak daldırma galvaniz (Z) ile elektro galvaniz (ZE) aynı ürün değildir; korozyon beklentisi, kaynak ve boya prosesine göre doğru aileyi birlikte seçeriz.',
        'İnce kaplama, kaynak sıçramasını ve kalıp aşınmasını azaltır. Açık hava ve ağır korozyon ortamlarında sıcak daldırma galvaniz, Galfan veya Magnelis daha uygun olabilir.',
      ],
      features: [
        'Pürüzsüz yüzey, boya ve katodik daldırma astarına uyum',
        'Hassas kalınlık, soğuk şekillendirmeye elverişli',
        'Otomotiv ve beyaz eşya hatlarına uygun +ZE kaliteler',
        'HDG (Z) ürünlerden ayrı, bilinçli kaplama seçimi',
      ],
      standards: [
        'EN 10152: Elektrolitik çinko kaplamalı soğuk haddelenmiş çelikler',
        'VDA / otomotiv teslim şartları proje bazında',
      ],
      applications: [
        'Otomotiv iç/dış panel ve takviyeler',
        'Beyaz eşya gövde ve kapak sacları',
        'Boyalı ofis ve elektronik sacları',
      ],
      cta: 'Elektro galvaniz kalite ve ZE kaplama talebiniz için teklif alın.',
      labels: labelsTr,
    },
    en: {
      title: 'Electro-galvanized Steel',
      subtitle: 'Electrolytic zinc coating with a smooth surface and strong paint adhesion for automotive and appliances.',
      about: [
        'Electro-galvanized sheet (EN 10152, +ZE) receives a thin, uniform zinc layer by electrolysis. The coating is thinner than hot-dip galvanizing and the surface is smoother for painting and forming.',
        'Metal X supplies ZE-coated cold-rolled grades for automotive panels, appliance cabinets and painted interior parts. Hot-dip galvanizing (Z) and electro-galvanizing (ZE) are different families; we match the coating to corrosion, welding and paint process needs.',
        'The thin coating helps welding and tooling. For outdoor or aggressive atmospheres, hot-dip galvanized, Galfan or Magnelis is usually the better choice.',
      ],
      features: [
        'Smooth surface for paint and e-coat',
        'Tight thickness, suitable for cold forming',
        'Automotive and appliance +ZE grades',
        'Specified separately from HDG (Z) products',
      ],
      standards: [
        'EN 10152 electrolytically zinc-coated cold-rolled steels',
        'Automotive delivery specs on a project basis',
      ],
      applications: [
        'Automotive panels and reinforcements',
        'Appliance cabinets and lids',
        'Painted office and electronics sheet',
      ],
      cta: 'Request a quote for electro-galvanized grades and ZE coating.',
      labels: labelsEn,
    },
  },
  {
    slug: 'alusi-sac',
    image: '/products/alusi-sac.jpg',
    related: [
      { slug: 'aluzinc-sac', nameTr: 'Aluzinc Sac', nameEn: 'Aluzinc Steel' },
      { slug: 'galvanizli-sac', nameTr: 'Galvanizli Sac', nameEn: 'Galvanized Steel' },
    ],
    specs: [
      { titleKey: 'thickness', items: ['0.40 mm – 2.00 mm'] },
      { titleKey: 'width', items: ['800 mm – 1500 mm'] },
      {
        titleKey: 'grades',
        items: [
          'DX51D+AS – DX57D+AS',
          'S250GD+AS – S350GD+AS',
          'HX260LAD+AS – HX420LAD+AS',
        ],
      },
    ],
    tr: {
      title: 'Alusi Sac',
      subtitle: 'Alüminyum-silikon kaplama (+AS) — yüksek sıcaklık ve ısıl çevrim uygulamaları için.',
      about: [
        'Alusi, çelik yüzeyine sıcak daldırma ile yaklaşık %90 alüminyum ve %10 silikon alaşımı kaplanarak üretilir (EN 10346, +AS). Alüminyum oksit tabakası yüksek sıcaklıkta korozyonu yavaşlatır; silikon ise kaplamanın çeliğe bağlanmasını ve ısıl dayanımı destekler.',
        'Metal X, egzoz, fırın, baca ve ısıtma ekipmanı üreticilerine Alusi sac tedarik eder. Tipik sürekli servis aralığı galvanizli saca göre belirgin şekilde daha yüksektir; ısıl yansıtma da enerji verimli gövdelerde avantaj sağlar.',
        'Kaplama kodları AS80–AS150 aralığında talep edilir. Şekillendirme, kaynak ve sonraki boya ihtiyacına göre DX veya yapısal SxxxGD kalitesini birlikte netleştiririz.',
      ],
      features: [
        'Yüksek sıcaklık ve ısıl çevrime dayanım',
        'Alüminyum-silikon sıcak daldırma kaplama (+AS)',
        'Egzoz, fırın ve ısıtma gövdelerine uygun yüzey',
        'Isı yansıtma ile enerji verimli uygulamalar',
      ],
      standards: ['EN 10346: Sürekli sıcak daldırma alüminyum-silikon kaplamalı çelikler (+AS)'],
      applications: [
        'Otomotiv egzoz ve ısı kalkanları',
        'Fırın, baca ve ısıtıcı gövdeleri',
        'Endüstriyel ısı ekipmanı',
      ],
      cta: 'Alusi (+AS) kalınlık ve kalite talebiniz için iletişime geçin.',
      labels: labelsTr,
    },
    en: {
      title: 'Alusi Steel',
      subtitle: 'Aluminium-silicon coating (+AS) for high-temperature and thermal-cycle service.',
      about: [
        'Alusi is hot-dip coated with roughly 90% aluminium and 10% silicon (EN 10346, +AS). The alumina film slows high-temperature corrosion; silicon helps the coating bond and resist heat.',
        'Metal X supplies Alusi for exhaust, oven, flue and heating-equipment makers. Continuous service temperatures are well above those of galvanized sheet, and heat reflectance helps energy-efficient housings.',
        'Coating masses are typically requested as AS80–AS150. We confirm DX or structural SxxxGD grades against forming, welding and any later paint step.',
      ],
      features: [
        'Resistance to heat and thermal cycling',
        'Hot-dip aluminium-silicon coating (+AS)',
        'Surface suited to exhaust, oven and heater parts',
        'Heat reflectance for energy-efficient housings',
      ],
      standards: ['EN 10346 continuously hot-dip aluminium-silicon coated steels (+AS)'],
      applications: [
        'Automotive exhaust and heat shields',
        'Ovens, flues and heater bodies',
        'Industrial thermal equipment',
      ],
      cta: 'Contact us for Alusi (+AS) thickness and grade.',
      labels: labelsEn,
    },
  },
  {
    slug: 'aluzinc-sac',
    image: '/products/aluzinc-sac.jpg',
    related: [
      { slug: 'alusi-sac', nameTr: 'Alusi Sac', nameEn: 'Alusi Steel' },
      { slug: 'boyali-sac', nameTr: 'Boyalı Sac', nameEn: 'Pre-painted Steel' },
      { slug: 'galfan-sac', nameTr: 'Galfan Sac', nameEn: 'Galfan Steel' },
    ],
    specs: [
      { titleKey: 'thickness', items: ['0.40 mm – 2.00 mm'] },
      { titleKey: 'width', items: ['800 mm – 1500 mm'] },
      {
        titleKey: 'grades',
        items: [
          'DX51D+AZ – DX56D+AZ',
          'S220GD+AZ – S550GD+AZ',
        ],
      },
    ],
    tr: {
      title: 'Aluzinc Sac',
      subtitle: 'Alüminyum-çinko-silikon kaplama (+AZ) — çatı, cephe ve uzun ömürlü dış ortam sacı.',
      about: [
        'Aluzinc (Galvalume tipi, EN 10346 +AZ), yaklaşık %55 alüminyum, %43,4 çinko ve %1,6 silikon içeren sıcak daldırma kaplamadır. Alüminyum bariyer koruması ile çinkonun katodik korumasını birleştirir; aynı gramajdaki saf çinko kaplamaya göre dış ortam ömrü genellikle daha uzundur.',
        'Metal X, çatı-cephe, HVAC ve boyalı sac altlığı olarak Aluzinc tedarik eder. AZ100, AZ150 ve AZ185 kaplamalar yaygındır. Yüzey ısıl yansıtması yüksek olduğu için güneş enerjisi ve iklimlendirme panellerinde de tercih edilir.',
        'Kesik kenarlarda çinko katkısı korozyonu yavaşlatır. Deniz ve endüstriyel atmosferde kaplama kütlesi ve varsa organik son kat birlikte seçilmelidir.',
      ],
      features: [
        'HDG’ye göre daha uzun dış ortam korozyon ömrü',
        'Isı yansıtma — çatı ve iklimlendirme uygulamaları',
        'Boyalı sac altlığı olarak AZ kaplama',
        'Çatı, cephe ve yapısal SxxxGD kaliteleri',
      ],
      standards: ['EN 10346: Sürekli sıcak daldırma alüminyum-çinko kaplamalı çelikler (+AZ)'],
      applications: [
        'Çatı ve cephe kaplamaları',
        'HVAC kanal ve gövdeleri',
        'Boyalı sac üretiminde altlık',
      ],
      cta: 'Aluzinc (+AZ) ölçü ve kaplama talebiniz için teklif alın.',
      labels: labelsTr,
    },
    en: {
      title: 'Aluzinc Steel',
      subtitle: 'Aluminium-zinc-silicon coating (+AZ) for roofing, façades and long outdoor service.',
      about: [
        'Aluzinc (Galvalume type, EN 10346 +AZ) is a hot-dip coating of about 55% aluminium, 43.4% zinc and 1.6% silicon. It combines aluminium barrier protection with zinc’s sacrificial action and typically outlasts equal-mass pure zinc coatings outdoors.',
        'Metal X supplies Aluzinc for roofing, cladding, HVAC and as a substrate for pre-painted coil. AZ100, AZ150 and AZ185 are common. High solar reflectance also suits solar and HVAC panels.',
        'Zinc in the coating slows cut-edge corrosion. Coating mass and any organic topcoat should be chosen together for marine or industrial atmospheres.',
      ],
      features: [
        'Longer outdoor life than comparable HDG',
        'Heat reflectance for roofs and HVAC',
        'AZ substrate for pre-painted coil',
        'Roofing, cladding and SxxxGD structural grades',
      ],
      standards: ['EN 10346 continuously hot-dip aluminium-zinc coated steels (+AZ)'],
      applications: [
        'Roofing and façade cladding',
        'HVAC ducts and housings',
        'Substrate for pre-painted steel',
      ],
      cta: 'Request a quote for Aluzinc (+AZ) size and coating.',
      labels: labelsEn,
    },
  },
  {
    slug: 'galvanil-sac',
    image: '/products/galvanil-sac.png',
    related: [
      { slug: 'galvanizli-sac', nameTr: 'Galvanizli Sac', nameEn: 'Galvanized Steel' },
      { slug: 'elektro-galvanizli-sac', nameTr: 'Elektro Galvanizli Sac', nameEn: 'Electro-galvanized Steel' },
    ],
    specs: [
      { titleKey: 'thickness', items: ['0.40 mm – 2.30 mm'] },
      { titleKey: 'width', items: ['600 mm – 1800 mm'] },
      { titleKey: 'coating', items: ['ZF100 – ZF140'] },
      {
        titleKey: 'grades',
        items: [
          'DX51D+ZF – DX57D+ZF',
          'S220GD+ZF – S550GD+ZF',
          'HCT450X+ZF – HCT980X (DP kaliteler)',
          'HX bake-hardening, IF ve HSLA +ZF',
        ],
      },
    ],
    tr: {
      title: 'Galvanil Sac',
      subtitle: 'Galvannealed (+ZF) — demir-çinko alaşım kaplama; kaynak ve boya tutunması öncelikli hatlar için.',
      about: [
        'Galvanil (galvannealed), sıcak daldırma çinko kaplamanın fırında alaşımlandırılmasıyla elde edilir. Kaplama demir-çinko fazlarından oluşur; mat gri görünür, toz tutmaz ve elektrod kaynak ile katodik boyaya HDG’ye göre daha uyumludur.',
        'Metal X, otomotiv gövde ve boyalı yapısal parça üreticilerine ZF100–ZF140 kaplamalı galvanil tedarik eder. Şekillendirme sırasında tozuma (powdering) riski kaplama kütlesi ve kalıpla ilişkilidir; parça geometrisine göre kaplamayı birlikte seçeriz.',
        'Açık hava korozyonunda saf çinko (Z) veya Zn-Al-Mg kaplamalar genellikle daha uzun ömürlüdür. Galvanil’in gücü boyalı, kaynaklı seri üretimdir.',
      ],
      features: [
        'Mat, kaynak ve e-coat uyumlu Fe-Zn yüzey',
        'ZF100 – ZF140 kaplama aralığı',
        'DX, yapısal, DP ve HSLA +ZF kaliteler',
        'Otomotiv gövde hatlarına uygun tedarik',
      ],
      standards: ['EN 10346: Sürekli sıcak daldırma çinko-demir alaşım kaplamalı çelikler (+ZF)'],
      applications: [
        'Otomotiv gövde ve takviye sacları',
        'Boyalı yapısal ve beyaz eşya parçaları',
        'Kaynaklı seri üretim komponentleri',
      ],
      cta: 'Galvanil (+ZF) kalite ve kaplama için teklif alın.',
      labels: labelsTr,
    },
    en: {
      title: 'Galvannealed Steel',
      subtitle: 'Iron-zinc alloy coating (+ZF) for lines that prioritize welding and paint adhesion.',
      about: [
        'Galvannealed sheet is made by annealing a hot-dip zinc coating so it becomes an iron-zinc alloy. The surface is matte grey, low-spangle and typically more compatible with resistance welding and e-coat than HDG.',
        'Metal X supplies ZF100–ZF140 galvannealed to automotive body and painted structural-part makers. Powdering during forming depends on coating mass and tooling; we select the coating against part geometry.',
        'For bare outdoor corrosion, pure zinc (Z) or Zn-Al-Mg coatings usually last longer. Galvanneal’s strength is painted, welded serial production.',
      ],
      features: [
        'Matte Fe-Zn surface for welding and e-coat',
        'ZF100 – ZF140 coating range',
        'DX, structural, DP and HSLA +ZF grades',
        'Supply for automotive body lines',
      ],
      standards: ['EN 10346 continuously hot-dip zinc-iron alloy coated steels (+ZF)'],
      applications: [
        'Automotive body and reinforcement sheet',
        'Painted structural and appliance parts',
        'Welded high-volume components',
      ],
      cta: 'Request a quote for galvannealed (+ZF) grade and coating.',
      labels: labelsEn,
    },
  },
  {
    slug: 'galfan-sac',
    image: '/products/galfan-sac.jpg',
    related: [
      { slug: 'galvanizli-sac', nameTr: 'Galvanizli Sac', nameEn: 'Galvanized Steel' },
      { slug: 'magnelis-zam-kaplamali-celik-sac', nameTr: 'Magnelis (ZAM)', nameEn: 'Magnelis ZAM' },
      { slug: 'aluzinc-sac', nameTr: 'Aluzinc Sac', nameEn: 'Aluzinc Steel' },
    ],
    specs: [
      { titleKey: 'thickness', items: ['0.40 mm – 4.00 mm'] },
      { titleKey: 'width', items: ['600 mm – 1800 mm'] },
      { titleKey: 'coating', items: ['ZA095 – ZA300'] },
      {
        titleKey: 'grades',
        items: [
          'DX51D+ZA – DX57D+ZA',
          'S220GD+ZA – S550GD+ZA',
          'HX260LAD+ZA – HX500LAD+ZA',
        ],
      },
    ],
    tr: {
      title: 'Galfan Sac',
      subtitle: 'Çinko-alüminyum kaplama (+ZA) — HDG’den daha yüksek korozyon direnci, iyi şekillendirilebilirlik.',
      about: [
        'Galfan, yaklaşık %95 çinko ve %5 alüminyum (gerekirse mischmetal) içeren sıcak daldırma kaplamadır (EN 10346, +ZA). Ötektik mikro yapı, aynı çinko gramajındaki HDG’ye göre genellikle daha iyi korozyon ve şekillendirme davranışı verir.',
        'Metal X, tarım, yapı, kablo kanalı ve derin çekme parçalar için ZA095–ZA300 kaplamalı Galfan tedarik eder. Magnelis / ZAM (Zn-Al-Mg) daha agresif atmosferlerde bir üst basamak; Galfan ise klasik galvaniz ile magnezyumlu kaplamalar arasında dengeli bir seçenektir.',
        'Kesik kenar ve büküm bölgelerinde kaplama sürekliliği HDG’ye göre çoğu uygulamada daha iyidir. Kaynak ve boya prosesini parça bazında doğrularız.',
      ],
      features: [
        'Zn-%5 Al kaplama, HDG’ye göre yüksek korozyon direnci',
        'ZA095 – ZA300 kaplama aralığı',
        'İyi şekillendirme ve kenar koruması',
        'Magnelis/ZAM’a geçişte ara çözüm',
      ],
      standards: ['EN 10346: Sürekli sıcak daldırma çinko-alüminyum kaplamalı çelikler (+ZA)'],
      applications: [
        'Tarım makineleri ve yapı profilleri',
        'Kablo kanalı, HVAC ve ekipman gövdesi',
        'Derin çekme ve bükümlü parçalar',
      ],
      cta: 'Galfan (+ZA) kalite ve kaplama için iletişime geçin.',
      labels: labelsTr,
    },
    en: {
      title: 'Galfan Steel',
      subtitle: 'Zinc-aluminium coating (+ZA) — higher corrosion resistance than HDG with good formability.',
      about: [
        'Galfan is a hot-dip coating of about 95% zinc and 5% aluminium, sometimes with mischmetal (EN 10346, +ZA). The eutectic microstructure usually gives better corrosion and forming behaviour than equal-mass HDG.',
        'Metal X supplies ZA095–ZA300 Galfan for agriculture, construction, cable trunking and deep-drawn parts. Magnelis / ZAM (Zn-Al-Mg) is the next step in aggressive atmospheres; Galfan sits between classic galvanizing and magnesium-bearing coatings.',
        'Cut-edge and bend protection is typically better than HDG. We confirm welding and paint practice part by part.',
      ],
      features: [
        'Zn-5% Al coating, higher corrosion resistance than HDG',
        'ZA095 – ZA300 coating range',
        'Good forming and edge protection',
        'A step between HDG and Magnelis/ZAM',
      ],
      standards: ['EN 10346 continuously hot-dip zinc-aluminium coated steels (+ZA)'],
      applications: [
        'Agricultural machinery and building profiles',
        'Cable trunking, HVAC and equipment housings',
        'Deep-drawn and bent parts',
      ],
      cta: 'Contact us for Galfan (+ZA) grade and coating.',
      labels: labelsEn,
    },
  },
];

export function getFlatSteelProduct(slug: string): FlatSteelProduct | undefined {
  return extraFlatSteelProducts.find((p) => p.slug === slug);
}
