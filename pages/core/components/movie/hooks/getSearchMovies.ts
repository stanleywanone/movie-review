import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import useFetch from 'use-http';
import { useRouter } from 'next/router';
import { GET_SEARCH_MOVIES, TMBD } from '../api/get';

export interface UseSearchMoviesReturn {
  searchMovies: any;
  currentPage: number;
  getsearchMovies: () => Promise<any>;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  searchInput: string;
}

export const useSearchMovies = (): UseSearchMoviesReturn => {
  const router = useRouter();
  const [searchMovies, setsearchMovies] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const { get, response } = useFetch(TMBD);

  useEffect(() => {
    if (router.query.query) {
      getsearchMovies();
    }
  }, [router.query.query, currentPage]);

  const getsearchMovies = async (): Promise<any> => {
    const searchMoviesResponse = await get(
      GET_SEARCH_MOVIES + `&query=${router.query.query}&page=${currentPage}`
    );

    if (response.ok) setsearchMovies(searchMoviesResponse);
  };
  return {
    searchMovies,
    currentPage,
    searchInput: router.query.query as any,
    getsearchMovies,
    setCurrentPage,
  };
};
