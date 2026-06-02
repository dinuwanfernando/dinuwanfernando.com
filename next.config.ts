import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow the higher-quality variant used for the hero portrait.
    qualities: [75, 90],
  },
};

export default nextConfig;
