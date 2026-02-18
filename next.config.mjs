/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  // Для статики на GitHub Pages/любой CDN: картинки рендерим как обычные <img>
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hebbkx1anhila5yf.public.blob.vercel-storage.com",
      },
    ],
  },

  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;



