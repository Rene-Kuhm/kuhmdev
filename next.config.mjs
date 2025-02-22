import { withContentlayer } from 'next-contentlayer'
import bundleAnalyzer from '@next/bundle-analyzer'
import crypto from 'crypto'

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
    formats: ['image/avif', 'image/webp'], // Prefer AVIF and WebP formats
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96],
  },

  // Enhanced experimental features for better performance
  experimental: {
    optimizeCss: true, // Enable CSS optimization
    optimizePackageImports: ['react-icons', '@heroicons/react'], // Optimize package imports
    webpackBuildWorker: true, // Enable webpack build worker
    turbo: {
      resolveAlias: {
        underscore: 'lodash',
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
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      // Production optimizations
      config.optimization = {
        ...config.optimization,
        moduleIds: 'deterministic',
        runtimeChunk: {
          name: 'runtime',
        },
        splitChunks: {
          chunks: 'all',
          minSize: 10000,
          maxSize: 25000,
          minChunks: 1,
          maxAsyncRequests: 10,
          maxInitialRequests: 10,
          cacheGroups: {
            framework: {
              name: 'framework',
              test: /[\\/]node_modules[\\/](react|react-dom|next)[\\/]/,
              priority: 40,
              chunks: 'all',
              enforce: true,
            },
            commons: {
              name: 'commons',
              test: /[\\/]node_modules[\\/]/,
              priority: 30,
              chunks: 'all',
              minChunks: 2,
              reuseExistingChunk: true,
            },
            lib: {
              test(module) {
                return (
                  module.size() > 50000 &&
                  /node_modules[/\\]/.test(module.identifier())
                )
              },
              name(module) {
                const hash = crypto.createHash('sha1')
                hash.update(module.identifier())
                return 'lib-' + hash.digest('hex').substring(0, 8)
              },
              priority: 20,
              minChunks: 1,
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
