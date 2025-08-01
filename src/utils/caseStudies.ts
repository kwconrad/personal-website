// Utility to automatically discover and load case studies using Vite's import.meta.glob
// This automatically finds all MDX files in the case-studies directory

// Function to parse frontmatter from raw content
function parseFrontmatter(content: string): any {
  const frontmatterMatch = content.match(/^---\s*\n([\s\S]*?)\n---/);
  if (!frontmatterMatch) return {};

  const frontmatterText = frontmatterMatch[1];
  const frontmatter: any = {};

  // Simple YAML-like parsing for basic frontmatter
  frontmatterText.split("\n").forEach((line) => {
    const colonIndex = line.indexOf(":");
    if (colonIndex > 0) {
      const key = line.substring(0, colonIndex).trim();
      const value = line.substring(colonIndex + 1).trim();

      // Remove quotes and parse arrays
      if (value.startsWith("[") && value.endsWith("]")) {
        frontmatter[key] = value
          .slice(1, -1)
          .split(",")
          .map((v) => v.trim().replace(/['"]/g, ""));
      } else {
        frontmatter[key] = value.replace(/['"]/g, "");
      }
    }
  });

  return frontmatter;
}

// Automatically import all case study MDX files
const mdxFiles = import.meta.glob("../content/case-studies/*.mdx", {
  eager: true,
  import: "default",
});

// Try to import frontmatter exports (if available)
const mdxFrontmatter = import.meta.glob("../content/case-studies/*.mdx", {
  eager: true,
  import: "frontmatter",
});

// Import raw content for frontmatter parsing fallback
const mdxRawContent = import.meta.glob("../content/case-studies/*.mdx", {
  eager: true,
  query: "?raw",
  import: "default",
});

// Process the imported files to create our case studies data
export const caseStudiesData: CaseStudyMetadata[] = Object.entries(mdxFiles)
  .map(([path]) => {
    const filename = path.split("/").pop()?.replace(".mdx", "") || "";

    // Try to get frontmatter from export first, then fall back to parsing raw content
    let frontmatter: any = mdxFrontmatter[path];
    if (!frontmatter || Object.keys(frontmatter).length === 0) {
      const rawContent = mdxRawContent[path] as string;
      frontmatter = parseFrontmatter(rawContent);
    }

    return {
      ...frontmatter,
      slug: frontmatter.slug || filename,
    };
  })
  .filter(Boolean);

// Create modules mapping for dynamic loading
export const caseStudyModules: Record<string, any> = {};
Object.entries(mdxFiles).forEach(([path, module]) => {
  const filename = path.split("/").pop()?.replace(".mdx", "") || "";

  // Get frontmatter to determine the slug
  let frontmatter: any = mdxFrontmatter[path];
  if (!frontmatter || Object.keys(frontmatter).length === 0) {
    const rawContent = mdxRawContent[path] as string;
    frontmatter = parseFrontmatter(rawContent);
  }

  const slug = frontmatter?.slug || filename;
  caseStudyModules[slug] = module;
});

// Get case study by slug
export function getCaseStudyBySlug(slug: string) {
  return caseStudyModules[slug];
}

// Get all case study metadata (synchronous)
export function getAllCaseStudyMetadata(): CaseStudyMetadata[] {
  return caseStudiesData;
}

// Interface for case study metadata
export interface CaseStudyMetadata {
  id: string;
  slug: string;
  title: string;
  overview: string;
  tools: string[];
  techniques: string[];
  role?: string;
  goal?: string;
  image: string;
  year: string;
}
