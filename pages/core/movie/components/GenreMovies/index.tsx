import { useMemo } from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { PageComponent } from '../../../common/types/page';
import { useRouter } from 'next/router';
import { userGernresMoives } from '../../hooks/getGenresMoives';
import { Pagination } from '../../../common/components/Pagination';
import { Poster } from '../../../common/components/Poster';

const GenreMovies = (): PageComponent => {
  const { genresMovies, currentPage, setCurrentPage } = userGernresMoives();
  const router = useRouter();
  const genres = useMemo(() => {
    if (router.query.genres) {
      return (
        (router.query.genres as any).charAt(0).toUpperCase() +
        router.query.genres.slice(1)
      );
    }
  }, [router.query.genres]);

  return (
    <Flex color="lightBlue.300" flexDir="column" m={2}>
      <Text fontSize="2xl" fontStyle="italic">
        {genres} Movies
      </Text>
      <Poster items={genresMovies.results} />
      <Flex mb={5}>
        <Pagination
          totalPages={genresMovies.total_pages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </Flex>
    </Flex>
  );
};

export default GenreMovies;
