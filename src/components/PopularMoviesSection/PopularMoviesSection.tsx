import { useState, useEffect } from "react";
import { useGetPopularMoviesQuery } from "../../api/movieSlice";
import { MovieList } from "../MovieList/index";
import { Movie } from "../../types/Movie";
import Button from "../Button/Button";
import "./PopularMoviesSection.css";

function PopularMoviesSection() {
  const [page, setPage] = useState(1);
  const handleLoadMoreBtnClick = () => setPage(page + 1);

  const { data: movies = [] } = useGetPopularMoviesQuery(page);

  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);
  useEffect(() => {
    setPopularMovies([...popularMovies, ...movies]);
  }, [movies]);

  return (
    <section className="popular-movies">
      <h2 className="popular-movies__title">Popular movies</h2>
      <MovieList results={popularMovies.slice(1)} />
      <button
        className="popular-movies__btn"
        type="button"
        onClick={handleLoadMoreBtnClick}
      >
        Load more
      </button>
    </section>
  );
}

export default PopularMoviesSection;
