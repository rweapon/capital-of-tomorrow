const { paraglide } = require('@inlang/paraglide-next/plugin');
/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/capital-of-tomorrow',
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
    ],
  },
};

module.exports = paraglide({
  paraglide: {
    project: './project.inlang',
    outdir: './src/paraglide',
  },
  ...nextConfig,
});
