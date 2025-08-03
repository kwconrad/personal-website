import { scrollToSection } from "@/lib/utils";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen bg-neutral-50 relative">
      <div className="grid grid-cols-12 gap-6 max-w-4xl mx-auto px-6 h-screen">
        <div className="col-span-12 flex flex-col justify-center">
          <div className="space-y-8">
            <div>
              <div className="text-5xl md:text-7xl leading-none font-black text-black tracking-tighter">
                Kyle Conrad,
              </div>
              <div className="text-5xl md:text-7xl leading-none font-black text-black tracking-tighter">
                Design Engineer
              </div>
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
        <div
          onClick={() => scrollToSection("case-studies")}
          className="hidden col-span-12 md:flex justify-center absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ArrowDown className="w-6 h-6 text-black animate-bounce" />
        </div>
      </div>
    </section>
  );
}
