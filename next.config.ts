import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "weightlossinjections.ca" }],
        destination: "https://www.weightlossinjections.ca/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
