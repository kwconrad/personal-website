import { Banner, Footer, Header, Navbar } from "components";
import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function PrimaryLayout(props: Props) {
  return (
    <div className="w-full min-h-full flex flex-col bg-gray-1100">
      <Banner
        onClick={() =>
          window.open("https://www.linkedin.com/in/kylewconrad/", "_blank")
        }
      >
        <span className="text-sm text-white font-bold">
          🎊 Currently available for hire - Reach out to me!
        </span>
      </Banner>
      <div className="min-h-full flex-1 px-4 flex flex-col items-center">
        <Header>
          <Navbar></Navbar>
        </Header>
        <div className="w-full flex-1">{props.children}</div>
        <Footer></Footer>
      </div>
    </div>
  );
}
