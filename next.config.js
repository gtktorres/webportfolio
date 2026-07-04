/** @type {import('next').NextConfig} */
import path from 'path';
const nextConfig = {
  // webpack: (config, { isServer }) => {
  //   // This is a workaround for the issue with the 'sharp' package in Next.js
  //   if (!isServer) {
  //     config.resolve.fallback = {fs: false, dgram: false, child_process: false, tls: false, net: false};
  //   }
  //   return config;
  // },
   turbopack: {
    // Explicitly forces Turbopack to only watch your actual project folder
    root: path.join(import.meta.dirname), 
    
  },
  devIndicators: false,
}

export default nextConfig
