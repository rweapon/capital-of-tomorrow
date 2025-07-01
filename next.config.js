/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/capital-of-tomorrow',
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
    dirs: ['src'],
  },
  async rewrites() {
    return [
      {
        source: '/images/:path*',
        destination: '/capital-of-tomorrow/images/:path*', // The :path parameter isn't used here so will be automatically passed in the query
      },
    ];
  },
  images: {
    path: '/capital-of-tomorrow/images',
  },

  reactStrictMode: true,
  swcMinify: true,

  webpack(config) {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.('.svg')
    );

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: { not: /\.(css|scss|sass)$/ },
        resourceQuery: { not: /url/ }, // exclude if *.svg?url
        loader: '@svgr/webpack',
        options: {
          dimensions: false,
          titleProp: true,
        },
      }
    );

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
};

export default nextConfig;
