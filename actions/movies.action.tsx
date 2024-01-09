import { baseUrl, bearer } from "@/lib/api";

export const getMovieCategories = async (movies: string) => {
  let path;
  if (movies === "top-rated") {
    path = "/movie/top_rated";
  } else if (movies === "popular") {
    path = "/movie/popular";
  } else if (movies === "upcoming") {
    path = "/movie/upcoming";
  } else if (movies === "now-playing") {
    path = "/movie/now_playing";
    // } else if (movies === "fetchTrending") {
    //   path = "/trending/all/week";
  } else {
    throw new Error(
      "Invalid value for 'movies' parameter in getMovieCategories",
    );
  }
  const url = `${baseUrl}${path}`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${bearer}`,
    },
  };
  const res = await fetch(url, options);
  const data = await res.json();

  if (!res.ok) {
    throw new Error("Failed to fetch data in getMovieCategories");
  }
  return data;
};

export const getSingleMovie = async (movieId: string) => {
  const url = `${baseUrl}/movie/${movieId}`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${bearer}`,
    },
  };
  const res = await fetch(url, options);
  const data = await res.json();

  if (!res.ok) {
    throw new Error("Failed to fetch data in getSingleMovie");
  }
  return data;
};
