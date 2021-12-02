import { useEffect, useState, useMemo, Dispatch, SetStateAction } from 'react';
import useFetch from 'use-http';
import { useRouter } from 'next/router';
import { GET_GENRES_MOVIES, TMBD } from '../api/get';

export interface UserGernresMoivesReturns {
  genresMovies: any;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  setSelectGenre: Dispatch<SetStateAction<string>>;
  selectGenre: string;
  currentPage: number;
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
  const [selectGenre, setSelectGenre] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
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
  }, [router.query.genres, router.query.page]);

  const getGenresMovies = async (): Promise<any> => {
    const generMoviesResponse = await get(
      GET_GENRES_MOVIES +
        `&with_genres=${genresId}` +
        `&page=${router.query.page}`
    );

    if (response.ok) setGenresMovies(generMoviesResponse);
  };
  return {
    genresMovies,
    currentPage,
    setCurrentPage,
    setSelectGenre,
    selectGenre,
  };
};
