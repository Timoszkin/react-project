import { useQuery } from '../../app/hooks';
import { useGetMoviesByTitleQuery } from '../../api/movieSlice';
import { MovieList } from '../../components/dumb/MovieList';
import SearchContainer from '../../components/smart/SearchContainer/SearchContainer';
import './Search.css';

function Search() {
  // page url example: /search?query=harry+potter
  const query = useQuery();
  const searchQuery = query.get('query') || '';
  const {
    data: movies = [],
    isFetching,
    isSuccess,
    isError,
  } = useGetMoviesByTitleQuery(searchQuery);

  let content;
  if (isFetching) {
    content = <p className="search-page__info">Loading...</p>;
  } else if (isSuccess) {
    content =
      movies.length > 0 ? (
        <MovieList results={movies} />
      ) : (
        <p className="search-page__info">Nothing found</p>
      );
  } else if (isError) {
    content = <p className="search-page__info">Oops, something went wrong</p>;
  }

  return (
    <div className="search-page">
      <h1>Search Page</h1>
      <SearchContainer />
      {content}
    </div>
  );
}

export default Search;
