import { Link } from 'react-router-dom';
import { Movie } from '../../../api/types';
import { TMDB_IMAGE_PATH } from '../../../api/movieImageLink';

function MovieListItem({ id, posterPath, title, releaseDate: year }: Movie) {
  const path = `/movie/${id}`;

  let content;
  if (!posterPath) {
    content = (
      <div className="movie__poster movie__poster_no-poster">
        {`${title} (${year})`}
      </div>
    );
  } else {
    content = (
      <img
        src={TMDB_IMAGE_PATH.concat(posterPath)}
        alt="movie poster"
        className="movie__poster"
      />
    );
  }

  return (
    <li key={id}>
      <Link to={path}>{content}</Link>
    </li>
  );
}

export default MovieListItem;
