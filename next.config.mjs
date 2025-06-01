/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: false,
  webpack: (config, { isServer }) => {
    // Disable SWC loader
    config.module.rules.forEach((rule) => {
      if (rule.oneOf) {
        rule.oneOf.forEach((r) => {
          if (r.use && r.use.loader === 'next-swc-loader') {
            r.use = {
              loader: 'babel-loader',
              options: {
                cacheDirectory: true,
              },
            };
          }
        });
      }
    });
    return config;
  }
};

export default nextConfig;