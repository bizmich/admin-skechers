/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '365trends.tj',
      },
    ],
  },
};

module.exports = nextConfig;
