import type { NextConfig } from "next";

const removedFlatSteelRedirects = [
  { source: '/urunler/zam', destination: '/urunler/magnelis-zam-kaplamali-celik-sac' },
  { source: '/urunler/zam-detay', destination: '/urunler/magnelis-zam-kaplamali-celik-sac' },
  { source: '/urunler/asitlenmis-sac', destination: '/urunler/sicak-haddelenmis-asitlenmis-sac' },
  { source: '/urunler/silisli-sac', destination: '/urunler/yassi-celikler' },
  { source: '/urunler/gunes-enerji-santralleri', destination: '/sektorler/enerji' },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  trailingSlash: false,
  images: {
    unoptimized: false,
  },
  async redirects() {
    return removedFlatSteelRedirects.flatMap(({ source, destination }) => [
      { source, destination, permanent: true },
      {
        source: `/:locale(en|fr|ar|ru)${source}`,
        destination: `/:locale${destination}`,
        permanent: true,
      },
    ]);
  },
};

export default nextConfig;
