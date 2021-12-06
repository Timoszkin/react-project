import "./MovieInfo.css";
import { TMDB_IMAGE_PATH } from "../../../api/movieImageLink";
import Button from "../Button/Button";
import {
  addFavorites,
  removeFavorites,
} from "../../../features/user/userSlice";
import { useSelector, shallowEqual } from "react-redux";
import { RootState } from "../../../app/store";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router'
import { addFavLocalStore, removeFavLocalStore } from '../../../app/localStoreFunctions'
import { Movie } from '../../../api/types'

export const MovieInfo = (props: Movie) => {
  const dispatch = useDispatch();
  const navigator = useNavigate();

  //const { name, posterPath, plot, rating, director, year, } = props;
  const { id, title: name, posterPath, overview: plot, voteAverage: rating, releaseDate: year, } = props;

  const favoritesList = useSelector(
    (state: RootState) => state.userSlice.favorites,
    shallowEqual
  );
  const currentUserID = useSelector(
    (state: RootState) => state.userSlice.id,
    shallowEqual
  );

  let buttonText = favoritesList.find((el) => el === id)
    ? "Remove from Favorites"
    : "Add to Favorites";

  const toggleFavorites = () => {
    if (currentUserID === 0) {
      navigator("/signin");
      return;
    } else {
      if (favoritesList.find((el) => el === id)) {
        dispatch({ type: "user/removeFavorites", payload: id });
      } else {
        dispatch({ type: "user/addFavorites", payload: id });
      }
    }
  };
  return (
    <div
      className="movie__background"
      style={{
        backgroundImage: `url(${TMDB_IMAGE_PATH}${posterPath})`,
      }}
    >
      <div className="movie__foreground">
        <img
          src={"https://image.tmdb.org/t/p/original/".concat(posterPath)}
          alt="movie poster"
          className="movie__poster--big"
        />
        <div className="movie__information">
          <h1>{name}</h1>
          <span>({year})</span>

          <div className="movie__information--plot">
            <h3 className="movie__information--header">PLOT</h3>
            {plot}
          </div>
          <div>
            <div className="movie__information--details">
              <h3 className="movie__information--header">RATING</h3>
              <p className="movie__information--rating">{rating}</p>
            </div>

            {/* API DOESN'T SUPPORT DIRECTOR INFO :C */}
            {/* <div
              className="movie__information--details"
            >
              <h3
                className="movie__information--header"
              >
                DIRECTOR
              </h3>
            <div className="movie__information--details">
              <h3 className="movie__information--header">DIRECTOR</h3>
              <p>{director}</p>
            </div> */}
          </div>
          <Button text={buttonText} handleClick={toggleFavorites} />
        </div>
      </div>
    </div>
  );
};
