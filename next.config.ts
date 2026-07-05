import type { NextConfig } from "next";
import path from "node:path";

const isDev = process.env.NODE_ENV !== "production";
const LOADER = path.resolve(__dirname, 'src/visual-edits/component-tagger-loader.js');

const nextConfig: NextConfig = {
  output: 'export',

  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: '**' },
      { protocol: 'http', hostname: '**' },
    ],
  },

  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

  experimental: {
    webpackMemoryOptimizations: true,
    optimizePackageImports: ["lucide-react", "gsap"],
  },

  ...(isDev && {
    turbopack: {
      resolveAlias: {
        "motion": "motion/dist/cjs/index.js",
        "motion/react": "motion/dist/cjs/react-client.js",
      },
      rules: {
        "*.{jsx,tsx}": {
          loaders: [LOADER],
        },
      },
    },
  }),
};

export default nextConfig;