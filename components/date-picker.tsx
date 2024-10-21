"use client";
import React from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "@/styles/globals.css";

type Props = {
  selectedDate: Date | null;
  onSelectDate: (date: Date | null) => void;
};

export default function DatePicker({ selectedDate, onSelectDate }: Props) {
  return (
    <ReactDatePicker
      className="w-full rounded-md border border-neutral-700 bg-neutral-800 p-2 text-white outline-none placeholder:text-neutral-500 focus:border-white"
      selected={selectedDate}
      onChange={onSelectDate}
      dateFormat="yyyy/MM/dd"
    />
  );
}
