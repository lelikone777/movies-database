"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBox() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    router.push(`/search/${search}`);
  };
  return (
    <form
      className="mx-auto flex max-w-6xl justify-between px-5"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Search keywords..."
        className="h-14 w-full flex-1 rounded-md bg-transparent outline-none placeholder:text-gray-500"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        className="text-amber-600 disabled:text-gray-400"
        disabled={search === ""}
      >
        Search
      </button>
    </form>
  );
}
