/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  eslint: {
    dirs: ['components', 'cypress', 'pages', 'services', 'utils'],
    ignoreDuringBuilds: false,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

let finalConfig;

if (process.env.ANALYZE === 'true') {
  const BundleAnalyzer = (await import('@next/bundle-analyzer')).default;
  const withBundleAnalyzer = BundleAnalyzer({ enabled: true });
  finalConfig = withBundleAnalyzer(nextConfig);
} else {
  finalConfig = nextConfig;
}

export default finalConfig;
