import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    // Serve modern formats; Next falls back automatically for old browsers.
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    // Only pull in the icon modules that are actually used.
    optimizePackageImports: ["react-icons", "lucide-react"],
  },
};

export default nextConfig;
