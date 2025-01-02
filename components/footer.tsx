import React from "react";

export default function Footer() {
  return (
    <footer className="mt-auto flex h-20 w-full flex-shrink-0 items-center justify-center px-4">
      <span className="text-center text-lg text-white md:text-left">
        © {new Date().getFullYear()} Kyle Conrad. Built with TypeScript,
        Next.js and Tailwind
      </span>
    </footer>
  );
}
