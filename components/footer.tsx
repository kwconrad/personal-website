import React from "react";

export default function Footer() {
  return (
    <footer className="h-20 w-full flex justify-center items-center">
      <span className="text-cream font-public-sans text-sm">
        © {new Date().getFullYear()}, Kyle Conrad. Built with TypeScript,
        Next.js and TailwindCSS
      </span>
    </footer>
  );
}
