// @ts-check
import { config as dotenvxConfig } from "@dotenvx/dotenvx";
import withMDX from "@next/mdx";
import createNextIntlPlugin from "next-intl/plugin";
import pkg from "./package.json" with { type: "json" };

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
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  reactStrictMode: true,
});

export default withNextIntl(nextConfig);
