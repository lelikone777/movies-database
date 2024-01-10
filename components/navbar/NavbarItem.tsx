"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function NavbarItem({
  title,
  url,
}: {
  title: string;
  url: string;
}) {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  return (
    <div>
      <Link
        className={`relative z-20 font-semibold capitalize transition-colors hover:text-amber-600 ${
          genre === url
            ? "rounded-lg underline decoration-amber-500 decoration-4 underline-offset-8"
            : ""
        }`}
        href={`/?genre=${url}`}
      >
        {title}
      </Link>
    </div>
  );
}
