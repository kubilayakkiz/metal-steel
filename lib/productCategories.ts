/**
 * Ürün kategorileri ve alt ürünler
 */

export interface ProductItem {
  slug: string;
  nameTr: string;
  nameEn?: string;
  image?: string;
}

export interface ProductCategory {
  slug: string;
  nameTr: string;
  nameEn?: string;
  description?: string;
  products: ProductItem[];
}

export const productCategories: ProductCategory[] = [
  {
    slug: 'yassi-celikler',
    nameTr: 'Yassı Çelikler',
    nameEn: 'Flat Steels',
    description: 'Sıcak ve soğuk haddelenmiş, kaplamalı ve işlenmiş yassı çelik ürünleri.',
    products: [
      { slug: 'zam', nameTr: 'ZAM (Min 25 Yıl Yüksek Korozyon Dayanımı)', nameEn: 'ZAM', image: '/ZAM.jpg' },
      { slug: 'magnelis-zam-kaplamali-celik-sac', nameTr: 'Magnelis (ZAM) Kaplamalı Çelik Sac', nameEn: 'Magnelis ZAM', image: '/magnelis1.jpg' },
      { slug: 'sicak-haddelenmis-sac', nameTr: 'Sıcak Haddelenmiş Sac', nameEn: 'Hot Rolled Steel', image: '/sicakhaddelenmissac.jpg' },
      { slug: 'sicak-haddelenmis-asitlenmis-sac', nameTr: 'Sıcak Haddelenmiş Asitlenmiş Sac', nameEn: 'Pickled Hot Rolled', image: '/asitlenmissac.jpg' },
      { slug: 'soguk-haddelenmis-sac', nameTr: 'Soğuk Haddelenmiş Sac', nameEn: 'Cold Rolled Steel', image: '/sogukhaddelenmissac.jpg' },
      { slug: 'galvanizli-sac', nameTr: 'Galvanizli Sac', nameEn: 'Galvanized Steel', image: '/galvanizsac.jpg' },
      { slug: 'boyali-sac', nameTr: 'Boyalı Sac', nameEn: 'Pre-painted Steel', image: '/Boyali-Sac.jpg' },
      { slug: 'asitlenmis-sac', nameTr: 'Asitlenmiş Sac', nameEn: 'Pickled Steel', image: '/asitlenmissac.jpg' },
      { slug: 'silisli-sac', nameTr: 'Silisli Sac', nameEn: 'Silicon Steel', image: '/urunler.jpg' },
      { slug: 'gunes-enerji-santralleri', nameTr: 'Güneş Enerji Santralleri', nameEn: 'Solar Energy', image: '/urunler.jpg' },
    ],
  },
  {
    slug: 'boru-ve-kutu-profiller',
    nameTr: 'Boru ve Kutu Profiller',
    nameEn: 'Pipe and Box Profiles',
    description: 'Çelik boru ve kutu profil ürünleri.',
    products: [
      { slug: 'boru-profilleri', nameTr: 'Boru Profilleri', nameEn: 'Pipe Profiles', image: '/boru_profil.jpg' },
      { slug: 'kare-dikdortgen-kutu-profil', nameTr: 'Kare ve Dikdörtgen Kutu Profil', nameEn: 'Square and Rectangular Box Profile', image: '/boru_profil.jpg' },
      { slug: 'c-profil', nameTr: 'C Profil', nameEn: 'C Profile', image: '/boru_profil.jpg' },
    ],
  },
  {
    slug: 'hadde-profil',
    nameTr: 'Hadde Profil Grubu',
    nameEn: 'Rolled Profile Group',
    description: 'Hadde profil ürünleri.',
    products: [
      { slug: 'hea-profiller', nameTr: 'HEA Profiller', nameEn: 'HEA Profiles', image: '/insaatdemiri.jpg' },
      { slug: 'heb-profiller', nameTr: 'HEB Profiller', nameEn: 'HEB Profiles', image: '/insaatdemiri.jpg' },
      { slug: 'ipe-profiller', nameTr: 'IPE Profiller', nameEn: 'IPE Profiles', image: '/insaatdemiri.jpg' },
      { slug: 'npi-profiller', nameTr: 'NPI Profiller', nameEn: 'NPI Profiles', image: '/insaatdemiri.jpg' },
      { slug: 'npu-profiller', nameTr: 'NPU Profiller', nameEn: 'NPU Profiles', image: '/insaatdemiri.jpg' },
      { slug: 'kosebent-demiri', nameTr: 'Köşebent Demiri', nameEn: 'Angle Iron', image: '/insaatdemiri.jpg' },
      { slug: 'insaat-demiri', nameTr: 'İnşaat Demiri', nameEn: 'Rebar', image: '/insaatdemiri.jpg' },
    ],
  },
];

export function getCategoryBySlug(slug: string): ProductCategory | undefined {
  return productCategories.find((c) => c.slug === slug);
}

export function getProductBySlug(slug: string): ProductItem | undefined {
  for (const category of productCategories) {
    const product = category.products.find((p) => p.slug === slug);
    if (product) return product;
  }
  return undefined;
}
