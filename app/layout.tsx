import "./globals.css";
import type { Metadata } from "next";

import { Work_Sans, Archivo } from "next/font/google";

const ArchivoFont = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
});

const WorkSansFont = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
});

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
        <title>Kyle Conrad - Product Engineer</title>
        <link rel="stylesheet" href="https://use.typekit.net/kiy6oqr.css" />
      </head>
      <body className={`${WorkSansFont.variable} ${ArchivoFont.variable}`}>
        {children}
      </body>
    </html>
  );
}
