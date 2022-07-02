import { Banner, Footer, Header, Navbar } from "components";
import { useRouter } from "next/router";
import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function PrimaryLayout(props: Props) {
  const router = useRouter();

  return (
    <div className="w-full h-full flex flex-col bg-gray-1200">
      <Banner onClick={() => router.push("/contact")}>
        <span className="text-sm text-white font-bold">
          Currently available for hire - Reach out to me!
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
