import { useEffect, useState } from 'react';
import useFetch from 'use-http';
import {
  GET_POPULAR_MOVIES,
  GET_TOP_RATED_MOVIES,
  GET_NOW_PLAYING_MOVIES,
  TMBD,
} from '../api/get';

interface UseGetMoviesReturn {
  popularMovies: any;
  topRatedMovies: any;
  nowPlayingMovies: any;
}

export const useGetMovies = (): UseGetMoviesReturn => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const { get, response } = useFetch(TMBD);

  useEffect(() => {
    getPopularMovies();
    getTopRatedMovies();
    getnowPlayingMovies();
  }, []);

  const getPopularMovies = async (): Promise<any> => {
    const popularMovies = await get(GET_POPULAR_MOVIES);

    if (response.ok) setPopularMovies(popularMovies.results.slice(0, 6));
  };

  const getTopRatedMovies = async (): Promise<any> => {
    const topRatedMovies = await get(GET_TOP_RATED_MOVIES);

    if (response.ok) setTopRatedMovies(topRatedMovies.results.slice(0, 6));
  };

  const getnowPlayingMovies = async (): Promise<any> => {
    const nowPlayingMovies = await get(GET_NOW_PLAYING_MOVIES);

    if (response.ok) setNowPlayingMovies(nowPlayingMovies.results.slice(0, 6));
  };

  return {
    popularMovies,
    topRatedMovies,
    nowPlayingMovies,
  };
};
