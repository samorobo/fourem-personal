'use client';

import { useEffect, useState } from 'react';

const images = [
  '/images/slider-1.avif',
  '/images/slider-2.avif',
  '/images/slider-3.avif',
  '/images/slider-4.avif',
  '/images/slider-5.avif',
  '/images/slider-6.avif',
];

export default function BackgroundSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden z-0">
      <div className="relative w-full h-full">
        {images.map((image, index) => {
          const isActive = index === currentSlide;
          const isNext = index === (currentSlide + 1) % images.length;
          
          return (
            <div
              key={image}
              className={`absolute inset-0 bg-cover bg-center transition-transform duration-1000 ${
                isActive ? 'z-10' : 'z-0'
              }`}
              style={{
                backgroundImage: `url(${image})`,
                transform: isActive ? 'translateX(0)' : 'translateX(100%)',
                opacity: isActive || isNext ? 1 : 0,
                transition: 'transform 1s ease-in-out, opacity 0.5s ease-in-out',
              }}
            />
          );
        })}
      </div>
      <div className="absolute inset-0 bg-black/30 z-20" />
    </div>
  );
}
