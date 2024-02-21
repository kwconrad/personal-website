export default function Home() {
  return (
    <main className="h-full min-h-screen w-full bg-cream">
      <div className="px-4 mx-auto w-full h-20 max-w-3xl">
        <div className="h-20 w-full flex items-center">
          <div className="flex flex-col">
            <span className="text-black font-medium font-neue-haas-unica leading-tight tracking-tighter">
              Kyle Conrad
              <span className="block text-black/75 font-normal font-neue-haas-unica">
                UX Engineer
              </span>
            </span>
          </div>
        </div>
      </div>
      <div className="px-4 mx-auto max-w-3xl h-full flex flex-col justify-center pt-16 gap-6">
        <div className="flex flex-col">
          <h1 className="text-black text-7xl font-black font-neue-haas-grotesk-display leading-none tracking-tight">
            Kyle Conrad,
          </h1>
          <h1 className="text-black text-7xl font-black font-neue-haas-grotesk-display leading-none tracking-tight">
            UX Engineer
          </h1>
        </div>
        <h2 className="text-black text-2xl font-neue-haas-unica">
          👋 Hi, I&apos;m Kyle, a UX engineer based in Portugal. Reach out to me
          if you want to work with someone who is just as comfortable designing
          UIs in Figma as coding frontends in React and Next.js.
        </h2>
      </div>
    </main>
  );
}
