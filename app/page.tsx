import GithubLogo from "../public/github.svg";
import LinkedInLogo from "../public/linkedin.svg";

const GITHUB_LINK = "https://github.com/kwconrad";
const LINKEDIN_LINK = "https://www.linkedin.com/in/kylewconrad/";

export default function Home() {
  return (
    <main className="h-full min-h-screen w-full items-center bg-black flex flex-col">
      <div className="px-4 mx-auto w-full h-20 max-w-4xl">
        <div className="h-20 w-full flex items-center justify-between">
          <div className="flex gap-2 items-center">
            <div className="w-10 h-10 rounded-full bg-yellow"></div>
            <div className="touch-none select-none flex flex-col">
              <span className="text-cream text-sm font-semibold font-public-sans leading-tight tracking-normal">
                Kyle Conrad
                <span className="block text-cream/75 font-normal font-public-sans">
                  Design Engineer
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
              className="hidden md:flex px-1.5 py-1 flex-grow-0 bg-cream/20 hover:bg-cream/30 hover:border-cream border border-cream/60 rounded-4 items-center gap-1"
            >
              <GithubLogo className="w-4 h-4 text-cream"></GithubLogo>
              <span className="text-xs uppercase font-medium font-roboto-mono text-cream">
                Github
              </span>
            </a>
            <a
              href={LINKEDIN_LINK}
              target="_blank"
              className="hidden md:flex px-1.5 py-1 flex-grow-0 bg-cream/20 hover:bg-cream/30 hover:border-cream border border-cream/60 rounded-4 items-center gap-1"
            >
              <LinkedInLogo className="w-4 h-4 text-cream"></LinkedInLogo>
              <span className="text-xs uppercase font-medium font-roboto-mono text-cream">
                LinkedIn
              </span>
            </a>
          </div>
        </div>
      </div>

      <div className="select-none touch-none px-4 max-w-4xl flex flex-col justify-between flex-grow items-center pt-16">
        <div className="flex flex-col gap-4 md:gap-6">
          <h1 className="text-cream text-4xl md:text-6xl font-bold font-archivo leading-[1.125] tracking-tight">
            Experienced Design Engineer crafting design systems and user
            interactions
          </h1>
          <h2 className="text-cream text-xl font-extralight font-public-sans tracking-tight">
            👋 Hey, I&apos;m Kyle. I&apos;m passionate about design systems,
            interaction design and AI. Looking for help with your next project?{" "}
            <a
              className="font-semibold underline"
              href="mailto:kyle@kyleconrad.me"
            >
              Reach out!
            </a>
          </h2>
          <div className="flex md:hidden gap-4 items-center">
            <a
              href={GITHUB_LINK}
              target="_blank"
              className="px-3 py-2 flex-grow-0 bg-cream/20 hover:bg-cream/30 hover:border-cream border border-cream/60 rounded-4 flex items-center gap-1"
            >
              <GithubLogo className="w-4 h-4 text-cream"></GithubLogo>
              <span className="text-sm uppercase font-medium font-roboto-mono text-cream">
                Github
              </span>
            </a>
            <a
              href={LINKEDIN_LINK}
              target="_blank"
              className="px-3 py-2 flex-grow-0 bg-cream/20 hover:bg-cream/30 hover:border-cream border border-cream/60 rounded-4 flex items-center gap-1"
            >
              <LinkedInLogo className="w-4 h-4 text-cream"></LinkedInLogo>
              <span className="text-sm uppercase font-medium font-roboto-mono text-cream">
                LinkedIn
              </span>
            </a>
          </div>
        </div>
        <div className="h-20 w-full flex justify-center items-center">
          <span className="text-cream font-public-sans text-sm">
            © {new Date().getFullYear()}, Kyle Conrad. Built with TypeScript,
            Next.js and TailwindCSS
          </span>
        </div>
      </div>
    </main>
  );
}
