import { Banner, Footer, Header, Navbar } from "components";
import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function PrimaryLayout(props: Props) {
  return (
    <div className="w-full h-full flex flex-col bg-gray-1200">
      <Banner
        onClick={() =>
          window.open("https://www.linkedin.com/in/kylewconrad/", "_blank")
        }
      >
        <span className="text-sm text-white font-bold">
          🎊 Currently available for hire - Reach out to me!
        </span>
      </Banner>
      <Header>
        <Navbar></Navbar>
      </Header>
      {props.children}
      <Footer></Footer>
    </div>
  );
}
