import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Production build için
  poweredByHeader: false,
  // Trailing slash ayarı
  trailingSlash: false,
  // Static dosyaların doğru yüklenmesi için
  // Images ve static assets için optimizasyon
  images: {
    unoptimized: false,
  },
};

export default nextConfig;


