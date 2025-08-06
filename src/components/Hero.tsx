import { scrollToSection } from "@/lib/utils";
import { ArrowDown } from "lucide-react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { useState } from "react";

export function Hero() {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(true);

  // Hide arrow when scrolled past 50% of viewport height
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsVisible(latest < window.innerHeight * 0.5);
  });

  return (
    <section className="min-h-screen bg-neutral-50 relative">
      <div className="grid grid-cols-12 gap-6 max-w-4xl mx-auto px-6 h-screen">
        <div className="col-span-12 flex flex-col justify-center">
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-6xl leading-[1.12] font-serif text-black tracking-tighter">
                Human-centric Design Engineer passionate about helping
                businesses solve user problems
              </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
              <div>
                <div className="text-sm uppercase tracking-wider text-black/60 mb-2">
                  Discipline
                </div>
                <div className="text-lg text-black">
                  Digital Product Design
                  <br />
                  Frontend Engineering
                  <br />
                  Design Systems
                </div>
              </div>
              <div>
                <div className="text-sm uppercase tracking-wider text-black/60 mb-2">
                  Focus
                </div>
                <div className="text-lg text-black">
                  Crafting intuitive, user-centered, and immersive digital
                  experiences
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom arrow */}
        <motion.div
          onClick={() => scrollToSection("case-studies")}
          className="hidden col-span-12 md:flex justify-center absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          animate={{
            opacity: isVisible ? 1 : 0,
            scale: isVisible ? 1 : 0.8,
            y: isVisible ? 0 : 10,
          }}
          transition={{ duration: 0.3 }}
        >
          <ArrowDown className="w-6 h-6 text-black animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}
