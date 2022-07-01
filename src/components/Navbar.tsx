import React from "react";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <div className="mx-auto flex max-w-4xl w-full sm:px-4 md:px-6 lg:px-8">
      <div className="flex-1">
        <Logo></Logo>
      </div>
      <div className="flex-1 flex items-center justify-end"></div>
    </div>
  );
}
