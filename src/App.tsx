import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { CaseStudiesPreview } from "./components/CaseStudiesPreview";
import { About } from "./components/About";
import { Footer } from "./components/Footer";
// import { Contact } from "./components/Contact";

export default function App() {
  const socialLinks = {
    github: "https://github.com/kwconrad",
    linkedin: "https://linkedin.com/in/kylewconrad",
    twitter: "https://x.com/a_history_of_kyle",
  };

  return (
    <div className="min-h-full bg-neutral-50 cursor-none relative">
      <Navigation />
      <Hero />
      <CaseStudiesPreview />
      <About />
      {/* <Contact /> */}
      <Footer socialLinks={socialLinks} />
    </div>
  );
}
