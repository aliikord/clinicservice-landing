import type { NextConfig } from "next";

// GitHub Pages serves the repo at /clinicservice-landing/.
// For other deploys (Vercel, your own domain, SaaS integration), set BASE_PATH="" or unset it.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "/clinicservice-landing";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath,
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
