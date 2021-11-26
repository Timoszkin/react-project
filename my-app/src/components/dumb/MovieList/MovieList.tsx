import './MovieList.css'
import { TMDB_IMAGE_PATH } from '../../../api/movieImageLink'

type MovieResults = {
  link: string,
  poster_path: string,
}

type MovieListProps = {
  results: MovieResults[],
}

export const MovieList = (props: MovieListProps) => {
  const { results } = props;
  // wrap this in a Router component in order for it to transfer you to the movie
  return (
    <ul
      className="movie__list"
    >
      {results.map(el => (
        <li
          key={el.link}
        >
          <img
            src={TMDB_IMAGE_PATH.concat(el.poster_path)}
            alt="movie poster"
            className="movie__poster"
          />
        </li>
      ))}
    </ul>
  )
}
