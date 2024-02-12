/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

const nextConfig = {
  i18n,
  reactStrictMode: false,
  swcMinify: false,
  env: {
    BASE_URL: 'http://185.233.3.103:8080/api'
  },
  images: {
    domains: ['imageio.forbes.com', '185.182.219.249', '185.233.3.103'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '185.233.3.103',
        port: '',
        pathname: '/storage/**',
      },
    ],
  },
}

module.exports = nextConfig
