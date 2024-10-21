"use client";
import { useState } from "react";
import { DatePicker } from "@/components";

export default function EventTimeSelect() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-1">
        <span className="text-neutral-400">Date</span>
        <DatePicker
          selectedDate={selectedDate}
          onSelectDate={(date: Date | null) => setSelectedDate(date)}
        />
      </div>
    </div>
  );
}
