import { useEffect, useState } from 'react';
import useFetch from 'use-http';
import { useRouter } from 'next/router';
import { GET_MOVIE_DETAILS, TMBD } from '../api/get';

export interface UseMovieDetailsReturn {
  movieDetails: any;
}

export const useGetMoiveDetails = (): UseMovieDetailsReturn => {
  const router = useRouter();
  const [movieDetails, setMovieDetails] = useState(null);

  const { get, response } = useFetch(TMBD);

  useEffect(() => {
    if (router.query.id) {
      getMovieDetails();
    }
  }, [router.query.id]);

  const getMovieDetails = async (): Promise<any> => {
    const movieDetailsResponse = await get(
      GET_MOVIE_DETAILS(router.query.id as any)
    );

    if (response.ok) setMovieDetails(movieDetailsResponse);
  };
  return {
    movieDetails,
  };
};
