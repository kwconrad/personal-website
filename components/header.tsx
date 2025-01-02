import React from "react";

export default function Navbar() {
  return (
    <div className="w-full">
      <div className="px-4 pt-20"></div>
      <div className="fixed top-0 z-50 flex w-full flex-col items-center bg-transparent backdrop-blur-md">
        <div className="flex w-full max-w-5xl flex-shrink-0 items-center justify-between p-4">
          <div className="flex items-center gap-4">
            <div className="relative h-10 w-10">
              <div className="absolute inset-0 z-20 h-full w-full rounded-full bg-interface-yellow"></div>
              <div className="absolute inset-0 z-20 h-full w-full rounded-full bg-interface-yellow blur-sm"></div>
            </div>
            <div className="flex touch-none select-none flex-col text-lg">
              <span className="font-sans font-bold leading-tight tracking-normal text-white">
                Kyle Conrad
                <span className="block font-sans font-normal text-white/50">
                  Design Engineer
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
