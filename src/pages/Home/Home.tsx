import { useGetPopularMoviesQuery } from "../../api/movieSlice";
import { MovieInfo } from "../../components/MovieInfo";
import SearchContainer from "../../components/SearchContainer/SearchContainer";
import Spinner from "../../components/Spinner/Spinner";
import PopularMoviesSection from "../../components/PopularMoviesSection/PopularMoviesSection";

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
