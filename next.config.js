/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

const nextConfig = {
  i18n,
  reactStrictMode: false,
  swcMinify: false,
  env: {
    BASE_URL: 'https://zbs-a.a-lux.dev/api'
  },
  images: {
    domains: ['imageio.forbes.com', '185.182.219.249'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'zbs-a.a-lux.dev',
        port: '',
        pathname: '/storage/**',
      },
    ],
  },
}

module.exports = nextConfig
