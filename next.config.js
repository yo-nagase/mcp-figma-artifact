/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [],
    unoptimized: true, // For static export if needed
  },
  // Optimize for static export
  output: 'standalone',
  experimental: {
    appDir: false, // Using pages directory
  },
}

module.exports = nextConfig 