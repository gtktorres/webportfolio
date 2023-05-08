/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async rewrites() {
    return [
      {
        source: '/RCSB',
        destination: '/public/html/Rat Catcher Scumbag .html'
      },
    ]
  }
}

module.exports = nextConfig
