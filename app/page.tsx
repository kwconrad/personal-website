"use client";
import { ColorPicker, DateInput, TabTransition } from "@/components";

export default function Home() {
  const tagClassNames =
    "rounded-md border border-neutral-600 bg-neutral-700 px-1.5 py-1 text-sm text-neutral-100";
  return (
    <main className="flex h-full w-full flex-shrink-0 flex-col items-center gap-16 py-12 md:gap-32 md:py-20">
      {/* About me */}
      <section className="flex w-full flex-col gap-4">
        <h1 className="font-display text-4xl font-medium text-white md:text-5xl">
          Hey. I&apos;m Kyle. Designer, engineer, and all-around Merry
          Prankster.
        </h1>
        <h2 className="text-xl text-neutral-300">
          This is essentially like my diary of explorations in interaction and
          usability. If you want to reach out and connect, drop me a line{" "}
          <a className="text-white underline" href="mailto:kyle@kyleconrad.me">
            here
          </a>
        </h2>
      </section>
      <section className="flex w-full flex-shrink-0 flex-col gap-12 md:flex-row">
        <div className="flex flex-col gap-2">
          <div className="flex w-full flex-col">
            <span className="font-medium text-white">Color Picker</span>
            <span className="text-neutral-400">
              This is an element of a larger modal that I built. I wanted to
              iterate on the micro-interaction and create something unique, so I
              separated the color picking experience out from the modal itself.
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            <div className={tagClassNames}>tailwind</div>
            <div className={tagClassNames}>framer-motion</div>
          </div>
        </div>
        <div className="flex aspect-square w-full flex-shrink-0 items-center justify-center border border-transparent bg-neutral-950 sm:border-neutral-800 md:w-2/3">
          <div className="rounded-md bg-neutral-800 px-6 py-4 shadow-border-shadow">
            <ColorPicker></ColorPicker>
          </div>
        </div>
      </section>
      <section className="flex w-full flex-shrink-0 flex-col gap-12 md:flex-row">
        <div className="flex flex-col gap-3">
          <div className="flex w-full flex-col gap-1">
            <span className="font-medium text-white">Tab Transition</span>
            <span className="text-neutral-400">
              Exploring blur transitions in tab navigation
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            <div className={tagClassNames}>headlessui</div>
            <div className={tagClassNames}>tailwind</div>
            <div className={tagClassNames}>framer-motion</div>
          </div>
        </div>
        <div className="flex aspect-square w-full flex-shrink-0 items-center justify-center border border-transparent bg-neutral-950 sm:border-neutral-800 md:w-2/3">
          <TabTransition></TabTransition>
        </div>
      </section>
      <section className="flex w-full flex-shrink-0 flex-col gap-12 md:flex-row">
        <div className="flex flex-col gap-3">
          <div className="flex w-full flex-col gap-1">
            <span className="font-medium text-white">Date Input</span>
            <span className="text-neutral-400">
              This is an exploration into some microinteractions in a date
              input.
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            <div className={tagClassNames}>tailwind</div>
          </div>
        </div>
        <div className="flex aspect-square w-full flex-shrink-0 items-center justify-center border border-transparent bg-neutral-950 sm:border-neutral-800 md:w-2/3">
          <div className="rounded-md bg-neutral-800 px-6 pb-8 pt-4 shadow-border-shadow">
            <DateInput></DateInput>
          </div>
        </div>
      </section>
    </main>
  );
}
