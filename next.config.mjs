/** @type {import('next').NextConfig} */
const nextConfig = {
  // Skip pre-rendering API routes that use database connections
  output: 'standalone',
  experimental: {
    // Disable static optimization for API routes
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },
};

export default nextConfig;
