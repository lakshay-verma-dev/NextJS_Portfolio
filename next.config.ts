import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "streak-stats.demolab.com",
      },
      {
        protocol: "https",
        hostname: "leetcard.jacoblin.cool",
      },
      {
        protocol: "https",
        hostname: "github-readme-stats.vercel.app", // ✅ fixed here
      },
      {
        protocol: "https",
        hostname: "github-readme-streak-stats.herokuapp.com",
      },
    ],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    
  },
  
};

export default nextConfig;
