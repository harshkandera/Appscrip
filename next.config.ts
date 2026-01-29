import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable images from external sources
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fakestoreapi.com",
        pathname: "/img/**",
      },
    ],
  },
  // Disable React strict mode for cleaner console
  reactStrictMode: true,
};

export default nextConfig;
