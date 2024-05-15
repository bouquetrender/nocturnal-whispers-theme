import Footer from "@/app/_components/footer";
import type { Metadata } from "next";
import { Bitter } from "next/font/google";

import "./globals.css";

const inter = Bitter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `Nocturnal Whispers`,
  description: `Nocturnal Whispers Personal Blog`,
  keywords: ["blog", "Nocturnal Whispers"],
  openGraph: {
    images: ["/assets/graph.png"],
    title: "Nocturnal Whispers",
    description: `nameless's personal blog`,
    type: "article",
    authors: ["nameless"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nocturnal Whispers",
    description: `nameless's personal blog`,
    images: [""],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/icon.png" type="image/png" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#000" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      </head>
      <body
        style={{
          fontFamily: `${inter.style.fontFamily}, ui-sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica Neue, Roboto, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji`,
        }}
      >
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
