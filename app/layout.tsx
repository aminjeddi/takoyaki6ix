import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Takoyaki6ix — Kensington Market's Tiny Takoyaki Spot",
  description:
    "Hand-made takoyaki, baos, onigiri & karaage in the heart of Kensington Market, Toronto. Small space, big heart.",
  openGraph: {
    title: "Takoyaki6ix",
    description:
      "A tiny Japanese street food spot on Baldwin Street. Freshly griddled takoyaki, fluffy baos, and crispy karaage.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
