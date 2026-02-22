/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: '10mb',
    },
  },
  images: {
    domains: [],
  },
};

module.exports = {
  eslint: {
    ignoreDuringBuilds: true,
  },
};
module.exports = nextConfig;
