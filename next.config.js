/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'hueter-imker.vercel.app' }],
        destination: 'https://bienenhueterpfalz.de/:path*',
        permanent: true,
      },
    ];
  },
};
module.exports = nextConfig;
