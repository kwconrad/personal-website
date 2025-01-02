"use client";

export default function Home() {
  return (
    <main className="flex h-full w-full flex-shrink-0 flex-col gap-16 py-12 md:gap-32 md:py-20">
      {/* About me */}
      <section className="flex w-full flex-col gap-8 md:gap-12">
        <div className="flex flex-col gap-6">
          <h1 className="font-sans text-5xl font-medium text-white md:text-7xl">
            Building next generation web experiences for humans
          </h1>
          <h2 className="font-serif text-2xl text-neutral-50">
            👋 Hi, Im Kyle. I&apos;m a design engineer who specializes in
            creating accessible, extensible and reusable design systems and
            experiences.
          </h2>
        </div>
        <div>
          <a
            href="mailto:conradwebdev@gmail.com"
            className="duration-400 flex w-full justify-center rounded-md px-6 py-4 font-sans text-xl font-bold shadow-xl transition-all ease-in-out hover:hue-rotate-180"
            style={{
              backgroundColor: "hsla(359,83%,53%,1)",
              backgroundImage:
                "radial-gradient(at 41% 7%, hsla(259,78%,47%,1) 0px, transparent 50%),radial-gradient(at 74% 15%, hsla(127,94%,64%,1) 0px, transparent 50%),radial-gradient(at 27% 66%, hsla(117,93%,62%,1) 0px, transparent 50%)",
            }}
          >
            Send me a message
          </a>
        </div>
      </section>
    </main>
  );
}
