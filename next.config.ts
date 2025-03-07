import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
const path = require("path");

module.exports = {
  webpack: (config: { resolve: { alias: { [x: string]: any; }; }; }) => {
    config.resolve.alias["@"] = path.resolve(__dirname, "src");
    return config;
  },
};

