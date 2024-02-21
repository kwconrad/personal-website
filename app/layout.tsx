import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kyle Conrad - UX Engineer",
  description: "",
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
        <link rel="stylesheet" href="https://use.typekit.net/kib5awe.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
