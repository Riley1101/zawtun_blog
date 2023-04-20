/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.sanity.io"],
  },
  transpilePackages: ["react-syntax-highlighter"],
};

module.exports = nextConfig;
