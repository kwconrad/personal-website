import { promises } from "fs";
import path from "path";
import grayMatter from "gray-matter";
import { PrimaryLayout } from "layouts";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

interface Props {
  projects: {
    title: string;
    cover: string;
    path: string;
    tags: string[];
  }[];
}

export default function WorkList({ projects }: Props) {
  return (
    <PrimaryLayout>
      <Head>
        <title>Projects</title>
      </Head>
      <div className="mx-auto max-w-4xl">
        <div className="pt-6">
          <div className="pb-16 flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Projects
              </h1>
              <p className="text-white">Here are my most recent projects.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {projects.map((project) => {
                return (
                  <Link href={project.path} key={project.path}>
                    <div className="w-full h-auto aspect-video bg-gray-900 rounded-lg hover:bg-gray-800 cursor-pointer transition-colors duration-200 ease-in-out relative overflow-clip">
                      <Image
                        layout="fill"
                        src={project.cover}
                        alt={project.cover + "image"}
                      ></Image>
                      <div className="p-6 absolute inset-0 flex items-end bg-black/50">
                        <div className="flex flex-col gap-3">
                          <h3 className="text-xl font-bold text-gray-50">
                            {project.title}
                          </h3>
                          <div className="flex gap-2">
                            {project.tags.map((tag: string) => (
                              <div
                                key={tag}
                                className="px-2 py-1 bg-gray-300 rounded-full"
                              >
                                <p className="text-sm text-gray-1200 font-bold">
                                  {tag}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </PrimaryLayout>
  );
}

export async function getStaticProps() {
  const projectsDir = path.join(process.cwd(), "src/pages/projects");

  const filenames = await promises.readdir(projectsDir);

  const files = await Promise.all(
    filenames.map(async (filename) => {
      const filePath = path.join(projectsDir, filename);
      const content = await promises.readFile(filePath, "utf8");
      const matter = grayMatter(content);

      return {
        filename,
        matter,
      };
    })
  );

  const projects = files.map((file) => {
    return {
      path: `/projects/${file.filename.replace(".mdx", "")}`,
      title: file.matter.data.title,
      tags: file.matter.data.tags,
      cover: file.matter.data.cover,
    };
  });

  return {
    props: {
      projects,
    },
  };
}
