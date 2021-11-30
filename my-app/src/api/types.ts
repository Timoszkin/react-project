interface Movie {
  id: number,
  title: string,
  originalTitle: string,
  releaseDate: string,
  overview: string,
  voteAverage: number,
  posterPath: string,
  backdropPath: string
}

type Response = {
  id: number,
  title: string,
  original_title: string,
  release_date: string,
  overview: string,
  vote_average: number,
  poster_path: string,
  backdrop_path: string,
}

export type { Movie, Response };