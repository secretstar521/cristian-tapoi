/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  reactStrictMode: true,
  trailingSlash: false,
};

module.exports = nextConfig;
