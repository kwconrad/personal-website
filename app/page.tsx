import GithubLogo from "../public/github.svg";
import LinkedInLogo from "../public/linkedin.svg";

const GITHUB_LINK = "https://github.com/kwconrad";
const LINKEDIN_LINK = "https://www.linkedin.com/in/kylewconrad/";

export default function Home() {
  return (
    <main className="h-full min-h-screen w-full bg-black flex flex-col">
      <div className="px-4 mx-auto w-full h-20 max-w-4xl">
        <div className="h-20 w-full flex items-center justify-between">
          <div className="flex gap-2 items-center">
            <div className="w-10 h-10 rounded-full bg-yellow"></div>
            <div className="touch-none select-none flex flex-col">
              <span className="text-cream text-sm font-semibold font-public-sans leading-tight tracking-normal">
                Kyle Conrad
                <span className="block text-cream/75 font-normal font-public-sans">
                  Sr. Frontend Engineer
                </span>
              </span>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <div className="select-none touch-none px-1.5 py-0.5 flex-grow-0 bg-green/25 border border-green/75 rounded-full flex items-center gap-1">
              <div className="w-2 h-2 rounded-full animate-pulse bg-green"></div>
              <span className="text-xs uppercase font-medium font-roboto-mono text-green">
                open to work
              </span>
            </div>
            <a
              href={GITHUB_LINK}
              target="_blank"
              className="px-1.5 py-1 flex-grow-0 bg-cream/20 hover:bg-cream/30 hover:border-cream border border-cream/60 rounded-4 flex items-center gap-1"
            >
              <GithubLogo className="w-4 h-4 text-cream"></GithubLogo>
              <span className="text-xs uppercase font-medium font-roboto-mono text-cream">
                Github
              </span>
            </a>
            <a
              href={LINKEDIN_LINK}
              target="_blank"
              className="px-1.5 py-1 flex-grow-0 bg-cream/20 hover:bg-cream/30 hover:border-cream border border-cream/60 rounded-4 flex items-center gap-1"
            >
              <LinkedInLogo className="w-4 h-4 text-cream"></LinkedInLogo>
              <span className="text-xs uppercase font-medium font-roboto-mono text-cream">
                LinkedIn
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="select-none touch-none px-4 mx-auto max-w-4xl h-full flex flex-col justify-center pt-16 gap-6">
        <h1 className="text-cream text-6xl font-bold font-archivo leading-[1.125] tracking-tight">
          Experienced frontend engineer, crafting market-ready products at
          record speed
        </h1>
        <h2 className="text-cream text-xl font-extralight font-public-sans tracking-tight">
          👋 Hey, I&apos;m Kyle. I&apos;m passionate about crafting seamless
          user experiences that are both visually stunning and highly
          functional, ensuring users can effortlessly achieve their goals
        </h2>
      </div>
    </main>
  );
}
