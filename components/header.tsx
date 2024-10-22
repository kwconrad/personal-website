import React from "react";

export default function Navbar() {
  return (
    <div>
      <div className="pt-20"></div>
      <div className="fixed top-0 z-50 flex w-full flex-shrink-0 items-center justify-between bg-transparent p-4 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <div className="relative h-10 w-10">
            <div className="absolute inset-0 z-20 h-full w-full rounded-full bg-interface-yellow"></div>
            <div className="absolute inset-0 z-20 h-full w-full rounded-full bg-interface-yellow blur-sm"></div>
          </div>
          <div className="flex touch-none select-none flex-col">
            <span className="text-sm font-medium leading-tight tracking-normal text-white">
              Kyle Conrad
              <span className="block font-normal text-white/50">
                Design Engineer
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
