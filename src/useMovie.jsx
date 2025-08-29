import { useEffect, useState } from "react";

const API_KEY = "41949caa";

export function useMovies(query) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(
    function () {
      /* callBack?.(); */
      const controller = new AbortController();
      async function fetchMovies() {
        try {
          setIsLoading(true);
          setError("");
          const res = await fetch(
            `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}&page=1`,
            { signal: controller.signal }
          );

          if (!res.ok) throw new Error("Network response was not ok");
          const data = await res.json();
          if (data.Response === "False") throw new Error(data.Error);
          setMovies(data.Search || []);
          setError("");
          setIsLoading(false);
        } catch (err) {
          if (err.name !== "AbortError") {
            setError(err.message);
          }
        } finally {
          setIsLoading(false);
        }
      }

      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }
      /* handleCloseMovie(); */
      fetchMovies();

      return function () {
        controller.abort();
      };
    },
    [query]
  );

  return { movies, isLoading, error };
}
