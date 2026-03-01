/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'app.modespray.xyz' }],
        destination: 'https://modespray.vercel.app/app',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'modespray.xyz' }],
        destination: 'https://modespray.vercel.app/:path*',
        permanent: true,
      },
    ]
  },
  async rewrites() {
    return [
      {
        source: '/app',
        destination: 'https://modespray-mainnet.vercel.app/',
      },
      {
        source: '/app/:path*',
        destination: 'https://modespray-mainnet.vercel.app/:path*',
      },
      {
        source: '/lab',
        destination: 'https://modespray-lab.vercel.app/',
      },
      {
        source: '/lab/:path*',
        destination: 'https://modespray-lab.vercel.app/:path*',
      },
    ]
  },
}

export default nextConfig
