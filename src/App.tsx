import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { CaseStudiesPreview } from "./components/CaseStudiesPreview";
import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { CaseStudyDetail } from "./components/CaseStudyDetail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScheduledMessagingPrototype from "./screens/prototypes/scheduled-messaging-feature";
// import { Contact } from "./components/Contact";

function HomePage() {
  return (
    <>
      <Navigation />
      <Hero />
      <CaseStudiesPreview />
      <About />
      {/* <Contact /> */}
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-full bg-neutral-50 relative">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/case-study/:slug" element={<CaseStudyDetail />} />
          <Route
            path="/prototypes/scheduled-messaging"
            element={<ScheduledMessagingPrototype />}
          />
        </Routes>
      </div>
    </Router>
  );
}
