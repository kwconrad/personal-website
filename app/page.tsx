"use client";

export default function Home() {
  return (
    <main className="h-full w-full items-center bg-black flex flex-col">
      <div className="select-none touch-none max-w-4xl flex flex-col justify-between flex-grow items-center pt-16">
        <div className="flex flex-col gap-4 md:gap-6">
          <h2 className="text-cream text-2xl font-extralight font-public-sans tracking-tight">
            👋 Hey, I&apos;m Kyle. I&apos;m a design engineer. I like to build
            cool things with my friends, and help businesses tackle challenging
            problems.
          </h2>
        </div>
      </div>
    </main>
  );
}
