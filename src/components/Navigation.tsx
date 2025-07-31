export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-neutral-50 backdrop-invert">
      <div className="grid grid-cols-12 gap-6 max-w-7xl mx-auto h-16 items-center px-6">
        <div className="col-span-6 flex items-center">
          <div className="flex gap-2 items-center">
            <span className="text-black font-sans" data-cursor="text">
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
          <a
            href="#resume"
            data-cursor="button"
            className="transform scale-100 hover:scale-105 text-black border border-solid border-black bg-white rounded-md px-4 py-2 hover:bg-black hover:text-white hover:border-white transition-all text-sm"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
