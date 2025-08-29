import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'xwbeiqnrlsxdxccfwbez.supabase.co',
        pathname: '/storage/v1/object/public/production/**',
      },
    ],
  },
};

export default nextConfig;
