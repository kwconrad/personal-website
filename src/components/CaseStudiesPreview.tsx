import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface CaseStudy {
  id: string;
  title: string;
  description: string;
  tags: string[];
  impact: string;
  image: string;
  year: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: "01",
    title: "Restoring Trust and Clarity in LinkedIn Conversations",
    description:
      "Examines the role of AI and identity in LinkedIn's messaging features, proposing designs that enhance user trust and clarity.",
    tags: [
      "Interface Design",
      "Emotional UX",
      "Information Architecture",
      "UX Research",
    ],
    impact: "Improve user trust and clarity of identity in conversations",
    image:
      "https://images.metmuseum.org/CRDImages/ad/original/DP-25621-001.jpg",
    year: "2025",
  },
];

export function CaseStudiesPreview() {
  return (
    <section id="case-studies" className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="grid grid-cols-12 gap-6 mb-16">
          <div className="col-span-12 md:col-span-8">
            <h2 className="text-6xl md:text-7xl font-black text-black tracking-tighter leading-none">
              Case Studies
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 flex flex-col justify-end">
            <div className="text-sm uppercase tracking-wider text-black/60 mb-2">
              Current projects
            </div>
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="space-y-12">
          {caseStudies.map((study) => (
            <Link
              key={study.id}
              to={`/case-study/${study.id}`}
              className="flex flex-col-reverse md:flex-row gap-6 border-t border-black/20 pt-12 group cursor-pointer"
              data-cursor="button"
            >
              {/* Project Info */}
              <div className="w-full md:w-2/3">
                <h3 className="text-3xl font-black group-hover:text-black mb-4 text-black/80 transition-colors">
                  {study.title}
                </h3>
                <p className="text-black/80 mb-6 leading-relaxed">
                  {study.description}
                </p>

                <div className="space-y-4">
                  <div>
                    <div className="text-sm tracking-wider uppercase text-black/60 mb-1">
                      Impact
                    </div>
                    <div className="text-black font-medium">{study.impact}</div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-neutral-700 bg-neutral-200 rounded-sm px-3 py-1.5 text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="w-full md:w-1/3">
                <div className="aspect-[4/3] bg-black/5 overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700"
                  />
                </div>

                <div className="hidden md:flex items-center justify-between mt-4">
                  <div className="text-sm text-black/60 group-hover:text-black transition-colors">
                    View Case Study
                  </div>
                  <ArrowRight className="w-4 h-4 text-black -translate-x-2 group-hover:translate-x-0 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Projects */}
        {/* <div className="grid grid-cols-12 gap-6 mt-20">
          <div className="col-span-8">
            <button className="w-full border-2 border-white text-white hover:bg-white hover:text-black transition-all py-6 tracking-wide font-medium">
              View All Projects
            </button>
          </div>
        </div> */}
      </div>
    </section>
  );
}
