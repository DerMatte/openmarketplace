/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'images.pexels.com'],
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
