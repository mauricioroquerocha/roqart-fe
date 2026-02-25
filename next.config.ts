import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: 'xwbeiqnrlsxdxccfwbez.supabase.co',
  //       pathname: '/storage/v1/object/public/production/**',
  //     },
  //   ],
  // },

  output: "standalone",
};

export default nextConfig;
