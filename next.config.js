/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'raw.githubusercontent.com',
      'template66389.motopreview.com',
      'placeimg.com',
      'images.unsplash.com',
      'kanni.wpengine.com',
    ],
  },
};

module.exports = nextConfig;
