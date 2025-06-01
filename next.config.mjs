/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable SWC in favor of Babel
  swcMinify: false,
  compiler: {
    // Disable SWC compiler
    emotion: false,
    reactRemoveProperties: false,
    removeConsole: false,
    styledComponents: false
  }
};

export default nextConfig;