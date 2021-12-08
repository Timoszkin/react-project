import { useGetPopularMoviesQuery } from "../../api/movieSlice";
import { MovieInfo } from "../../components/dumb/MovieInfo";
import SearchContainer from "../../components/smart/SearchContainer/SearchContainer";
import Spinner from "../../components/dumb/Spinner/Spinner";
import PopularMoviesSection from "../../components/smart/PopularMoviesSection/PopularMoviesSection";

function Home() {
  const {
    data: movies = [],
    isFetching,
    isSuccess,
    isError,
  } = useGetPopularMoviesQuery(1);

  return (
    <div className="homepage">
      {isFetching && <Spinner />}
      {isSuccess && (
        <>
          <MovieInfo {...movies[0]} />
          <SearchContainer />
          <PopularMoviesSection />
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
