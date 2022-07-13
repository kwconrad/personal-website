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
        <div className="pt-6">
          <div className="pb-16 flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Just a guy building awesome products with great people.
              </h1>
              <p className="text-white">
                Hi, I&apos;m Kyle. Finding creative solutions to user-centered
                problems is one of the biggest sources of fun for me.{" "}
                <code className="p-1 rounded-lg bg-gray-800 font-mono">
                  Code
                </code>{" "}
                is my medium for creativity and bringing design solutions to
                life.
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <a
                className="w-full md:w-auto px-6 py-3 bg-gray-1000 hover:bg-gray-800 text-sm text-white text-center font-bold rounded-full transition-colors duration-150 ease-in-out"
                href="/cv-2022.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resumé
              </a>
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
