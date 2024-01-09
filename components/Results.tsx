import { Movie, Movies } from "@/types";

export default function Results({ results }: Movies) {
  console.log({ results });
  return (
    <div>
      {results.map((result: Movie) => (
        <div key={result.id}>
          <h2>{result.original_title}</h2>
        </div>
      ))}
    </div>
  );
}
