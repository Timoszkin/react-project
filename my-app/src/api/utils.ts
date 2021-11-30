import { Movie, Response } from "./types"

const mapResponseProps = (response: Response): Movie => ({
  id: response.id,
  title: response.title,
  originalTitle: response.original_title,
  releaseDate: response.release_date,
  overview: response.overview,
  voteAverage: response.vote_average,
  posterPath: response.poster_path,
  backdropPath: response.backdrop_path,
});

export default mapResponseProps;