// @ts-check

import withMDX from "@next/mdx";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = withMDX()({
  experimental: {
    mdxRs: true,
  },
  compiler: {
    emotion: true,
  },
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  reactStrictMode: true,
});

export default withNextIntl(nextConfig);
