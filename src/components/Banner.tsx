import React from "react";

interface Props {
  children: React.ReactNode;
  onClick: () => void;
}

export default function Banner({ children, onClick }: Props) {
  return (
    <div
      className="w-full h-12 flex-shrink-0 flex items-center justify-center bg-pink-500 cursor-pointer"
      onClick={onClick}
    >
      {children}
    </div>
  );
}
