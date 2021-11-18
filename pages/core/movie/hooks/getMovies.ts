import { useEffect, useState } from 'react';
import useFetch from 'use-http';
import { GET_POPULAR_MOVIES, TMBD } from '../api/get';

interface UseGetMoviesReturn {
  popularMovies: any;
}

export const useGetMovies = (): UseGetMoviesReturn => {
  const [popularMovies, setPopularMovies] = useState([]);

  const { get, response } = useFetch(TMBD);

  useEffect(() => {
    getPopularMovies();
  }, []);

  const getPopularMovies = async (): Promise<any> => {
    const popularMovies = await get(GET_POPULAR_MOVIES);

    console.log('sdsfsd, ', popularMovies.results);
    if (response.ok) setPopularMovies(popularMovies.results.slice(0, 6));
  };

  return {
    popularMovies,
  };
};
