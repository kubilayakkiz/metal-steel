import { ReactNode } from 'react';

interface ProductSectionWithImageProps {
  children: ReactNode;
  src: string;
  alt: string;
  imagePosition?: 'left' | 'right';
  bgColor?: 'white' | 'gray';
  /** Görsel üzerindeki overlay opacity (0-100). Yüksek = görsel daha soluk. */
  imageOverlayOpacity?: number;
  /** Görsel opacity (0-100). Düşük = görsel daha soluk/şeffaf. */
  imageOpacity?: number;
  /** Kompakt mod: daha az yükseklik */
  compact?: boolean;
  /** Görsel full genişlik (arka plan gibi) */
  imageFullWidth?: boolean;
}

/** Full page bölüm: içerik ve görsel yan yana, sağ/sol alternatif. */
export default function ProductSectionWithImage({
  children,
  src,
  alt,
  imagePosition = 'left',
  bgColor = 'white',
  imageOverlayOpacity = 20,
  imageOpacity,
  compact = false,
  imageFullWidth = false,
}: ProductSectionWithImageProps) {
  const bgClass = bgColor === 'gray' ? 'bg-gray-50' : 'bg-white';
  const imageOrder = imagePosition === 'left' ? 'lg:order-1' : 'lg:order-2';
  const contentOrder = imagePosition === 'left' ? 'lg:order-2' : 'lg:order-1';
  const minH = compact ? 'min-h-[40vh]' : 'min-h-[70vh]';
  const contentPy = compact ? 'py-10 md:py-14' : 'py-16 md:py-24';
  const imgWidth = imageFullWidth ? 'lg:w-[50%]' : 'lg:w-[45%]';
  const imgMinH = compact ? 'lg:min-h-[40vh]' : 'lg:min-h-[70vh]';

  return (
    <section className={`${minH} flex flex-col lg:flex-row ${bgClass}`}>
      {/* Görsel - tam yükseklik, sticky */}
      <div
        className={`relative w-full ${imgWidth} min-h-[250px] ${imgMinH} flex-shrink-0 ${imageOrder}`}
      >
        <img
          src={src}
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover"
          style={imageOpacity !== undefined ? { opacity: imageOpacity / 100 } : undefined}
        />
        <div className="absolute inset-0" style={{ backgroundColor: `rgb(61 79 95 / ${imageOverlayOpacity}%)` }} />
      </div>

      {/* İçerik */}
      <div
        className={`flex-1 flex items-center ${contentPy} px-4 md:px-8 lg:px-12 xl:px-16 ${contentOrder}`}
      >
        <div className="w-full max-w-2xl">{children}</div>
      </div>
    </section>
  );
}
