import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import HeaderImage from "@/components/HeaderImage";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [{ color: "white" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen text-foreground bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <HeaderImage />
        <main className="container mx-auto max-w-7xl pt-4 px-6 flex-grow">
          {children}
        </main>
      </body>
    </html>
  );
}
