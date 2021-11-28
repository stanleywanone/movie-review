import { useMemo } from 'react';
import { Flex, Text, Box, Image } from '@chakra-ui/react';
import { PageComponent } from '../../common/types/page';
import { useRouter } from 'next/router';
import { MOVIES_POSTER } from '../api/get';
import { userGernresMoives } from '../hooks/getGenresMoives';

export const Search = (): PageComponent => {
  const { genresMovies } = userGernresMoives();
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
    <Flex color={'#BBE1FA'} flexDir="column" m={2}>
      <Text fontSize="2xl" fontStyle="italic">
        {genres} Movies
      </Text>
      <Flex overflow={'scroll'} flexWrap="wrap" mt={2}>
        {genresMovies.length > 0 &&
          genresMovies.map((movie) => {
            return (
              <>
                <Box h={'250px'} w={'150px'} mb={20} mr={6}>
                  <Image
                    key={movie.id}
                    objectFit="cover"
                    src={MOVIES_POSTER + movie.poster_path}
                    alt={movie.original_title}
                  />
                  <Text color={'#BBE1FA'}>{movie.original_title}</Text>
                </Box>
              </>
            );
          })}
      </Flex>
    </Flex>
  );
};

export default Search;
