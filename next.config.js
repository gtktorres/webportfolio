/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async rewrites() {
    return [
      {
        source: '/RCSB',
        destination: '/html/Rat Catcher Scumbag .html'
      },
    ]
  }
}

module.exports = nextConfig
