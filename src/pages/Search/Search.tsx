import { useQuery } from "../../app/hooks";
import { useGetMoviesQuery } from "../../api/movieSlice";
import { MovieList } from "../../components/MovieList";
import SearchContainer from "../../components/SearchContainer/SearchContainer";
import "./Search.css";
import Spinner from "../../components/Spinner/Spinner";

function Search() {
  const query = useQuery();
  const searchQuery = query.get("query") || "";
  const {
    data: movies = [],
    isFetching,
    isSuccess,
    isError,
  } = useGetMoviesQuery(searchQuery, { skip: !searchQuery });

  let searchResults;
  if (isSuccess) {
    searchResults =
      movies.length > 0 ? (
        <MovieList results={movies} />
      ) : (
        <p className="search-page__info">Nothing found</p>
      );
  }

  return (
    <div className="search-page">
      <SearchContainer />
      {searchQuery && <h2>Search results</h2>}
      {isFetching && <Spinner />}
      {isSuccess && searchResults}
      {isError && (
        <p className="search-page__info">Oops, something went wrong</p>
      )}
    </div>
  );
}

export default Search;
