//import { Link } from "react-router-dom";
import { useGetPopularMoviesQuery } from '../../api/movieSlice';
import { MovieInfo } from '../../components/dumb/MovieInfo';
import { MovieList } from '../../components/dumb/MovieList';
import SearchContainer from '../../components/smart/SearchContainer/SearchContainer';
import Spinner from '../../components/dumb/Spinner/Spinner';

function Home() {
  const {
    data: movies = [],
    isFetching,
    isSuccess,
    isError,
  } = useGetPopularMoviesQuery();

  return (
    <div className="homepage">
      {isFetching && <Spinner />}
      {isSuccess && (
        <>
          {/* <Link to={`/movie/${movies[0].id}`}> */}
          <MovieInfo {...movies[0]} />
          {/* </Link> */}
          <SearchContainer />
          <h2>Popular movies</h2>
          <MovieList results={movies.slice(1)} />
        </>
      )}
      {isError && (
        <>
          <h1>Oops, something went wrong</h1>
          <p>Refresh the page or try again later</p>
        </>
      )}
    </div>
  );
}

export default Home;
