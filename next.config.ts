import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/skyrim-alchemy",
  images: {
    unoptimized: true
  },
  output: "export",
};

export default nextConfig;
