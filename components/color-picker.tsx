"use client";

import { CheckIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

export default function ColorPicker() {
  const colors = ["red", "orange", "yellow", "green", "blue", "indigo"];

  const [selectedColor, setSelectedColor] = useState("red");
  const selectColor = (color: string) => setSelectedColor(color);

  const selectedColorTailwindClassMap: Record<string, string> = {
    red: "bg-interface-red",
    orange: "bg-interface-orange",
    yellow: "bg-interface-yellow",
    green: "bg-interface-green",
    blue: "bg-interface-blue",
    indigo: "bg-interface-indigo",
  };

  const MotionCheckIcon = motion.create(CheckIcon);

  return (
    <div className="flex items-center gap-6">
      <span className="select-none text-neutral-400">Color</span>
      <div className="flex items-center gap-1">
        {colors.map((color) => (
          <button
            key={color}
            onClick={() => selectColor(color)}
            className="relative h-9 w-9"
          >
            <div
              className={clsx(
                "absolute left-1/2 top-1/2 z-20 h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-neutral-800",
                selectedColorTailwindClassMap[color],
              )}
            ></div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              {selectedColor === color && (
                <motion.div
                  initial={{
                    scale: 0.8,
                    opacity: 0,
                  }}
                  animate={{
                    scale: 1,
                    opacity: 0.3,
                  }}
                  exit={{
                    scale: 0.8,
                    opacity: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: [0.75, 0, 0.3, 1],
                  }}
                  className={clsx(
                    "z-10 h-11 w-11 rounded-full",
                    selectedColorTailwindClassMap[color],
                  )}
                ></motion.div>
              )}
            </div>
            <div className="absolute inset-0 z-30 flex items-center justify-center">
              <AnimatePresence initial={false}>
                {selectedColor === color && (
                  <MotionCheckIcon
                    initial={{
                      scale: 0.5,
                      opacity: 0,
                    }}
                    animate={{
                      scale: 1,
                      opacity: 1,
                    }}
                    exit={{
                      scale: 0.5,
                      opacity: 0,
                    }}
                    transition={{
                      delay: 0.1,
                      duration: 0.2,
                      ease: [0.75, 0, 0.3, 1],
                    }}
                    className="h-5 w-5 text-white"
                  ></MotionCheckIcon>
                )}
              </AnimatePresence>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
