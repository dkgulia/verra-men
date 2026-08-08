/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Local assets in /public/images are preferred.
    // Remote patterns kept for optional CDN swaps in images.ts.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
};

export default nextConfig;
