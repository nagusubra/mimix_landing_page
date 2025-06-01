/** @type {import('next').NextConfig} */
const nextConfig = {
  // Use esbuild for minification instead of SWC or Terser
  swcMinify: true,
  experimental: {
    // Enable the built-in esbuild configuration
    turbotrace: {
      logLevel: "error",
      contextDirectory: __dirname,
    }
  }
};

export default nextConfig;