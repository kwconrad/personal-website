"use client";
import { useState } from "react";
import { DatePicker } from "@/components";

export default function DateInput() {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-1">
        <span className="text-neutral-400">Date</span>
        <DatePicker />
      </div>
    </div>
  );
}
