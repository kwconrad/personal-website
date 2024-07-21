import React from "react";

export default function Navbar() {
  return (
    <div className="h-20 w-full flex items-center justify-between">
      <div className="flex gap-2 items-center">
        <div className="w-10 h-10 rounded-full bg-yellow"></div>
        <div className="touch-none select-none flex flex-col">
          <span className="text-cream text-sm font-semibold font-public-sans leading-tight tracking-normal">
            Kyle Conrad
            <span className="block text-cream/75 font-normal font-public-sans">
              Design Engineer
            </span>
          </span>
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <div className="select-none touch-none px-1.5 py-0.5 flex-shrink-0 flex-grow-0 bg-green/25 border border-green/75 rounded-full flex items-center gap-1">
          <div className="w-2 h-2 rounded-full animate-pulse bg-green"></div>
          <span className="text-xs uppercase font-medium font-roboto-mono text-green">
            open to work
          </span>
        </div>
      </div>
    </div>
  );
}
