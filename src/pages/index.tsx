import { PrimaryLayout } from "layouts";
import Head from "next/head";
import type { ReactElement } from "react";

const Home = () => {
  return (
    <div className="w-full h-full">
      <Head>
        <title>Kyle Conrad - UX Engineer</title>
      </Head>
      <div className="mx-auto max-w-4xl">
        <div className="px-4 md:px-6 lg:px-8 pt-6">
          <div className="pb-16 flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <h1 className="text-4xl font-bold text-white">
                I craft delightful product experiences
              </h1>
              <p className="text-white">
                Finding creative solutions to tricky problems has always been my
                joy in life. I try to bring a sense of joy and fun into every
                problem I solve for the organizations and individuals that I
                work with.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="absolute inset-0 bg-pink-600 rounded-full transition-all duration-150"></div>
                <a
                  className="relative px-6 py-3 bg-gray-1100 hover:bg-gray-900 text-sm text-white font-bold rounded-full transition-colors duration-150 ease-in-out"
                  href="/cv-2022.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download Resumé
                </a>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-pink-600 rounded-full transition-all duration-150"></div>
                <a
                  className="relative px-6 py-3 bg-gray-1100 hover:bg-gray-900 text-sm text-white font-bold rounded-full transition-colors duration-150 ease-in-out"
                  href="https://dribbble.com/easternsun"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See my work
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};

export default Home;
