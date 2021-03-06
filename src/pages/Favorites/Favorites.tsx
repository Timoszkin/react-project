import { store } from "../../store/store";
import { useState, useEffect } from "react";
import { MovieList } from "../../components/MovieList";
import { Movie } from "../../types/Movie";
import mapApiResponseProps from "../../api/apiUtils";
import { apiConfig } from '../../api/constants';

function Favorites() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const userFavorites = Object.values(store.getState().favoriteSlice.entities);
  useEffect(() => {
    setMovies([]);
    userFavorites.forEach((el) => {
      fetch(
        `https://api.themoviedb.org/3/movie/${el?.movie}?api_key=${apiConfig.key}&language=en-US`
      )
        .then((res) => res.json())
        .then((res) => setMovies((old) => [...old, mapApiResponseProps(res)]));
    });
  }, []);

  return (
    <div className="fav-page">
      <h2>Favorites</h2>
      {movies.length > 0 ? (
        <MovieList results={movies} />
      ) : (
        <p className="search-page__info">Nothing found</p>
      )}
    </div>
  );
}

export default Favorites;
