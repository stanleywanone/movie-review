import { useEffect, useState, useMemo } from 'react';
import useFetch from 'use-http';
import { useRouter } from 'next/router';
import { GET_GENRES_MOVIES, TMBD } from '../api/get';

export interface UserGernresMoivesReturns {
  genresMovies: any;
}

enum GenresId {
  Action = 'action',
  Adventure = 'adventure',
  Animation = 'animation',
  Comedy = 'comedy',
  Family = 'family',
  Fantasy = 'fantasy',
  Horror = 'horror',
  Crime = 'crime',
}

export const userGernresMoives = (): UserGernresMoivesReturns => {
  const router = useRouter();
  const [genresMovies, setGenresMovies] = useState([]);
  const { get, response } = useFetch(TMBD);

  const genresId = useMemo(() => {
    switch (router.query.genres) {
      case GenresId.Action:
        return '28';
      case GenresId.Animation:
        return '16';
      case GenresId.Adventure:
        return '12';
      case GenresId.Comedy:
        return '35';
      case GenresId.Crime:
        return '80';
      case GenresId.Family:
        return '10751';
      case GenresId.Fantasy:
        return '14';
      case GenresId.Horror:
        return '27';
    }
  }, [router.query.genres]);
  useEffect(() => {
    if (router.query.genres) {
      getGenresMovies();
    }
  }, [router.query.genres]);

  const getGenresMovies = async (): Promise<any> => {
    const generMoviesResponse = await get(GET_GENRES_MOVIES + genresId);

    if (response.ok) setGenresMovies(generMoviesResponse.results);
  };
  return {
    genresMovies,
  };
};