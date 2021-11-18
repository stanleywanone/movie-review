import { Image, Flex, Text, Box } from '@chakra-ui/react';
import { PageComponent } from '../../common/types/page';
import { MOVIES_POSTER } from '../../movie/api/get';

export interface ContentProps {
  popularMovies: any;
  topRatedMovies: any;
  nowPlayingMovies: any;
}

export const Content = ({
  popularMovies,
  topRatedMovies,
  nowPlayingMovies,
}: ContentProps): PageComponent => {
  return (
    <Flex color={'#BBE1FA'} flexDir="column">
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
                  <Text color={'#BBE1FA'}>{movie.original_title}</Text>
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
                  <Text color={'#BBE1FA'}>{movie.original_title}</Text>
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
                  <Text color={'#BBE1FA'}>{movie.original_title}</Text>
                </Box>
              </>
            );
          })}
      </Flex>
    </Flex>
  );
};
