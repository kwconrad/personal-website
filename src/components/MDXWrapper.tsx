import { MDXProvider } from "@mdx-js/react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface MDXWrapperProps {
  children: React.ReactNode;
  frontmatter?: {
    title?: string;
    overview?: string;
    slug?: string;
    role?: string;
    goal?: string;
    tools?: string[];
    techniques?: string[];
    year?: string;
    id?: string;
    image?: string;
    imageAttribution?: string;
  };
}

// Custom components for MDX
const components = {
  h1: ({ children, ...props }: any) => (
    <h1
      className="text-4xl md:text-6xl font-black text-black tracking-tighter leading-tight mb-8"
      {...props}
    >
      {children}
    </h1>
  ),
  h2: ({ children, ...props }: any) => (
    <h2
      className="text-2xl md:text-3xl font-bold text-black mb-6 mt-12"
      {...props}
    >
      {children}
    </h2>
  ),
  h3: ({ children, ...props }: any) => (
    <h3
      className="text-xl md:text-2xl font-bold text-black mb-4 mt-8"
      {...props}
    >
      {children}
    </h3>
  ),
  a: ({ children, ...props }: any) => (
    <a
      className="text-blue-600 text-lg hover:text-blue-800 transition-colors underline"
      {...props}
    >
      {children}
    </a>
  ),
  p: ({ children, ...props }: any) => (
    <p className="text-black/80 text-lg leading-relaxed mb-2" {...props}>
      {children}
    </p>
  ),
  ul: ({ children, ...props }: any) => (
    <ul className="space-y-3 mb-6 pl-4 list-disc" {...props}>
      {children}
    </ul>
  ),
  li: ({ children, ...props }: any) => (
    <li className="text-black/80 text-lg" {...props}>
      {children}
    </li>
  ),
  blockquote: ({ children, ...props }: any) => (
    <blockquote
      className="border-l-4 border-black/20 my-6 p-6 bg-black/5 italic text-black/80"
      {...props}
    >
      {children}
    </blockquote>
  ),
  strong: ({ children, ...props }: any) => (
    <strong className="font-bold text-black" {...props}>
      {children}
    </strong>
  ),
  code: ({ children, ...props }: any) => (
    <code
      className="bg-neutral-200 text-black px-2 py-1 rounded text-sm font-mono"
      {...props}
    >
      {children}
    </code>
  ),
  hr: ({ ...props }) => <hr className="border-black/20 my-12" {...props} />,
};

export function MDXWrapper({ children, frontmatter }: MDXWrapperProps) {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-neutral-50/80 backdrop-blur-sm border-b border-black/10">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center">
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
      {frontmatter && (
        <section className="pt-24">
          <div className="max-w-4xl mx-auto px-6">
            <div className="grid grid-cols-12 gap-6">
              {frontmatter.image && (
                <div className="col-span-12 flex flex-col gap-1">
                  <div className="aspect-[16/9] md:aspect-[18/6] bg-black/5 overflow-hidden border border-solid border-neutral-300">
                    <img
                      src={frontmatter.image}
                      alt={frontmatter.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <caption className="text-xs text-left text-neutral-700">
                    {frontmatter.imageAttribution}
                  </caption>
                </div>
              )}
              <div className="col-span-12">
                <div className="space-y-4">
                  {frontmatter.title && (
                    <h1 className="font-serif text-4xl text-black">
                      {frontmatter.title}
                    </h1>
                  )}
                  {frontmatter.overview && (
                    <h1 className="text-xl text-black">
                      {frontmatter.overview}
                    </h1>
                  )}
                </div>
              </div>
            </div>
            <div className="pt-8 grid grid-cols-12 gap-6">
              {frontmatter.goal && (
                <div className="col-span-6">
                  <div className="text-sm tracking-wider uppercase text-black/60 mb-1">
                    Goal
                  </div>
                  <div className="text-black font-medium">
                    {frontmatter.goal}
                  </div>
                </div>
              )}
              <div className="col-span-6 flex flex-col gap-6">
                {frontmatter.role && (
                  <div className="col-span-6">
                    <div className="text-sm tracking-wider uppercase text-black/60 mb-1">
                      Role
                    </div>
                    <div className="text-black font-medium">
                      {frontmatter.role}
                    </div>
                  </div>
                )}
                {frontmatter.tools && (
                  <div className="col-span-6">
                    <div className="text-sm tracking-wider uppercase text-black/60 mb-1">
                      Tools
                    </div>
                    <div className="text-black font-medium">
                      {frontmatter.tools.join(", ")}
                    </div>
                  </div>
                )}
                {frontmatter.techniques && (
                  <div className="col-span-6">
                    <div className="text-sm tracking-wider uppercase text-black/60 mb-1">
                      Techniques
                    </div>
                    <div className="text-black font-medium">
                      {frontmatter.techniques.join(", ")}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* MDX Content */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <MDXProvider components={components}>
            <div className="prose prose-lg max-w-none">{children}</div>
          </MDXProvider>
        </div>
      </section>
    </div>
  );
}
