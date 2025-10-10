import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true, // Required for static exports
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Allow all external images
      },
    ],
  },
  // Add any domains you need to load images from
  // This is required for external images
  // images: {
  //   domains: ['images.unsplash.com', 'your-other-domain.com'],
  // },
};

export default nextConfig;
