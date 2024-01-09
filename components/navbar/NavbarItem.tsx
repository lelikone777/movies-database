"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

interface Props {
  title: string;
  param: string;
}

export default function NavbarItem({ title, param }: Props) {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  return (
    <div>
      <Link
        className={`font-semibold hover:text-amber-600 ${
          genre === param
            ? "rounded-lg underline decoration-amber-500 decoration-4 underline-offset-8"
            : ""
        }`}
        href={`/?genre=${param}`}
      >
        {title}
      </Link>
    </div>
  );
}
