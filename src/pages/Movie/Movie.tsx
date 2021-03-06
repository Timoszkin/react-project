import { useParams, Link } from "react-router-dom";
import { useGetMovieQuery } from "../../api/movieSlice";
import Spinner from "../../components/Spinner/Spinner";
import { MovieInfo } from "../../components/MovieInfo";
import { Movie as MovieType } from "../../types/Movie";

function Movie() {
  const { id = 0 } = useParams();
  const { data: movie, isFetching, isSuccess, isError } = useGetMovieQuery(+id);

  return (
    <div className="movie-page">
      {isFetching && <Spinner />}
      {isSuccess && <MovieInfo {...(movie as MovieType)} />}
      {isError && (
        <>
          <h1>Oops, something went wrong</h1>
          <p>
            Go back to the <Link to="/">main page</Link>
          </p>
        </>
      )}
    </div>
  );
}

export default Movie;
