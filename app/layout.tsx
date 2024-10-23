import type { Metadata } from "next";
import { Footer, Header } from "@/components";
import "@/styles/globals.css";

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
      <body className="flex h-full min-h-screen w-full justify-center overflow-x-hidden overflow-y-scroll bg-neutral-950">
        <div className="flex h-full w-full flex-col items-center">
          <Header />
          <div className="flex w-full max-w-3xl flex-col">
            <div className="flex flex-grow px-4">{children}</div>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
