/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    domains: ['images.placeholders.dev', 'via.assets.so'],
  },
}

module.exports = nextConfig
