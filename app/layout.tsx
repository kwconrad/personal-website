import { Footer, Header } from "@/components";
import "./globals.css";
import type { Metadata } from "next";

import { Public_Sans, Archivo, Roboto_Mono } from "next/font/google";

const ArchivoFont = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
});

const PublicSansFont = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
});

const RobotoMonoFont = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});

export const metadata: Metadata = {
  title: "Kyle Conrad - Design Engineer",
  description:
    "Hey, I'm Kyle. I'm passionate about crafting seamless user experiences that are both visually stunning and highly functional, ensuring users can effortlessly achieve their goals",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Kyle Conrad - Design Engineer</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="stylesheet" href="https://use.typekit.net/kib5awe.css" />
      </head>
      <body
        className={`${PublicSansFont.variable} ${ArchivoFont.variable} ${RobotoMonoFont.variable}`}
      >
        <main className="w-full h-full bg-black flex justify-center">
          <div className="px-4 h-full w-full max-w-4xl flex flex-col">
            <Header />
            <div className="flex flex-grow">{children}</div>
            <Footer />
          </div>
        </main>
      </body>
    </html>
  );
}
