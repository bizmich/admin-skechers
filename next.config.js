/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '365trends.tj',
      },
    ],
  },
};

module.exports = nextConfig;
