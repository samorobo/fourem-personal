'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#9A9A9A] flex items-center justify-center">
      {/* Top Bar */}
      <div className="absolute top-0 left-0 right-0 bg-white h-[50px] flex items-center justify-between px-8">
        <div className="w-8 h-8 bg-black"></div>
        <div className="text-xs text-[#3C3C34]">
          This website was created by <span className="underline">CEIM DIGITAL</span>
        </div>
      </div>

      {/* Main Content */}
      <Link href="/about" className="cursor-pointer">
        <h1 className="text-[200px] font-extralight tracking-wide text-white leading-none">
          Fourem
        </h1>
      </Link>

      {/* Vertical Divider Line */}
      {/* <div className="absolute top-[50px] bottom-0 left-1/2 w-[60px] bg-[#7A7A7A] -translate-x-1/2"></div> */}
    </div>
  );
}
