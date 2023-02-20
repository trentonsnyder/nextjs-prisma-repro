const { PrismaPlugin } = require("experimental-prisma-webpack-plugin");

const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: [
      "blue-db",
      "red-db",
      "prisma",
      "@prisma/client",
    ],
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      return {
        ...config,
        plugins: [...config.plugins, new PrismaPlugin()],
      };
    }
    return config;
  },
};

module.exports = nextConfig;
