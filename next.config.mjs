/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuration options
  eslint: {
    // Only run ESLint on build in production
    ignoreDuringBuilds: false,
  },
};

export default nextConfig;