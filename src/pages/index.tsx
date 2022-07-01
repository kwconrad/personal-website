import { IconGitPullRequest } from "icons";
import { PrimaryLayout } from "layouts";
import Head from "next/head";
import type { ReactElement } from "react";

const Home = () => {
  const gitCommitsFromLastYear = `12,345`;
  const minutesMeditatedOnHeadspace = `16,567`;

  return (
    <div className="w-full h-full">
      <Head>
        <title>Kyle Conrad - UI Engineer, Product Thinker, Mentor</title>
      </Head>
      <div className="mx-auto max-w-4xl">
        <div className="sm:px-4 md:px-6 lg:px-8 pt-16 lg:pt-9">
          <div className="pb-16 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h1 className="text-5xl font-bold text-white">
                Frontend Engineer. Product Thinker. Mentor.
              </h1>
              <p className="text-white">
                Creative frontend engineer with a passion for helping users
                achieve their goals. I enjoy building in all areas of product
                and helping my team to succeed. I have a long track record of
                mentoring and helping people learn more about tech and product.
                I enjoy teaching and mentoring others.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative group">
                <div className="absolute inset-0 bg-pink-600 rounded-full group-hover:blur-md transition-all duration-150"></div>
                <button className="relative px-6 py-3 bg-gray-1100 text-sm text-white font-bold rounded-full transition-colors duration-150 ease-in-out">
                  Get mentorship
                </button>
              </div>
              <div className="relative group">
                <div className="absolute inset-0 bg-pink-600 rounded-full group-hover:blur-md transition-all duration-150"></div>
                <button className="relative px-6 py-3 bg-gray-1100 text-sm text-white font-bold rounded-full transition-colors duration-150 ease-in-out">
                  See Resumé
                </button>
              </div>
            </div>
          </div>
          {/* <div className="grid grid-cols-2 gap-4">
            <div className="p-8 flex flex-col gap-4 bg-gray-1000 rounded-xl">
              <div className="flex items-center gap-3">
                <IconGitPullRequest className="w-6 h-6 text-white"></IconGitPullRequest>
                <h5 className="text-xl text-white font-bold">
                  {gitCommitsFromLastYear}
                </h5>
              </div>
              <span className="text-white">Git Commits in the last year</span>
            </div>
            <div className="p-8 flex flex-col gap-4 bg-gray-1000 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="h-6 w-6 border border-solid border-brand rounded-full"></div>
                <h5 className="text-xl text-white font-bold">
                  {minutesMeditatedOnHeadspace}
                </h5>
              </div>
              <span className="text-white">Minutes meditated in Headspace</span>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};

export default Home;
