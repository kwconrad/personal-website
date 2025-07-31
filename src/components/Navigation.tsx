export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur border-white/20">
      <div className="grid grid-cols-12 gap-6 max-w-7xl mx-auto h-16 items-center px-6">
        <div className="col-span-3 flex items-center">
          <span className="text-white font-sans">Kyle Conrad</span>
        </div>
        <div className="col-span-6 flex justify-center">
          <div className="flex items-center gap-8">
            <a
              href="#work"
              className="tracking-wide text-white hover:text-white/70 transform scale-100 hover:scale-105 transition-all text-sm"
            >
              Work
            </a>
            <a
              href="#about"
              className="tracking-wide text-white hover:text-white/70 transform scale-100 hover:scale-105 transition-all text-sm"
            >
              About
            </a>
            <a
              href="#contact"
              className="tracking-wide text-white hover:text-white/70 transform scale-100 hover:scale-105 transition-all text-sm"
            >
              Contact
            </a>
          </div>
        </div>
        <div className="col-span-3 flex items-center justify-end">
          <a
            href="#resume"
            className="transform scale-100 hover:scale-105 text-black border border-solid border-black bg-white rounded-md px-4 py-2 hover:bg-black hover:text-white hover:border-white transition-all text-sm"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
