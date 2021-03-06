const IMDB_API_KEY = process.env.NEXT_PUBLIC_API_KEY;
export const TMBD = `https://api.themoviedb.org/3`;
export const GET_POPULAR_MOVIES = `/movie/popular?api_key=${IMDB_API_KEY}&language=en-US&page=1`;
export const GET_TOP_RATED_MOVIES = `/movie/top_rated?api_key=${IMDB_API_KEY}&language=en-US&page=1`;
export const GET_NOW_PLAYING_MOVIES = `/movie/now_playing?api_key=${IMDB_API_KEY}&language=en-US&page=1`;
export const MOVIES_POSTER = `https://www.themoviedb.org/t/p/w440_and_h660_face`;
export const GET_GENRES_MOVIES = `/discover/movie?api_key=${IMDB_API_KEY}`;
export const GET_MOVIE_DETAILS = (id: string): string => {
  return `/movie/${id}?api_key=${IMDB_API_KEY}&language=en-US&page=1`;
};
export const GET_SEARCH_MOVIES = `search/movie?api_key=${IMDB_API_KEY}&language=en-US&page=1`;
