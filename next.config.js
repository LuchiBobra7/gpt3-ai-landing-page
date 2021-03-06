/** @type {import('next').NextConfig} */
require('dotenv').config()

module.exports = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    SERVER_API_ENDPOINT: process.env.SERVER_API_ENDPOINT,
  },
  images: {
    domains: ['media.graphcms.com'],
  },
}
