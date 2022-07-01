import { Footer, Header, Navbar } from "components";
import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function PrimaryLayout(props: Props) {
  return (
    <div className="w-full h-full flex flex-col bg-gray-1200">
      <Header>
        <Navbar></Navbar>
      </Header>
      {props.children}
      <Footer></Footer>
    </div>
  );
}
