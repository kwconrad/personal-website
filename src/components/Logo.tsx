import { IconLogo } from "icons";
import { routes } from "lib";
import { useRouter } from "next/router";
import React from "react";

export default function Logo() {
  const router = useRouter();

  return (
    <button
      className="flex items-center gap-3 rounded-full"
      onClick={() => router.push(routes.home)}
    >
      <IconLogo className="w-12 h-12 text-white rounded-full" />
      <span className="text-base text-white font-bold">Kyle Conrad</span>
    </button>
  );
}
