/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',              // static site
  reactStrictMode: true,
  images: { unoptimized: true }, // safe for static hosting if you ever use next/image
  eslint: { ignoreDuringBuilds: true },      // don't fail CI on lint
  typescript: { ignoreBuildErrors: true },   // don't fail CI on TS types
};
module.exports = nextConfig;
