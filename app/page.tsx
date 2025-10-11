'use client';

import Link from 'next/link';
import BackgroundSlider from '@/components/BackgroundSlider';

export default function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center p-4 overflow-hidden">
      {/* Background Slider */}
      <BackgroundSlider />
      
      {/* Main Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto text-center">
        <Link href="/about" className="cursor-pointer">
          <h1 className="text-[48px] sm:text-[80px] md:text-[120px] lg:text-[160px] xl:text-[200px] font-extralight tracking-wide text-white leading-[0.9] md:leading-none">
            Fourem
          </h1>
        </Link>
      </div>

      {/* Mobile Menu Button - Only shown on mobile */}
      <div className="lg:hidden fixed bottom-6 right-6 z-50">
        <Link 
          href="/about" 
          className="flex items-center justify-center w-14 h-14 bg-black/80 text-white rounded-full shadow-lg hover:bg-black transition-colors backdrop-blur-sm"
          aria-label="Go to about page"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
