import createMDX from "@next/mdx";

const isGhPages = process.env.DEPLOY_TARGET === "pages";   
const BASE = isGhPages ? "/legume-grain-portal" : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,                    // nice for static hosting (…/page/index.html)
  images: { unoptimized: true },          // needed for static export if using <Image/>

  // Only add for GitHub Pages; CloudFront build stays at root
  basePath: BASE,
  assetPrefix: isGhPages ? `${BASE}/` : undefined,

  pageExtensions: ["md", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({});
export default withMDX(nextConfig);
