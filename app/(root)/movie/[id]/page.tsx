import Image from "next/image";
import { getSingleMovie } from "@/actions/movies.action";

export default async function MoviePage({ params }: any) {
  const movieId = params.id;
  const movie = await getSingleMovie(movieId);

  return (
    <div className="w-full">
      <div className="mx-auto flex max-w-6xl flex-col content-center p-4 md:flex-row md:space-x-6 md:pt-8">
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path
          }`}
          width={500}
          height={300}
          className="rounded-lg"
          style={{ maxWidth: "100%", height: "100%" }}
          alt="alt"
        ></Image>
        <div className="p-2">
          <h2 className="mb-3 text-lg font-bold">
            {movie.title || movie.name}
          </h2>
          <p className="mb-3 text-lg">{movie.overview}</p>
          <p className="mb-3">
            <span className="mr-1 font-semibold">Date Released:</span>
            {movie.release_date || movie.first_air_date}
          </p>
          <p className="mb-3">
            <span className="mr-1 font-semibold">Rating:</span>
            {movie.vote_count}
          </p>
        </div>
      </div>
    </div>
  );
}
