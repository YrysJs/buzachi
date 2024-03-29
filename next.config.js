/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

const nextConfig = {
  i18n,
  reactStrictMode: false,
  swcMinify: true,
  env: {
    BASE_URL: 'https://buzachineft.kz:8080/api'
  },
  images: {
    domains: ['buzachineft.kz'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'buzachineft.kz',
        port: '',
        pathname: '/storage/**',
      },
    ],
  },
}

module.exports = nextConfig
