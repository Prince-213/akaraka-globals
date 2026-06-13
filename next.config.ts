import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  
  async headers() {
    return [
      {
        source: "/assets/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/fonts/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
  
  async redirects() {
    return [
      { source: "/error", destination: "/", permanent: true },
      { source: "/projectdetails", destination: "/project/details", permanent: true },
      { source: "/servicedetails", destination: "/service/details", permanent: true },
      { source: "/cart", destination: "/product", permanent: true },
      { source: "/checkout", destination: "/product", permanent: true },
      { source: "/shop", destination: "/product", permanent: true },
      { source: "/shop-details", destination: "/product/details", permanent: true },
    ];
  },
};

export default nextConfig;
