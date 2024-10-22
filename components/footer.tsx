import React from "react";

export default function Footer() {
  return (
    <footer className="flex h-20 w-full flex-shrink-0 items-center justify-center px-4">
      <span className="text-center text-sm text-white md:text-left">
        © {new Date().getFullYear()}, Kyle Conrad. Built with TypeScript,
        Next.js and TailwindCSS
      </span>
    </footer>
  );
}
