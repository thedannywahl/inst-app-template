import { config as dotenvxConfig } from "@dotenvx/dotenvx";
// @ts-check
import withMDX from "@next/mdx";
import createNextIntlPlugin from "next-intl/plugin";
import pkg from "./package.json" assert { type: "json" };

dotenvxConfig();

const withNextIntl = createNextIntlPlugin();

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = withMDX()({
  env: {
    name: pkg.name,
    version: pkg.version,
  },
  experimental: {
    mdxRs: true,
    optimizePackageImports: [
      "@instructure/ui",
      "@instructure/emotion",
      "@instructure/ui-react-utils",
    ],
  },
  devIndicators: {
    buildActivity: true,
    buildActivityPosition: "bottom-right",
  },
  compiler: {
    emotion: true,
  },
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  reactStrictMode: true,
});

export default withNextIntl(nextConfig);
