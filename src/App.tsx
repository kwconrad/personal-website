import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { CaseStudiesPreview } from "./components/CaseStudiesPreview";
import { About } from "./components/About";
// import { Contact } from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-black dark">
      <Navigation />
      <Hero />
      <CaseStudiesPreview />
      <About />
      {/* <Contact /> */}

      {/* Footer */}
      <footer className="bg-black border-t border-white/20 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-6">
              <div className="text-sm uppercase tracking-wider text-white/60">
                © 2025 Kyle Conrad
              </div>
            </div>
            <div className="col-span-6">
              <div className="grid grid-cols-4 gap-4 text-right">
                <a
                  href="#"
                  className="text-sm text-white/60 hover:text-white transition-colors uppercase tracking-wide"
                >
                  LinkedIn
                </a>
                <a
                  href="#"
                  className="text-sm text-white/60 hover:text-white transition-colors uppercase tracking-wide"
                >
                  GitHub
                </a>
                <a
                  href="#"
                  className="text-sm text-white/60 hover:text-white transition-colors uppercase tracking-wide"
                >
                  Dribbble
                </a>
                <a
                  href="#"
                  className="text-sm text-white/60 hover:text-white transition-colors uppercase tracking-wide"
                >
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
