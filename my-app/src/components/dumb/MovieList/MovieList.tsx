import { Movie } from '../../../api/types';
import MovieListItem from './MovieListItem';
import './MovieList.css';

type MovieListProps = {
  results: Movie[];
};

export const MovieList = (props: MovieListProps) => {
  const { results } = props;
  // wrap this in a Router component in order for it to transfer you to the movie
  return (
    <ul className="movie__list">
      {results.map((el) => (
        // console.log(el);
        <MovieListItem key={el.id} {...el} />
      ))}
    </ul>
  );
};
