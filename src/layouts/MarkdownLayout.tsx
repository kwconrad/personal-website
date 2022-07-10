import { MDXProvider } from "@mdx-js/react";
import Image, { ImageProps } from "next/image";
import React from "react";
import { PrimaryLayout } from "layouts";
import Head from "next/head";
import Link from "next/link";
import { routes } from "lib";
import { IconArrowLeft } from "icons";

const ResponsiveImage = (
  props: any // Figure out the props
) => <Image alt={props.alt} layout="responsive" {...props} />;

const components = {
  img: ResponsiveImage,
  h1: (props: React.HTMLProps<HTMLHeadingElement>) => (
    <h1 {...props} className="text-5xl font-bold text-gray-50" />
  ),
  h3: (props: React.HTMLProps<HTMLHeadingElement>) => (
    <h3 {...props} className="text-xl font-bold text-gray-50" />
  ),
  p: (props: React.HTMLProps<HTMLParagraphElement>) => (
    <p {...props} className="mb-6 text-base text-gray-50" />
  ),
  strong: (props: React.HTMLProps<HTMLElement>) => (
    <strong {...props} className="mb-4 text-base font-bold text-gray-50" />
  ),
  a: (props: React.HTMLProps<HTMLAnchorElement>) => (
    <a {...props} className="text-base underline text-gray-50" />
  ),
  ul: (props: React.HTMLProps<HTMLUListElement>) => (
    <ul {...props} className="p-3 rounded-lg list-disc list-inside" />
  ),
  li: (props: React.HTMLProps<HTMLLIElement>) => (
    <li {...props} className="text-base text-gray-200" />
  ),
};

interface Props {
  children: React.ReactNode;
  meta: any;
}

export default function MarkdownLayout(props: Props) {
  const { meta, children } = props;

  return (
    <MDXProvider components={components}>
      <Head>
        <title>{meta.title}</title>
      </Head>
      <PrimaryLayout>
        <main className="mx-auto max-w-4xl w-full">
          <div className="py-4">
            <Link href={routes.projects}>
              <button className="flex items-center gap-2 group">
                <IconArrowLeft className="w-5 h-5 text-white"></IconArrowLeft>
                <span className="text-base text-white group-hover:underline">
                  Go back
                </span>
              </button>
            </Link>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            {meta.title}
          </h1>
          <div className="py-4 flex gap-3">
            {meta.tags.map((tag: string) => (
              <div key={tag} className="px-2 py-1 bg-gray-800 rounded-full">
                <p className="text-sm text-white font-bold">{tag}</p>
              </div>
            ))}
          </div>
          <div className="py-6">
            <div className="w-full h-auto aspect-video overflow-hidden relative rounded-lg">
              <Image
                layout="fill"
                objectFit="cover"
                alt={`${meta.title + "img"}`}
                src={meta.cover}
              ></Image>
            </div>
          </div>
          <div className="mt-2 mb-6 p-6 bg-gray-900 rounded-lg">
            <div className="mb-6 flex flex-col gap-2">
              <p className="text-sm font-bold text-gray-100">Overview</p>
              <p className="text-base text-white">{meta.overview}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1">
                <p className="text-sm font-bold text-gray-400">Approach</p>
                <p className="text-base text-white">
                  {meta.approach.join(", ")}
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-sm font-bold text-gray-400">Duration</p>
                <p className="text-base text-white">{meta.duration}</p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-sm font-bold text-gray-400">Role</p>
                <p className="text-base text-white">{meta.role}</p>
              </div>
            </div>
          </div>
          {children}
        </main>
      </PrimaryLayout>
    </MDXProvider>
  );
}
