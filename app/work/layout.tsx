import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function InteractionLayout({ children }: Props) {
  return (
    <main className="flex h-full w-full justify-center rounded-lg p-12">
      <section className="flex h-full max-w-xl flex-col">{children}</section>
    </main>
  );
}
