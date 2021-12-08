import { Movie } from "../../../api/types";
import MovieListItem from "./MovieListItem";
import "./MovieList.css";

type MovieListProps = {
  results: Movie[];
};

export const MovieList = (props: MovieListProps) => {
  const { results } = props;
  return (
    <ul className="movie__list">
      {results.map((el) => (
        <MovieListItem key={el.id} {...el} />
      ))}
    </ul>
  );
};
