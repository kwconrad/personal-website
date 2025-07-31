import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { CaseStudiesPreview } from "./components/CaseStudiesPreview";
import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
// import { Contact } from "./components/Contact";

type CursorVariant = "default" | "button" | "text";

export default function App() {
  const [cursorVariant, setCursorVariant] = useState<CursorVariant>("default");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const socialLinks = {
    github: "https://github.com/kwconrad",
    linkedin: "https://linkedin.com/in/kylewconrad",
    twitter: "https://x.com/a_history_of_kyle",
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const cursorType = target.getAttribute("data-cursor");

      switch (cursorType) {
        case "button":
          setCursorVariant("button");
          break;
        case "text":
          setCursorVariant("text");
          break;
        default:
          setCursorVariant("default");
          break;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  const cursorVariants = {
    default: {
      width: 80,
      height: 80,
      backgroundColor: "transparent",
      backdropFilter: "blur(12px) hue-rotate(180deg)",
    },
    button: {
      width: 16,
      height: 16,
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      backdropFilter: "none",
    },
    text: {
      width: 2,
      height: 24,
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      backdropFilter: "none",
      borderRadius: "1px",
    },
  };

  return (
    <div className="min-h-full bg-neutral-50 cursor-none relative">
      {/* Custom Cursor */}
      <motion.div
        className="fixed pointer-events-none z-[9999] rounded-full"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          ...cursorVariants[cursorVariant],
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 0.8,
          x: { type: "spring", stiffness: 150, damping: 15, mass: 0.8 },
          y: { type: "spring", stiffness: 150, damping: 15, mass: 0.8 },
        }}
        style={{
          transform: "translate(-50%, -50%)",
        }}
      />

      <Navigation />
      <Hero />
      <CaseStudiesPreview />
      <About />
      {/* <Contact /> */}
      <Footer socialLinks={socialLinks} />
    </div>
  );
}
