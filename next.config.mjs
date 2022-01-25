/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  eslint: {
    dirs: ['components', 'pages', 'utils'],
    ignoreDuringBuilds: false,
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
