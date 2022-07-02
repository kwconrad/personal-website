import React from "react";

interface Props {
  children: React.ReactNode;
  onClick: () => void;
}

export default function Banner({ children, onClick }: Props) {
  return (
    <div
      className="w-full h-16 flex items-center justify-center bg-pink-500"
      onClick={onClick}
    >
      {children}
    </div>
  );
}
