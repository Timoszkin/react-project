import './MovieInfo.css'
import { TMDB_IMAGE_PATH } from '../../../api/movieImageLink'
import Button from "../Button/Button"
import { addFavorites, removeFavorites } from '../../../features/user/userSlice'
import { useSelector, shallowEqual } from 'react-redux'
import { RootState } from '../../../app/store'
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router'
import { MovieInfoProps } from '../../../types/MovieInfoProps'
import { addFavLocalStore, removeFavLocalStore } from '../../../app/localStoreFunctions'

export const MovieInfo = (props: MovieInfoProps) => {
  const dispatch = useDispatch();
  const navigator = useNavigate();

  const { name, posterPath, plot, rating, director, year, } = props;
  const favoritesList = useSelector((state: RootState) => state.userSlice.favorites, shallowEqual);
  const currentUserID = useSelector((state: RootState) => state.userSlice.id, shallowEqual);

  let buttonText = favoritesList.find(el => el === name)
    ? "Remove from Favorites"
    : "Add to Favorites"

  const toggleFavorites = () => {
    if (currentUserID > 0) {
      navigator('/signin')
      return;
    } else {
      if (favoritesList.find(el => el === name)) {
        dispatch(removeFavorites(name));
        removeFavLocalStore(currentUserID, name)
        buttonText = "Add to Favorites";
      } else {
        dispatch(addFavorites(name));
        addFavLocalStore(currentUserID, name)
        buttonText = "Remove from Favorites";
      }
    }
  }
  return (
    <div
      className="movie__background"
      style={{
        backgroundImage: `url(${TMDB_IMAGE_PATH}${posterPath})`,
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

          <div
            className="movie__information--plot"
          >
            <h3
              className="movie__information--header"
            >
              PLOT
            </h3>
            {plot}
          </div>
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
          <Button
            text={buttonText}
            handleClick={toggleFavorites}
          />
        </div>
      </div>
    </div>
  )
}
