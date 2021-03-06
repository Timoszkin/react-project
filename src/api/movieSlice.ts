import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { apiConfig } from "./constants";
import { Movie } from "../types/Movie";
import { ApiResponse } from "../types/ApiResponse";
import mapApiResponseProps from "./apiUtils";

export const movieSlice = createApi({
  reducerPath: "movieAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3" }),
  endpoints: (builder) => ({
    getMovie: builder.query<Movie, number | string>({
      query: (id: number | string) => ({
        url: `/movie/${id}`,
        params: {
          api_key: apiConfig.key,
        },
      }),
      transformResponse: (response: ApiResponse) =>
        mapApiResponseProps(response),
    }),
    getPopularMovies: builder.query<Movie[], number | void>({
      query: (page = 1) => ({
        url: `/movie/popular`,
        params: {
          api_key: apiConfig.key,
          page: page,
        },
      }),
      transformResponse: (response: { results: ApiResponse[] }) =>
        response.results.map((movie) => mapApiResponseProps(movie)),
    }),
    getMovies: builder.query<Movie[], string>({
      query: (title: string) => ({
        url: `/search/movie`,
        params: {
          api_key: apiConfig.key,
          query: title,
        },
      }),
      transformResponse: (response: { results: ApiResponse[] }) =>
        response.results.map((movie) => mapApiResponseProps(movie)),
    }),
  }),
});

export const { useGetMovieQuery, useGetPopularMoviesQuery, useGetMoviesQuery } =
  movieSlice;
