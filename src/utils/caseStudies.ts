// Utility to automatically discover and load case studies using Vite's import.meta.glob
// This automatically finds all MDX files in the case-studies directory

// Function to generate a URL-friendly slug from a title
function generateSlugFromTitle(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, "") // Remove special characters
    .replace(/[\s_-]+/g, "-") // Replace spaces, underscores, and multiple hyphens with single hyphen
    .replace(/^-+|-+$/g, ""); // Remove leading/trailing hyphens
}

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

// Try to import frontmatter exports (if available, only works with MDX)
const mdxFrontmatter = import.meta.glob("../content/case-studies/*.mdx", {
  eager: true,
  import: "frontmatter",
});

// Import raw content for frontmatter parsing fallback (works with both MDX and MD)
const allRawContent = import.meta.glob("../content/case-studies/*.{mdx,md}", {
  eager: true,
  query: "?raw",
  import: "default",
});

// Process the imported files to create our case studies data
export const caseStudiesData: CaseStudyMetadata[] = Object.entries(
  allRawContent
)
  .map(([path]) => {
    const filename =
      path
        .split("/")
        .pop()
        ?.replace(/\.(mdx|md)$/, "") || "";

    // Try to get frontmatter from export first (only works for MDX), then fall back to parsing raw content
    let frontmatter: any = mdxFrontmatter[path];
    if (!frontmatter || Object.keys(frontmatter).length === 0) {
      const rawContent = allRawContent[path] as string;
      frontmatter = parseFrontmatter(rawContent);
    }

    // Auto-generate slug from title if not provided
    const autoSlug = frontmatter.title
      ? generateSlugFromTitle(frontmatter.title)
      : filename;

    return {
      ...frontmatter,
      slug: frontmatter.slug || autoSlug,
    };
  })
  .filter(Boolean);

// Create modules mapping for dynamic loading
export const caseStudyModules: Record<string, any> = {};

// Process MDX files that can be imported as modules
Object.entries(mdxFiles).forEach(([path, module]) => {
  const filename =
    path
      .split("/")
      .pop()
      ?.replace(/\.(mdx|md)$/, "") || "";

  // Get frontmatter to determine the slug
  let frontmatter: any = mdxFrontmatter[path];
  if (!frontmatter || Object.keys(frontmatter).length === 0) {
    const rawContent = allRawContent[path] as string;
    frontmatter = parseFrontmatter(rawContent);
  }

  // Auto-generate slug from title if not provided
  const autoSlug = frontmatter?.title
    ? generateSlugFromTitle(frontmatter.title)
    : filename;
  const slug = frontmatter?.slug || autoSlug;

  caseStudyModules[slug] = module;
});

// Also process any additional files that might not be in mdxFiles (like plain .md files)
Object.entries(allRawContent).forEach(([path]) => {
  // Skip if already processed in mdxFiles
  if (mdxFiles[path]) return;

  const filename =
    path
      .split("/")
      .pop()
      ?.replace(/\.(mdx|md)$/, "") || "";
  const rawContent = allRawContent[path] as string;
  const frontmatter = parseFrontmatter(rawContent);

  // Auto-generate slug from title if not provided
  const autoSlug = frontmatter?.title
    ? generateSlugFromTitle(frontmatter.title)
    : filename;
  const slug = frontmatter?.slug || autoSlug;

  // For .md files, we can't import them as modules, so we'll store the raw content
  caseStudyModules[slug] = { content: rawContent, frontmatter };
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
  imageAttribution?: string;
  year: string;
}
