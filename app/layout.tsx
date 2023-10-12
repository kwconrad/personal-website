import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kyle Conrad - Design Technologist",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Kyle Conrad - UX Engineer</title>
        <link rel="stylesheet" href="https://use.typekit.net/nxc3ejx.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
