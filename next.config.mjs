import { withContentlayer } from 'next-contentlayer'
import bundleAnalyzer from '@next/bundle-analyzer'

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

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

  // Enhanced experimental features for better performance
  experimental: {
    optimizeCss: true, // Enable CSS optimization
    bundlePagesRouterDependencies: true,
    optimizePackageImports: [
      'framer-motion',
      'react-icons',
      'react-countup',
      '@emotion/is-prop-valid'
    ],
    modularizeImports: {
      'react-icons/?(((\\w*)?/?)*)': {
        transform: 'react-icons/{{ matches.[1] }}/{{member}}',
      },
    },
  },

  // Enhanced compiler options
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Enable React strict mode for better development
  reactStrictMode: true,

  // Optimize build settings
  poweredByHeader: false,
  compress: true,

  // Webpack configuration for better code splitting
  webpack: (config, { isServer }) => {
    // Optimize client-side bundles
    if (!isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        minSize: 20000,
        maxSize: 40000,
        minChunks: 1,
        maxAsyncRequests: 30,
        maxInitialRequests: 25,
        cacheGroups: {
          defaultVendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            reuseExistingChunk: true,
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
          },
        },
      }
    }
    return config
  },
}

export default withBundleAnalyzer(nextConfig)
