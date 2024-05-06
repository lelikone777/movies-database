import { getMovieCategories } from "@/actions/movies.action";
import Results from "@/components/Results";
import SearchBox from "@/components/SearchBox";
import React from "react";

export default async function Home({
  searchParams,
}: {
  searchParams: { genre: string };
}) {
  const genre = searchParams.genre || "top-rated";
  const data = await getMovieCategories(genre);
  const results = data.results;

  return (
    <div>
      <SearchBox />
      <Results results={results} />
    </div>
  );
}
