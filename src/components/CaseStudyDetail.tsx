import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface CaseStudy {
  id: string;
  title: string;
  description: string;
  tags: string[];
  impact: string;
  image: string;
  year: string;
  fullDescription?: string;
  challenges?: string[];
  solution?: string;
  results?: string[];
}

const caseStudyData: Record<string, CaseStudy> = {
  "01": {
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
    impact: "User trust improved",
    image:
      "https://images.metmuseum.org/CRDImages/ad/original/DP-25621-001.jpg",
    year: "2025",
    fullDescription:
      "This comprehensive case study explores the evolving landscape of professional communication on LinkedIn, specifically focusing on how AI integration affects user trust and conversation clarity. Through extensive user research and iterative design processes, we developed solutions that enhance transparency and build confidence in digital professional interactions.",
    challenges: [
      "Users struggled to identify AI-generated responses",
      "Lack of transparency in message authenticity",
      "Decreased trust in professional conversations",
      "Confusion around identity verification",
    ],
    solution:
      "Implemented a comprehensive design system that includes visual indicators for AI assistance, enhanced profile verification, and clearer conversation threading to restore user confidence.",
    results: [
      "40% increase in user trust metrics",
      "25% reduction in conversation abandonment",
      "60% improvement in message clarity ratings",
      "35% increase in professional connection acceptance",
    ],
  },
};

export function CaseStudyDetail() {
  const { id } = useParams<{ id: string }>();
  const caseStudy = id ? caseStudyData[id] : null;

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-neutral-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-black mb-4">
            Case Study Not Found
          </h1>
          <Link to="/" className="text-black/60 hover:text-black">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-neutral-50/80 backdrop-blur-sm border-b border-black/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center">
          <Link
            to="/"
            className="flex items-center gap-2 text-black hover:text-black/60 transition-colors"
            data-cursor="button"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-sm text-black/60">
                  <span>{caseStudy.year}</span>
                  <span>•</span>
                  <span>Case Study {caseStudy.id}</span>
                </div>

                <h1 className="text-4xl md:text-6xl font-black text-black tracking-tighter leading-tight">
                  {caseStudy.title}
                </h1>

                <p className="text-xl text-black/80 leading-relaxed max-w-3xl">
                  {caseStudy.fullDescription}
                </p>

                <div className="flex flex-wrap gap-2 pt-4">
                  {caseStudy.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-neutral-700 bg-neutral-200 rounded-sm px-3 py-1.5 text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-4">
              <div className="aspect-[4/3] bg-black/5 overflow-hidden rounded-lg">
                <img
                  src={caseStudy.image}
                  alt={caseStudy.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-12 gap-12">
            {/* Challenges */}
            <div className="col-span-12 md:col-span-6">
              <h2 className="text-2xl font-bold text-black mb-6">Challenges</h2>
              <ul className="space-y-4">
                {caseStudy.challenges?.map((challenge, index) => (
                  <li
                    key={index}
                    className="text-black/80 flex items-start gap-3"
                  >
                    <span className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></span>
                    {challenge}
                  </li>
                ))}
              </ul>
            </div>

            {/* Solution */}
            <div className="col-span-12 md:col-span-6">
              <h2 className="text-2xl font-bold text-black mb-6">Solution</h2>
              <p className="text-black/80 leading-relaxed">
                {caseStudy.solution}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-12 bg-black/5">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-black mb-8">
            Results & Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {caseStudy.results?.map((result, index) => (
              <div key={index} className="bg-white p-6 rounded-lg">
                <p className="text-black/80 font-medium">{result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Project */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="border-t border-black/20 pt-12">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-black hover:text-black/60 transition-colors"
              data-cursor="button"
            >
              View More Projects
              <ArrowLeft className="w-4 h-4 rotate-180" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
