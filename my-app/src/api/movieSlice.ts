import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import apiConfig from './apiConfig';
import Movie from './types';

export const movieSlice = createApi({
  reducerPath: 'movieAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3' }),
  endpoints: (builder) => ({
    getMovieByID: builder.query<Movie, number | string>({
      query: (id: number | string) => ({
        url: `/movie/${id}`,
        params: {
          api_key: apiConfig.key
        }
      })
    }),
    getPopularMovies: builder.query<Movie[], void>({
      query: () => ({
        url: `/movie/popular`,
        params: {
          api_key: apiConfig.key
        }
      }),
      transformResponse: (response: { results: Movie[] }) => response.results
    }),
    getMoviesByTitle: builder.query<Movie[], string>({
      query: (title: string) => ({
        url: `/search/movie`,
        params: {
          api_key: apiConfig.key,
          query: title
        }
      }),
      transformResponse: (response: { results: Movie[] }) => response.results
    })
  })
});

export const { 
  useGetMovieByIDQuery, 
  useGetPopularMoviesQuery, 
  useGetMoviesByTitleQuery 
} = movieSlice;