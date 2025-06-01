import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Enable the built-in esbuild configuration
    turbotrace: {
      logLevel: "error",
      contextDirectory: __dirname,
      forceSwcTransforms: false,
    }
  }
};

export default nextConfig;