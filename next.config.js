/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["i.ibb.co", "source.unsplash.com"],
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://apiv2.vieclam24h.vn/:path*' // Chuyển tiếp yêu cầu đến API
      }
    ]
  }
}

module.exports = nextConfig
