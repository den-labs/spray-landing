/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: '/app/:path*',
        destination: 'https://modespray-mainnet.vercel.app/app/:path*',
      },
      {
        source: '/lab/:path*',
        destination: 'https://modespray-lab.vercel.app/lab/:path*',
      },
    ]
  },
}

export default nextConfig
