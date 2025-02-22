/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static exports
  output: 'export',
  
  // Optimize image handling
  images: {
    unoptimized: false, // Enable Bun's built-in image optimization
    formats: ['image/webp'], // Prefer WebP format
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },

  // Enable experimental features for better performance
  experimental: {
    optimizeCss: true, // Enable CSS optimization
    bundlePagesRouterDependencies: true,
    optimizePackageImports: ['framer-motion'],
  },

  // Configure compiler options for better performance
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Enable React strict mode for better development
  reactStrictMode: true,

  // Optimize build settings
  poweredByHeader: false,
  compress: true,
};

export default nextConfig;
