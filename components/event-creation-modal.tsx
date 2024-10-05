"use client";
import { generateMilitaryTimeOptions } from "@/utils/time";
import { CheckIcon } from "@heroicons/react/16/solid";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";
import React, { ChangeEvent, useState } from "react";
import { DatePicker, Select } from ".";
import { Option } from "@/types/ui";

export default function EventCreationModal() {
  const [title, setTitle] = useState("");
  const changeTitle = (e: ChangeEvent<HTMLInputElement>) =>
    setTitle(e.target.value);

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
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  const options = generateMilitaryTimeOptions();

  const [startTime, setStartTime] = useState<Option>(options[11]);
  const changeStartTime = (time: Option) => setStartTime(time);

  const [endTime, setEndTime] = useState<Option>(options[19]);
  const changeEndTime = (time: Option) => setEndTime(time);

  const MotionCheckIcon = motion.create(CheckIcon);

  return (
    <div className="flex w-auto flex-col gap-3 rounded-xl bg-neutral-800 p-6 shadow-border-shadow">
      {/* header */}
      <p className="select-none text-xl text-white">Create an Event</p>
      {/* body */}
      <div className="relative w-full">
        <input
          type="text"
          className="w-full border-b border-neutral-300 bg-neutral-800 px-2 py-2 text-lg text-white outline-none placeholder:text-neutral-400"
          placeholder="Title"
          onChange={changeTitle}
        />
        <div className="absolute bottom-1/2 right-2 top-1/2 flex h-6 w-8 -translate-x-0 -translate-y-1/2 items-center justify-center rounded-md bg-neutral-700">
          <span className="select-none text-sm text-neutral-300">
            {title.length}
          </span>
        </div>
      </div>
      {/* event-reminder */}
      <div className="flex items-center gap-4">
        <span className="select-none text-neutral-400">Color</span>
        <div className="flex items-center">
          {colors.map((color) => (
            <button
              key={color}
              onClick={() => selectColor(color)}
              className="relative h-9 w-9"
            >
              <div
                className={clsx(
                  "absolute left-1/2 top-1/2 z-20 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-neutral-800",
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
                    transition={{ duration: 0.25, ease: "backOut" }}
                    className={clsx(
                      "z-10 h-10 w-10 rounded-full",
                      selectedColorTailwindClassMap[color],
                    )}
                  ></motion.div>
                )}
              </div>
              <div className="absolute inset-0 z-30 flex items-center justify-center">
                <AnimatePresence initial={false}>
                  {selectedColor === color && (
                    <MotionCheckIcon
                      animate={{
                        scale: 1,
                        opacity: 1,
                      }}
                      transition={{ duration: 0.25, ease: "backOut" }}
                      className="h-4 w-4 text-white"
                    ></MotionCheckIcon>
                  )}
                </AnimatePresence>
              </div>
            </button>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-1">
          <span className="text-neutral-400">Date</span>
          <DatePicker
            selectedDate={selectedDate}
            onSelectDate={(date: Date | null) => setSelectedDate(date)}
          />
        </div>
        <div className="flex gap-2">
          <Select
            options={options}
            selectedOption={startTime}
            onChangeOption={changeStartTime}
          ></Select>
          <Select
            options={options}
            selectedOption={endTime}
            onChangeOption={changeEndTime}
          ></Select>
        </div>
      </div>
      {/* footer */}
      <div className="mt-2 flex items-center justify-end gap-2">
        <button className="h-10 w-20 rounded-md bg-neutral-700 px-3 text-sm text-neutral-300 shadow-sm transition-shadow duration-150 ease-out hover:shadow-lg hover:ease-in">
          Cancel
        </button>
        <button
          disabled={!title.length || !selectedDate}
          className="h-10 w-20 rounded-md border-green-200 bg-gradient-to-t from-green-800 to-green-600 px-3 text-sm font-medium text-white shadow-sm transition-all duration-150 ease-out hover:shadow-lg hover:ease-in disabled:from-green-800/30 disabled:to-green-600/30 disabled:text-white/30"
        >
          Create
        </button>
      </div>
    </div>
  );
}
