import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function Header(props: Props) {
  return <div className="py-4 w-full flex items-center">{props.children}</div>;
}
