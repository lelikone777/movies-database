import Results from "@/components/Results";
import SearchBox from "@/components/SearchBox";
import React from "react";

export default async function SearchPage({ params }: any) {
  const searchTerm = params.searchTerm;
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${searchTerm}&language=ru-RU&page=1&include_adult=false`,
  );
  const data = await res.json();
  const results = data.results;
  return (
    <div>
      <SearchBox />
      {results && results.length === 0 ? (
        <h1 className="pt-6 text-center">Ничего не найдено</h1>
      ) : (
        results && <Results results={results} />
      )}
    </div>
  );
}
