import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { MDXWrapper } from "./MDXWrapper";
import { caseStudyModules, caseStudiesData } from "../utils/caseStudies";

export function CaseStudyDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [MDXContent, setMDXContent] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Get frontmatter from static data
  const frontmatter = caseStudiesData.find((study) => study.slug === slug);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const loadCaseStudy = async () => {
      if (!slug || !caseStudyModules[slug] || !frontmatter) {
        setError(true);
        setLoading(false);
        return;
      }

      try {
        const MDXComponent = caseStudyModules[slug];
        setMDXContent(() => MDXComponent);
        setLoading(false);
      } catch (err) {
        setError(true);
        setLoading(false);
      }
    };

    loadCaseStudy();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-neutral-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-black/60">Loading case study...</div>
        </div>
      </div>
    );
  }

  if (error || !MDXContent) {
    return (
      <div className="min-h-screen bg-neutral-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-black mb-4">
            Case Study Not Found
          </h1>
          <Link
            to="/"
            className="text-black/60 hover:text-black"
            data-cursor="button"
          >
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <MDXWrapper frontmatter={frontmatter}>
      <MDXContent />
    </MDXWrapper>
  );
}
