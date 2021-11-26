import './MovieInfo.css'

type MovieIndoProps = {
  name: string;
  posterPath: string,
  plot: string,
  rating: number,
  director: string,
  year: number,
}

export const MovieInfo = (props: MovieIndoProps) => {
  const { name, posterPath, plot, rating, director, year, } = props;
  // wrap this in a Router component in order for it to transfer you to the movie
  return (
    <div
      className="movie__background"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${posterPath})`,
      }}
    >
      <div
        className="movie__foreground"
      >
        <img
          src={'https://image.tmdb.org/t/p/original/'.concat(posterPath)}
          alt="movie poster"
          className="movie__poster--big"
        />
        <div
          className="movie__information"
        >
          <h1>{name}</h1><span>({year})</span>
          <h3
            className="movie__information--header"
          >
            PLOT
          </h3>
          <p>
            {plot}
          </p>
          <div>
            <div
              className="movie__information--details"
            >
              <h3
                className="movie__information--header"
              >
                RATING
              </h3>
              <p
                className="movie__information--rating"
              >
                {rating}
              </p>
            </div>

            <div
              className="movie__information--details"
            >
              <h3
                className="movie__information--header"
              >
                DIRECTOR
              </h3>
              <p>{director}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
