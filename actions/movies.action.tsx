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
      "Неправильное значения для поиска фильма. Попробуйте снова",
    );
  }

  const lang = "ru-RU";

  const url = `${baseUrl}${path}?language=${lang}`;
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
    throw new Error("Ошибка загрузки данных");
  }
  return data;
};

export const getSingleMovie = async (movieId: string) => {
  const url = `${baseUrl}/movie/${movieId}?language=ru-RU`;
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
    throw new Error("Ошибка загрузки данных");
  }
  return data;
};
