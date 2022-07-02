import React from "react";

export default function Footer() {
  return (
    <div className="mx-auto py-2">
      <span className="text-white text-sm">
        © {new Date().getFullYear()} Kyle Conrad
      </span>
    </div>
  );
}
