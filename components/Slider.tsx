'use client';

import { useEffect, useRef, useState } from 'react';

interface SliderButton {
  text: string;
  href: string;
  variant?: 'primary' | 'secondary';
}

interface SliderSlide {
  src: string;
  alt: string;
  title?: string;
  subtitle?: string;
  buttons?: SliderButton[];
  type?: 'image' | 'video';
  poster?: string;
}

interface SliderProps {
  images: SliderSlide[];
  autoPlayInterval?: number;
}

function isVideoSlide(slide: SliderSlide) {
  return slide.type === 'video' || /\.(mp4|webm|mov|ogg)(\?|$)/i.test(slide.src);
}

export default function Slider({ images, autoPlayInterval = 5000 }: SliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;
      if (index === currentIndex) {
        video.currentTime = 0;
        const playAttempt = video.play();
        if (playAttempt) playAttempt.catch(() => undefined);
      } else {
        video.pause();
      }
    });
  }, [currentIndex]);

  useEffect(() => {
    if (images.length <= 1) return;

    const current = images[currentIndex];
    const delay = isVideoSlide(current) ? Math.max(autoPlayInterval, 12000) : autoPlayInterval;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, delay);

    return () => clearInterval(interval);
  }, [images, currentIndex, autoPlayInterval]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (images.length === 0) return null;

  return (
    <div className="relative w-full h-[85vh] md:h-[90vh] lg:h-screen overflow-hidden">
      <div className="relative w-full h-full">
        {images.map((slide, index) => {
          const video = isVideoSlide(slide);
          return (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              {video ? (
                <video
                  ref={(el) => {
                    videoRefs.current[index] = el;
                  }}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  muted
                  loop
                  playsInline
                  autoPlay={index === currentIndex}
                  preload="auto"
                  aria-label={slide.alt}
                  onCanPlay={(event) => {
                    if (index === currentIndex) {
                      event.currentTarget.play().catch(() => undefined);
                    }
                  }}
                >
                  <source src={slide.src} type="video/mp4" />
                </video>
              ) : (
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
              )}
              <div className="absolute inset-0 bg-black/30"></div>

              {(slide.title || slide.subtitle || slide.buttons) && (
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="container mx-auto px-4 text-center">
                    {slide.title && (
                      <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 drop-shadow-lg animate-fade-in">
                        {slide.title}
                      </h2>
                    )}
                    {slide.subtitle && (
                      <p className="text-lg md:text-xl lg:text-2xl text-white mb-6 md:mb-8 max-w-3xl mx-auto drop-shadow-md animate-fade-in-delay">
                        {slide.subtitle}
                      </p>
                    )}
                    {slide.buttons && slide.buttons.length > 0 && (
                      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay-2">
                        {slide.buttons.map((button, btnIndex) => (
                          <a
                            key={btnIndex}
                            href={button.href}
                            className={`px-6 md:px-8 py-3 md:py-4 rounded font-bold text-base md:text-lg transition-all duration-300 ${
                              button.variant === 'secondary'
                                ? 'bg-white/90 text-[#3d4f5f] hover:bg-white hover:scale-105 shadow-lg'
                                : 'bg-[#3d4f5f] text-white hover:bg-[#1a16a8] hover:scale-105 shadow-lg'
                            }`}
                          >
                            {button.text}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/80 hover:bg-white text-[#3d4f5f] p-3 rounded-full transition-all duration-300 shadow-lg hover:scale-110"
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/80 hover:bg-white text-[#3d4f5f] p-3 rounded-full transition-all duration-300 shadow-lg hover:scale-110"
            aria-label="Next slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {images.length > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? 'bg-[#3d4f5f] w-8 h-3'
                  : 'bg-white/60 hover:bg-white/80 w-3 h-3'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
