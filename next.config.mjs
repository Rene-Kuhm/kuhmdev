import { withContentlayer } from 'next-contentlayer'
import bundleAnalyzer from '@next/bundle-analyzer'
import crypto from 'crypto'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static exports
  //output: 'export',
  
  // Optimize image handling
  images: {
    unoptimized: false, // Enable Bun's built-in image optimization
    formats: ['image/avif', 'image/webp'], // Prefer AVIF and WebP formats
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96],
  },

  // Enhanced experimental features for better performance
  experimental: {
    optimizeCss: true, // Enable CSS optimization
    optimizePackageImports: [
      'react-icons',
      '@heroicons/react',
      'lodash',
      '@emotion/react',
      'framer-motion'
    ], // Optimize package imports
    webVitalsAttribution: ['CLS', 'LCP', 'FCP', 'FID', 'TTFB']
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
  productionBrowserSourceMaps: false,

  // Webpack configuration for better code splitting
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      // Production optimizations
      config.optimization = {
        ...config.optimization,
        moduleIds: 'deterministic',
        chunkIds: 'deterministic',
        mangleExports: true,
        concatenateModules: true,
        mergeDuplicateChunks: true,
        removeEmptyChunks: true,
        runtimeChunk: 'single',
        splitChunks: {
          chunks: 'all',
          minSize: 8000,
          maxSize: 20000,
          minChunks: 1,
          maxAsyncRequests: 30,
          maxInitialRequests: 30,
          enforceSizeThreshold: 50000,
          cacheGroups: {
            default: false,
            vendors: false,
            framework: {
              name: 'framework',
              test: /[\\/]node_modules[\\/](react|react-dom|next|framer-motion)[\\/]/,
              priority: 40,
              chunks: 'all',
              enforce: true,
            },
            lib: {
              test(module) {
                return (
                  module.size() > 40000 &&
                  /node_modules[/\\]/.test(module.identifier())
                )
              },
              name(module) {
                const hash = crypto.createHash('sha1')
                hash.update(module.identifier())
                return 'lib-' + hash.digest('hex').substring(0, 8)
              },
              priority: 30,
              minChunks: 1,
              reuseExistingChunk: true,
            },
            commons: {
              name: 'commons',
              minChunks: 2,
              priority: 20,
              reuseExistingChunk: true,
            },
          },
        },
      }
    }

    return config
  },
}

// Apply both HOCs
export default withContentlayer(withBundleAnalyzer(nextConfig))
