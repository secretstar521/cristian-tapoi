/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  reactStrictMode: true,
  trailingSlash: false,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
