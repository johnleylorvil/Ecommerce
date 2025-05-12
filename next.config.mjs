/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['localhost'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    unoptimized: true,
  },
  // Remove standalone output for now to simplify build
  // output: 'standalone',
  
  // Remove experimental features
  // experimental: {
  //   optimizeCss: true,
  // },
};

export default nextConfig;
