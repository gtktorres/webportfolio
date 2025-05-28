/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // This is a workaround for the issue with the 'sharp' package in Next.js
    if (!isServer) {
      config.resolve.fallback = {fs: false, dgram: false, child_process: false, tls: false, net: false};
    }
    return config;
  },
}

module.exports = nextConfig
