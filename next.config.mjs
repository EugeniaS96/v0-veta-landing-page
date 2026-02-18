const nextConfig = {
  output: 'export',
  basePath: '/v0-veta-landing-page',
  assetPrefix: '/v0-veta-landing-page/',

  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hebbkx1anhila5yf.public.blob.vercel-storage.com',
      },
    ],
  },
}

export default nextConfig
nextConfig

