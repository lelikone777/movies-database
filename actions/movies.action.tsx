import { baseUrl, bearer } from "@/lib/api";

export const getMovieCategories = async (movies: string) => {
  let path;
  if (movies === "fetchTopRated") {
    path = "/movie/top_rated";
  } else if (movies === "fetchTrending") {
    path = "/trending/all/week";
  } else {
    // Handle other cases if needed
    throw new Error("Invalid value for 'movies' parameter");
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

  console.log("data111111111111111111111111111111", url);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return data;
};
