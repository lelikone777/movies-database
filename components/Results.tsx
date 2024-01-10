import { Movie, Movies } from "@/types";
import Card from "@/components/Card";

export default function Results({ results }: Movies) {
  return (
    <div className="mx-auto max-w-6xl py-4 sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {results.map((result: Movie) => (
        <Card key={result.id} result={result} />
      ))}
    </div>
  );
}
