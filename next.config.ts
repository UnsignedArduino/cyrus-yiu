import type { NextConfig } from "next";
import {
  GITHUB_PROFILE_URL,
  LINKEDIN_URL,
  RESUME_MD_URL,
  RESUME_PDF_URL,
} from "@/lib/links";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    loader: "custom",
    // imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    imageSizes: [256, 384],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  },
  transpilePackages: ["next-image-export-optimizer"],
  env: {
    nextImageExportOptimizer_imageFolderPath: "public/images",
    nextImageExportOptimizer_exportFolderPath: "out",
    nextImageExportOptimizer_quality: "75",
    nextImageExportOptimizer_storePicturesInWEBP: "true",
    nextImageExportOptimizer_exportFolderName: "nextImageExportOptimizer",
    nextImageExportOptimizer_generateAndUseBlurImages: "true",
    nextImageExportOptimizer_remoteImageCacheTTL: "0",
  },
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/github",
        destination: GITHUB_PROFILE_URL,
        permanent: false,
      },
      {
        source: "/gh",
        destination: GITHUB_PROFILE_URL,
        permanent: false,
      },
      {
        source: "/linkedin",
        destination: LINKEDIN_URL,
        permanent: false,
      },
      {
        source: "/li",
        destination: LINKEDIN_URL,
        permanent: false,
      },
      {
        source: "/in",
        destination: LINKEDIN_URL,
        permanent: false,
      },
      {
        source: "/resume",
        destination: RESUME_PDF_URL,
        permanent: false,
      },
      {
        source: "/resume.pdf",
        destination: RESUME_PDF_URL,
        permanent: false,
      },
      {
        source: "/resume.md",
        destination: RESUME_MD_URL,
        permanent: false,
      },
      {
        source: "/cv",
        destination: RESUME_PDF_URL,
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
