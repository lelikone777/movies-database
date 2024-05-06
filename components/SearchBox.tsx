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
      className="relative mx-auto mt-4 flex max-w-3xl justify-between px-5"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Введите название..."
        className="h-10 w-full flex-1 rounded-md bg-transparent px-5 outline-none placeholder:text-gray-500 dark:bg-gray-600"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        className="absolute right-10 top-1/2 h-2/3 -translate-y-1/2 cursor-pointer rounded-lg bg-amber-500 px-5  text-white disabled:bg-amber-100 disabled:text-gray-400"
        type="submit"
        disabled={search === ""}
      >
        Найти
      </button>
    </form>
  );
}
