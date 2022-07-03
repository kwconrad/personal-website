import { PrimaryLayout } from "layouts";
import Head from "next/head";
import type { ReactElement } from "react";

const Contact = () => {
  return (
    <div className="w-full h-full">
      <Head>
        <title>Kyle Conrad - UX Engineer</title>
      </Head>
      <div className="mx-auto max-w-4xl">
        <div className="px-4 md:px-6 lg:px-8 pt-6">
          <div className="pb-16 flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Looking to hire a product designer who knows how to code?
              </h1>
              <p className="text-white">
                Reach out to me. Let’s grab a ☕️ virtual cup of coffee.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <a
                className="relative px-6 py-3 bg-green-500 hover:bg-green-700 text-sm text-gray-1200 font-bold rounded-full transition-colors duration-150 ease-in-out"
                href="mailto:conradwebdev@gmail.com"
                rel="noopener noreferrer"
              >
                Shoot me an email
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Contact.getLayout = function getLayout(page: ReactElement) {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};

export default Contact;
