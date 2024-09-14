/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: ''
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        port: ''
      },
      {
        protocol: 'https',
        hostname: 'cdn-images.vtv.vn',
        port: ''
      },
      {
        protocol: 'https',
        hostname: 'thanhbinh.dongthap.gov.vn',
        port: ''
      }
    ]
  }
}

module.exports = nextConfig
