import { FC } from 'react';
import { Flex, Box, Text, Image } from '@chakra-ui/react';
import { useGetMovies } from './core/components/movie/hooks/getMovies';
import { MOVIES_POSTER } from './core/components/movie/api/get';

export const Index: FC = () => {
  const { popularMovies, topRatedMovies, nowPlayingMovies } = useGetMovies();

  return (
    <Flex color={'lightBlue.300'} flexDir="column">
      <Text m={2} fontSize="2xl" fontStyle="italic">
        Now Playing Movies
      </Text>
      <Flex overflow="scroll" justifyContent="space-around">
        {nowPlayingMovies.length > 0 &&
          nowPlayingMovies.map((movie) => {
            return (
              <>
                <Box boxSize="15%">
                  <Image
                    key={movie.id}
                    objectFit="cover"
                    src={MOVIES_POSTER + movie.poster_path}
                    alt={movie.original_title}
                  />
                  <Text>{movie.original_title}</Text>
                </Box>
              </>
            );
          })}
      </Flex>
      <Text m={2} fontSize="2xl" fontStyle="italic">
        The Popular Movies
      </Text>
      <Flex overflow="scroll" justifyContent="space-around">
        {popularMovies.length > 0 &&
          popularMovies.map((movie) => {
            return (
              <>
                <Box boxSize="15%">
                  <Image
                    key={movie.id}
                    objectFit="cover"
                    src={MOVIES_POSTER + movie.poster_path}
                    alt={movie.original_title}
                  />
                  <Text>{movie.original_title}</Text>
                </Box>
              </>
            );
          })}
      </Flex>
      <Text m={2} fontSize="2xl" fontStyle="italic">
        The Top Rated Movies
      </Text>
      <Flex overflow="scroll" justifyContent="space-around">
        {topRatedMovies.length > 0 &&
          topRatedMovies.map((movie) => {
            return (
              <>
                <Box boxSize="15%">
                  <Image
                    key={movie.id}
                    objectFit="cover"
                    src={MOVIES_POSTER + movie.poster_path}
                    alt={movie.original_title}
                  />
                  <Text>{movie.original_title}</Text>
                </Box>
              </>
            );
          })}
      </Flex>
    </Flex>
  );
};

export default Index;
