import type { NextConfig } from "next";
import withOptimizedImages from "next-optimized-images";

const nextConfig: NextConfig = withOptimizedImages({
  /* config options here */
  output: "export",
  images: { unoptimized: true },
  reactStrictMode: true,
});

export default nextConfig;
