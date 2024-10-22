"use client";
import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "@/styles/globals.css";

export default function DatePicker() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const selectDate = (date: Date | null) => {
    console.info("date", date);

    setSelectedDate(date);
  };

  return (
    <ReactDatePicker
      className="w-full rounded-md border border-neutral-700 bg-neutral-800 p-2 text-white outline-none placeholder:text-neutral-500 focus:border-white"
      adjustDateOnChange
      selected={selectedDate}
      onChange={selectDate}
      dateFormat="yyyy/MM/dd"
    />
  );
}
