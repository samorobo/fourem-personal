import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
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
  // Optional: Add basePath if your app is not deployed at the root of the domain
  // basePath: '/your-base-path',
};

export default nextConfig;
