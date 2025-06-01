/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuration options
  eslint: {
    ignoreDuringBuilds: false,
  },
  images: {
    domains: ['images.pexels.com'],
  },
  // Ensure output is optimized
  output: 'standalone',
  // Improve production performance
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;