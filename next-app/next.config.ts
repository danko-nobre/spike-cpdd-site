import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/spike-cpdd-site/next",
  assetPrefix: "/spike-cpdd-site/next",
  distDir: "../dist/next",
  trailingSlash: true,
  images: {
    unoptimized: true
  },
};

export default nextConfig;