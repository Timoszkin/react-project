import { useParams, Link } from 'react-router-dom';

import { useQuery } from '../../app/hooks';
import { useGetFavsQuery, useGetMoviesQuery,useGetPopularMoviesQuery } from '../../api/movieSlice';
import { MovieList } from '../../components/dumb/MovieList';
// import SearchContainer from '../../components/smart/SearchContainer/SearchContainer';
import Spinner from '../../components/dumb/Spinner/Spinner';
import { store } from '../../app/store';

function Favorites() {
  // page url example: /search?query=harry+potter
  const query = useQuery();
  const searchQuery = query.get('query') || '';
  const state = store.getState();
  const {
    data: movies = [],
    isFetching,
    isSuccess,
    isError,
  } = useGetFavsQuery(state.userSlice.id);

  let favResults;
  if (isSuccess) {
    
    favResults =
      movies.length > 0 ? (
        <MovieList results={movies} />
      ) : (
        <p className="search-page__info">Nothing found</p>
      );
  }
  return (
    <div className="fav-page">
      {/* <MovieList results={movies}/> */}
      {searchQuery && <h2>Favorites</h2>}
      {isFetching && <Spinner />}
      {isSuccess && favResults}
      {isError && (
        <p className="search-page__info">Oops, something went wrong</p>
      )}
    </div>
  );
}

export default Favorites;
