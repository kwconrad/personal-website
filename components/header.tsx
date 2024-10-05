"use client";
import React, { useState } from "react";

export default function Navbar() {
  return (
    <div className="flex h-20 w-full flex-shrink-0 items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="h-10 w-10 rounded-full bg-interface-yellow"></div>
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
  );
}
