import type { NextConfig } from "next";

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
        destination: "https://github.com/UnsignedArduino",
        permanent: false,
      },
      {
        source: "/gh",
        destination: "https://github.com/UnsignedArduino",
        permanent: false,
      },
      {
        source: "/linkedin",
        destination: "https://www.linkedin.com/in/cyrus-yiu/",
        permanent: false,
      },
      {
        source: "/li",
        destination: "https://www.linkedin.com/in/cyrus-yiu/",
        permanent: false,
      },
      {
        source: "/in",
        destination: "https://www.linkedin.com/in/cyrus-yiu/",
        permanent: false,
      },
      {
        source: "/resume",
        destination:
          "https://drive.google.com/file/d/1d8ebDEHgOkQAGk4MCLDuOBT41HX_DKrX/view",
        permanent: false,
      },
      {
        source: "/cv",
        destination:
          "https://drive.google.com/file/d/1d8ebDEHgOkQAGk4MCLDuOBT41HX_DKrX/view",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
