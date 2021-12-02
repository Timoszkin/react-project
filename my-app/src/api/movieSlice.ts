import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import apiConfig from './apiConfig';
import { Movie, Response } from './types';
import mapResponseProps from './utils';

export const movieSlice = createApi({
  reducerPath: 'movieAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3' }),
  endpoints: (builder) => ({
    getMovie: builder.query<Movie, number | string>({
      query: (id: number | string) => ({
        url: `/movie/${id}`,
        params: {
          api_key: apiConfig.key,
        },
      }),
      transformResponse: (response: Response) => mapResponseProps(response),
    }),
    getPopularMovies: builder.query<Movie[], void>({
      query: () => ({
        url: `/movie/popular`,
        params: {
          api_key: apiConfig.key,
        },
      }),
      transformResponse: (response: { results: Response[] }) =>
        response.results.map((movie) => mapResponseProps(movie)),
    }),
    getMovies: builder.query<Movie[], string>({
      query: (title: string) => ({
        url: `/search/movie`,
        params: {
          api_key: apiConfig.key,
          query: title,
        },
      }),
      transformResponse: (response: { results: Response[] }) =>
        response.results.map((movie) => mapResponseProps(movie)),
    }),
  }),
});

export const { useGetMovieQuery, useGetPopularMoviesQuery, useGetMoviesQuery } =
  movieSlice;
