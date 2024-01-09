import { getMovieCategories } from "@/actions/movies.action";
import Results from "@/components/Results";

export default async function Home({
  searchParams,
}: {
  searchParams: { genre: string };
}) {
  const genre = searchParams.genre || "fetchTopRated";
  // console.log(genre);
  const data = await getMovieCategories(genre);
  const results = data.results;

  return (
    <div>
      <Results results={results} />
    </div>
  );
}
