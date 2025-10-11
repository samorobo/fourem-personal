'use client';

import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageCarouselProps {
  images: string[];
}

export default function ImageCarousel({ images }: ImageCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    align: 'start',
    slidesToScroll: 1,
    containScroll: 'trimSnaps',
    breakpoints: {
      '(min-width: 640px)': { slidesToScroll: 2 },
      '(min-width: 1024px)': { slidesToScroll: 3 },
    },
  });
  
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(true);
  const [slidesPerView, setSlidesPerView] = useState(1);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  const updateSlidesPerView = useCallback(() => {
    if (!emblaApi) return;
    
    // Get the current slides per view based on container width
    const containerWidth = emblaApi.containerNode().getBoundingClientRect().width;
    let slides = 1;
    
    if (containerWidth >= 1024) {
      slides = 3;
    } else if (containerWidth >= 640) {
      slides = 2;
    }
    
    setSlidesPerView(slides);
    
    // Update the slide width based on the number of slides per view
    const slidesInView = emblaApi.slidesInView();
    const slideNodes = emblaApi.slideNodes();
    
    slideNodes.forEach((slide, index) => {
      const slideEl = slide as HTMLElement;
      slideEl.style.flex = `0 0 calc(100% / ${slides} - 1rem)`;
      slideEl.style.minWidth = `0`;
      slideEl.style.padding = '0 0.5rem';
    });
    
    emblaApi.reInit();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    
    // Initial setup
    onSelect();
    updateSlidesPerView();
    
    // Event listeners
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    
    // Handle window resize
    const handleResize = () => {
      updateSlidesPerView();
      emblaApi.reInit();
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
      window.removeEventListener('resize', handleResize);
    };
  }, [emblaApi, onSelect, updateSlidesPerView]);

  return (
    <div className="relative w-full px-4 md:px-6 lg:px-0">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 px-2 transition-all duration-300"
              style={{
                flex: `0 0 calc(100% / ${slidesPerView} - 1rem)`,
                minWidth: 0,
              }}
            >
              <div className="relative pb-[75%] overflow-hidden">
                <img
                  src={image}
                  alt={`Image ${index + 1}`}
                  className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading={index > 1 ? 'lazy' : 'eager'}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Navigation Buttons */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 -translate-x-2 md:-translate-x-4">
        <button 
          onClick={scrollPrev}
          disabled={!prevBtnEnabled}
          className={`p-2 bg-white/80 hover:bg-white rounded-full shadow-md transition-all ${
            prevBtnEnabled ? 'opacity-100 cursor-pointer' : 'opacity-50 cursor-default'
          }`}
          aria-label="Previous images"
        >
          <ChevronLeft size={24} className="text-black" />
        </button>
      </div>
      
      <div className="absolute top-1/2 -translate-y-1/2 right-0 translate-x-2 md:translate-x-4">
        <button 
          onClick={scrollNext}
          disabled={!nextBtnEnabled}
          className={`p-2 bg-white/80 hover:bg-white rounded-full shadow-md transition-all ${
            nextBtnEnabled ? 'opacity-100 cursor-pointer' : 'opacity-50 cursor-default'
          }`}
          aria-label="Next images"
        >
          <ChevronRight size={24} className="text-black" />
        </button>
      </div>
      
      {/* Dots Navigation - Only show on mobile */}
      <div className="lg:hidden flex justify-center mt-4 space-x-2">
        {Array.from({ length: Math.ceil(images.length / slidesPerView) }).map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index * slidesPerView)}
            className={`w-2 h-2 rounded-full transition-colors ${
              emblaApi?.selectedScrollSnap() === index * slidesPerView ? 'bg-black' : 'bg-gray-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
