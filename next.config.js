/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',          // enables static export
  reactStrictMode: true,
  images: { unoptimized: true }, // safe for static hosting if you use next/image later
};
module.exports = nextConfig;
