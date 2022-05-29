/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

module.exports = {
  async rewrites() {
      return [
          {
              source: '/channels',
              destination: 'http://127.0.0.1:5000/channels'
          },
      ]
  },
}

//module.exports = nextConfig
