/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuration options
  eslint: {
    ignoreDuringBuilds: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com'
      }
    ]
  },
  // Improve production performance
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;