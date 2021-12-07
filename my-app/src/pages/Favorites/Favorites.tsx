import { store } from '../../app/store';
import { useState, useEffect } from 'react';
import { MovieList } from '../../components/dumb/MovieList';
import {Movie} from '../../api/types';
import mapApiResponseProps from '../../api/utils';

function Favorites() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const userFavorites = Object.values(store.getState().favoriteSlice.entities);

  useEffect(() => {
    setMovies([]);
    userFavorites.forEach((el) => {
      fetch(`https://api.themoviedb.org/3/movie/${el?.movie}?api_key=cf7add637863045501c3b517ed0cf82a&language=en-US`)
        .then(res => res.json())
        .then(res => setMovies((old) => [...old, mapApiResponseProps(res)]))
    })
  }, [])

  return (
    <div className="fav-page">
      <h2>Favorites</h2>
      {
        movies.length > 0 ? 
        <MovieList results={movies}/> :
        <p className="search-page__info">Nothing found</p>
      }
    </div>
  );
}

export default Favorites;
