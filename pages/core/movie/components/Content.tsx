import { Image, Flex, Text, Box } from '@chakra-ui/react';
import { PageComponent } from '../../common/types/page';
import { MOVIES_POSTER } from '../../movie/api/get';

export const Content = (popularMovies: any): PageComponent => {
  console.log('length, ', popularMovies);
  return (
    <Flex color={'#BBE1FA'} flexDir="column">
      <Text m={2} fontSize="2xl" fontStyle="italic">
        The Popular Movies
      </Text>
      <Flex overflow="scroll" justifyContent="space-around">
        {popularMovies.popularMovies.length > 0 &&
          popularMovies.popularMovies.map((movie) => {
            return (
              <>
                <Box boxSize="15%">
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
