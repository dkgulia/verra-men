import type { Metadata } from "next";
import { Outfit, Manrope } from "next/font/google";
import { SiteShell } from "@/components/layout/SiteShell";
import { storeConfig } from "@/config/store";
import { hexToRgbChannels } from "@/lib/colors";
import { buildMetadata } from "@/lib/seo";
import "./globals.css";

const display = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = buildMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { colors } = storeConfig;
  const cssVars = {
    "--color-background": hexToRgbChannels(colors.background),
    "--color-primary": hexToRgbChannels(colors.primary),
    "--color-secondary": hexToRgbChannels(colors.secondary),
    "--color-accent": hexToRgbChannels(colors.accent),
    "--color-muted": hexToRgbChannels(colors.muted),
    "--color-border": hexToRgbChannels(colors.border),
    "--color-surface": hexToRgbChannels(colors.surface),
  } as React.CSSProperties;

  return (
    <html lang="en">
      <body
        className={`${display.variable} ${body.variable} bg-background font-body text-primary antialiased`}
        style={cssVars}
      >
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
