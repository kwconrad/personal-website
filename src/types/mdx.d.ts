import * as React from "react";

declare module "*.mdx" {
  let MDXComponent: (props: any) => React.ReactNode;
  export default MDXComponent;
  export const frontmatter: any;
}
