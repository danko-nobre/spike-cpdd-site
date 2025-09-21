import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/spike-cpdd-site/next",
  assetPrefix: "/spike-cpdd-site/next",
  distDir: "../dist/next",
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@ui-components": path.resolve(__dirname, "../ui-components"),
    };
    return config;
  },
};

export default nextConfig;