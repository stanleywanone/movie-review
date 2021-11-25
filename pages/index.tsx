import { Flex, Box, Text, Image, HStack } from '@chakra-ui/react';
import { PageComponent } from './core/common/types/page';
import { useGetMovies } from './core/movie/hooks/getMovies';
import { MOVIES_POSTER } from './core/movie/api/get';

const genresOptions = [
  { value: 'action', label: 'Action' },
  { value: 'animation', label: 'Animation' },
  { value: 'adventure', label: 'Adventure' },
  { value: 'comedy', label: 'Comedy' },
  { value: 'crime', label: 'Crime' },
  { value: 'family', label: 'Family' },
  { value: 'fantasy', label: 'Fantasy' },
  { value: 'horror', label: 'Horror' },
];
export const Index = (): PageComponent => {
  const { popularMovies, topRatedMovies, nowPlayingMovies } = useGetMovies();
  return (
    <Flex color={'#BBE1FA'} flexDir="column">
      <HStack size="md" justifyContent="space-between" mr={2} color="#BBE1FA">
        {genresOptions.map((genre) => {
          return (
            <Box key={genre.value} h={10} mt={1} ml={2}>
              <Text key={genre.value}>{genre.label}</Text>
            </Box>
          );
        })}
      </HStack>
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

export default Index;
