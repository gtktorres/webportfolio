/** @type {import('next').NextConfig} */
const nextConfig = {
  //   experimental: {
  //   appDir: true,
  // },
  async rewrites() {
    return {
      beforeFiles: [
        // These rewrites are checked after headers/redirects
        // and before all files including _next/public files which
        // allows overriding page files
        {
        source: '/RCSB',
        destination: '/public/html/Rat Catcher Scumbag .html'
        },
      ]
    }
  }
}

module.exports = nextConfig
