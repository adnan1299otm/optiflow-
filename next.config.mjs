/** @type {import('next').NextConfig} */
const nextConfig = {
  // Compress all responses
  compress: true,

  // Remove X-Powered-By header
  poweredByHeader: false,

  // Strict mode for better performance
  reactStrictMode: true,

  // Image optimization
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'prod.spline.design' },
    ],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000, // 1 year cache for images
    dangerouslyAllowSVG: false,
  },

  // Security headers + caching
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
        ],
      },
      {
        // Cache static assets for 1 year
        source: '/images/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },

  // Experimental performance features
  experimental: {
    optimizePackageImports: [
      'framer-motion',
      'lucide-react',
    ],
  },

  // Webpack: ignore Spline WASM warning
  webpack: (config) => {
    config.module.rules.push({
      test: /\.wasm$/,
      type: 'asset/resource',
    });
    return config;
  },
};

export default nextConfig;
