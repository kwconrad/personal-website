"use client";

import { EventCreationModal, TabTransition } from "@/components";

export default function Home() {
  return (
    <main className="flex h-full w-full flex-shrink-0 flex-col items-center gap-16 py-12 md:gap-32 md:py-20">
      {/* About me */}
      <section className="flex w-full flex-col gap-4">
        <h1 className="font-display text-4xl font-medium text-white md:text-5xl">
          Hey. I&apos;m Kyle. Designer, engineer, and all-around Merry
          Prankster.
        </h1>
        <h2 className="text-xl text-neutral-300">
          This is my repository of explorations and experiments in interaction
          and usability. If you want to reach out and connect, drop me a line{" "}
          <a className="text-white underline" href="mailto:kyle@kyleconrad.me">
            here
          </a>
        </h2>
      </section>
      <section className="flex w-full flex-shrink-0 flex-col gap-12 md:flex-row">
        <div className="flex flex-col gap-2">
          <div className="flex w-full flex-col">
            <span className="font-medium text-white">Tab Transition</span>
            <span className="text-neutral-400">
              Exploring blur transitions in tab navigation
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            <div className="rounded-md bg-neutral-700 px-1.5 py-1 text-sm text-neutral-100">
              headlessui
            </div>
            <div className="rounded-md bg-neutral-700 px-1.5 py-1 text-sm text-neutral-100">
              tailwind
            </div>
            <div className="rounded-md bg-neutral-700 px-1.5 py-1 text-sm text-neutral-100">
              framer-motion
            </div>
          </div>
        </div>
        <div className="flex aspect-square w-full flex-shrink-0 items-center justify-center border border-transparent bg-neutral-950 sm:border-neutral-800 md:w-2/3">
          <TabTransition></TabTransition>
        </div>
      </section>
      <section className="flex w-full flex-shrink-0 flex-col gap-12 md:flex-row">
        <div className="flex flex-col gap-2">
          <div className="flex w-full flex-col">
            <span className="font-medium text-white">Event Creation Modal</span>
            <span className="text-neutral-400">
              I wanted to bring this awesome design{" "}
              <a
                className="text-white underline"
                href="https://dribbble.com/shots/14510224-Cards-White-UI"
              >
                originally by Michal Parulski
              </a>{" "}
              to life. This is my interpretation, in dark mode, of how the
              interactions might feel.
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            <div className="rounded-md bg-neutral-700 px-1.5 py-1 text-sm text-neutral-100">
              headlessui
            </div>
            <div className="rounded-md bg-neutral-700 px-1.5 py-1 text-sm text-neutral-100">
              tailwind
            </div>
            <div className="rounded-md bg-neutral-700 px-1.5 py-1 text-sm text-neutral-100">
              framer-motion
            </div>
          </div>
        </div>
        <div className="flex aspect-square w-full flex-shrink-0 items-center justify-center border border-transparent bg-neutral-950 sm:border-neutral-800 md:w-2/3">
          <EventCreationModal></EventCreationModal>
        </div>
      </section>
    </main>
  );
}
