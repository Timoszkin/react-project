import { Movie } from "../types/Movie";
import { ApiResponse } from "../types/ApiResponse";

const mapApiResponseProps = ({
  id,
  title,
  original_title,
  release_date,
  overview,
  vote_average,
  poster_path,
  backdrop_path,
}: ApiResponse): Movie => ({
  id: id,
  title: title,
  originalTitle: original_title,
  releaseDate: release_date ? release_date.slice(0, 4) : release_date,
  overview: overview,
  voteAverage: vote_average,
  posterPath: poster_path,
  backdropPath: backdrop_path,
});

export default mapApiResponseProps;
