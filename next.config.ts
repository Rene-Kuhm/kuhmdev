import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    webpackBuildWorker: true,
    serverComponentsExternalPackages: [],
  },
  transpilePackages: ['@rspack/core'],
  webpack: (config, { dev, isServer }) => {
    if (process.env.USE_RSPACK) {
      return {
        ...config,
        ...require('./rspack.config.js'),
      };
    }
    return config;
  },
};

export default nextConfig;
