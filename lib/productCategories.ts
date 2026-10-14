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
    description: 'Corten, sıcak ve soğuk hadde, asitlenmiş, galvaniz, elektro galvaniz, boyalı, Alusi, Aluzinc, Galvanil, Galfan ve Magnelis yassı çelik ürünleri.',
    products: [
      { slug: 'corten-sac', nameTr: 'Corten Sac', nameEn: 'Corten Steel', image: '/products/corten-sac.png' },
      { slug: 'sicak-haddelenmis-sac', nameTr: 'Sıcak Haddelenmiş Sac', nameEn: 'Hot Rolled Steel', image: '/products/sicak-haddelenmis-sac.jpg' },
      { slug: 'sicak-haddelenmis-asitlenmis-sac', nameTr: 'Sıcak Haddelenmiş Asitlenmiş Sac', nameEn: 'Pickled Hot Rolled', image: '/products/asitlenmis-sac.png' },
      { slug: 'soguk-haddelenmis-sac', nameTr: 'Soğuk Haddelenmiş Sac', nameEn: 'Cold Rolled Steel', image: '/products/soguk-haddelenmis-sac.jpg' },
      { slug: 'galvanizli-sac', nameTr: 'Galvaniz Kaplı Sac', nameEn: 'Galvanized Steel', image: '/products/galvanizli-sac.jpg' },
      { slug: 'elektro-galvanizli-sac', nameTr: 'Elektro Galvaniz Kaplı Sac', nameEn: 'Electro-galvanized Steel', image: '/products/elektro-galvanizli-sac.jpg' },
      { slug: 'boyali-sac', nameTr: 'Boyalı Sac', nameEn: 'Pre-painted Steel', image: '/products/boyali-sac.jpg' },
      { slug: 'alusi-sac', nameTr: 'Alüminyum-Silikon Alaşımlı (Alusi) Sac', nameEn: 'Alusi Steel', image: '/products/alusi-sac.jpg' },
      { slug: 'aluzinc-sac', nameTr: 'Alüminyum-Çinko-Silikon Alaşımlı (Aluzinc) Sac', nameEn: 'Aluzinc Steel', image: '/products/aluzinc-sac.jpg' },
      { slug: 'galvanil-sac', nameTr: 'Galvanil (Galvannealed) Sac', nameEn: 'Galvannealed Steel', image: '/products/galvanil-sac.png' },
      { slug: 'galfan-sac', nameTr: 'Galfan Sac', nameEn: 'Galfan Steel', image: '/products/galfan-sac.jpg' },
      { slug: 'magnelis-zam-kaplamali-celik-sac', nameTr: 'Zinc-Magnezyum (Magnelis) Sac', nameEn: 'Zinc-Magnesium (Magnelis)', image: '/products/magnelis-sac.jpg' },
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

export function getYassiProducts(): ProductItem[] {
  return getCategoryBySlug('yassi-celikler')?.products ?? [];
}

export function getProductDisplayName(product: ProductItem, locale?: string): string {
  return locale === 'en' && product.nameEn ? product.nameEn : product.nameTr;
}
