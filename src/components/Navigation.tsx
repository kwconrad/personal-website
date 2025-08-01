import { scrollToSection } from "@/lib/utils";

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur">
      <div className="grid grid-cols-12 gap-6 max-w-7xl mx-auto h-16 items-center px-6">
        <div className="col-span-6 flex items-center">
          <div className="flex gap-2 items-center">
            <span
              className="text-black font-sans font-medium"
              data-cursor="text"
            >
              Kyle Conrad
            </span>
          </div>
        </div>
        {/* <div className="col-span-6 flex justify-center">
          <div className="flex items-center gap-8 group">
            <a
              href="#work"
              className="tracking-wide text-white transform scale-100 hover:scale-105 transition-all text-sm group-hover:blur-xs hover:!blur-0"
            >
              Work
            </a>
            <a
              href="#about"
              className="tracking-wide text-white transform scale-100 hover:scale-105 transition-all text-sm group-hover:blur-xs hover:!blur-0"
            >
              About
            </a>
            <a
              href="#contact"
              className="tracking-wide text-white transform scale-100 hover:scale-105 transition-all text-sm group-hover:blur-xs hover:!blur-0"
            >
              Contact
            </a>
          </div>
        </div> */}
        <div className="col-span-6 flex items-center justify-end">
          <button
            onClick={() => scrollToSection("case-studies")}
            data-cursor="button"
            className="transform flex items-center gap-2 text-neutral-800 bg-neutral-200 font-medium rounded-md px-3 py-1.5 transition-all text-sm"
          >
            Case Studies
          </button>
        </div>
      </div>
    </nav>
  );
}
