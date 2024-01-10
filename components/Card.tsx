import Link from "next/link";
import { FiThumbsUp } from "react-icons/fi";
import Image from "next/image";
import { baseUrlImg } from "@/lib/api";

export default function Card({ result }: any) {
  return (
    <div className="group cursor-pointer rounded-lg transition-shadow duration-200 sm:m-2 sm:border sm:border-slate-400 sm:shadow-md sm:hover:shadow-slate-400">
      <Link href={`/movie/${result.id}`}>
        <Image
          src={`${baseUrlImg}${result.backdrop_path || result.poster_path}`}
          width={500}
          height={300}
          className="transition-opacity duration-300 group-hover:opacity-75 sm:rounded-t-lg"
          alt="alt"
        ></Image>
        <div className="p-2">
          <p className="text-md line-clamp-2">{result.overview}</p>
          <h2 className="truncate text-lg font-bold">
            {result.title || result.name}
          </h2>
          <p className="flex items-center">
            {result.release_date || result.first_air_date}
            <FiThumbsUp className="ml-3 mr-1 h-5" />
            {result.vote_count}
          </p>
        </div>
      </Link>
    </div>
  );
}
