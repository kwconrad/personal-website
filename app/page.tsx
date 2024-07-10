export default function Home() {
  return (
    <main className="h-full min-h-screen w-full bg-black">
      <div className="px-4 mx-auto w-full h-20 max-w-5xl">
        <div className="h-20 w-full flex items-center">
          <div className="flex flex-col">
            <span className="text-cream uppercase text-sm font-semibold font-work-sans leading-tight tracking-normal">
              Kyle Conrad
              <span className="block text-cream/75 font-normal font-work-sans">
                Frontend Engineer
              </span>
            </span>
          </div>
        </div>
      </div>
      <div className="px-4 mx-auto max-w-4xl h-full flex flex-col justify-center pt-8 gap-6">
        <h2 className="text-cream text-2xl font-archivo tracking-tight">
          👋 Hey, I&apos;m Kyle
        </h2>
        <div className="flex flex-col">
          <h1 className="text-cream text-5xl font-extrabold font-archivo leading-tight tracking-tight">
            I&apos;m here to help you build awesome user experiences
          </h1>
        </div>
      </div>
    </main>
  );
}
