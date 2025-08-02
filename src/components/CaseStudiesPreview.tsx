import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { getAllCaseStudyMetadata } from "../utils/caseStudies";

export function CaseStudiesPreview() {
  // Get case studies synchronously from static data
  const caseStudies = getAllCaseStudyMetadata();

  return (
    <section id="case-studies" className="bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6 pb-20">
        {/* Header */}
        <div className="grid grid-cols-12 gap-6 mb-16">
          <div className="col-span-12 md:col-span-8">
            <h2 className="text-5xl md:text-7xl font-black text-black tracking-tighter leading-none">
              Case Studies
            </h2>
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="space-y-12">
          {caseStudies.map((study) => (
            <Link
              key={study.id}
              to={`/case-study/${study.slug}`}
              className="flex flex-col-reverse md:flex-row gap-6 border-t border-black/20 pt-12 group cursor-pointer"
              data-cursor="button"
            >
              {/* Project Info */}
              <div className="w-full md:w-2/3 flex flex-col gap-3">
                <div className="flex flex-col">
                  <h3 className="text-3xl font-black group-hover:text-black mb-4 text-black/80 transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-black/80 mb-6 text-lg leading-relaxed">
                    {study.overview}
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  <div>
                    <div className="text-sm tracking-wider uppercase text-black/60 mb-1">
                      Goal
                    </div>
                    <div className="text-black font-medium">{study.goal}</div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {study.techniques.map((tag) => (
                      <span
                        key={tag}
                        className="text-neutral-700 font-medium bg-neutral-200 rounded-sm px-3 py-1.5 text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="w-full md:w-1/3">
                <div className="flex flex-col gap-1">
                  <div className="aspect-[3/4] bg-black/5 overflow-hidden">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover scale-105 group-hover:scale-125 transition-transform"
                    />
                  </div>
                  <caption className="text-xs text-left text-neutral-700">
                    {study.imageAttribution}
                  </caption>
                </div>

                <div className="hidden md:flex items-center justify-between mt-4">
                  <div className="text-black/60 group-hover:text-black transition-colors">
                    View Case Study
                  </div>
                  <ArrowRight className="w-4 h-4 text-black -translate-x-2 group-hover:translate-x-0 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
