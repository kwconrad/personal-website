export default function Home() {
  return (
    <main className="h-full min-h-screen w-full items-center bg-black flex flex-col">
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
        </div>
      </div>
    </main>
  );
}
