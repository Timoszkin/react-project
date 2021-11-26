import './MovieList.css'

type MovieListProps = {
  results: {
    link: string,
    poster_path: string,
  }[]
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
            src={'https://image.tmdb.org/t/p/original/'.concat(el.poster_path)}
            alt="movie poster"
            className="movie__poster"
          />
        </li>
      ))}
    </ul>
  )
}
