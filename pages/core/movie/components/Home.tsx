import {
  HStack,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
  Box,
  Flex,
} from '@chakra-ui/react';
import { PageComponent } from '../../common/types/page';
import { SearchIcon } from '@chakra-ui/icons';
import { SearchSideBar } from './SearchSideBar';
import { Content } from './Content';
import { useGetMovies } from '../hooks/getMovies';

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
/**Color map :1B262C, 0F4C75, 3282B8 BBE1FA */
export const Home = (): PageComponent => {
  const { popularMovies, topRatedMovies, nowPlayingMovies } = useGetMovies();

  return (
    <Flex flexDir="column" p={1} backgroundColor="#1B262C" height="100%">
      <HStack color="#3282B8" justifyContent="space-between">
        <Text fontSize="32px">MOVIES SEARCH</Text>
        <HStack>
          <InputGroup w="xl">
            <InputLeftElement
              pointerEvents="none"
              // eslint-disable-next-line react/no-children-prop
              children={<SearchIcon color="gray.300" />}
            />
            <Input
              placeholder="Search for movies..."
              backgroundColor="white"
              border="1px solid #3282B8"
            />{' '}
          </InputGroup>
        </HStack>
      </HStack>
      <HStack size="md" justifyContent="space-between" mr={2} color="#BBE1FA">
        {genresOptions.map((genre) => {
          return (
            <Box key={genre.value} h={10} mt={1} ml={2}>
              <Text key={genre.value}>{genre.label}</Text>
            </Box>
          );
        })}
      </HStack>
      <Flex overflow="scroll" height={'100%'}>
        <Box flex="1" h={'full'}>
          {' '}
          <SearchSideBar />
        </Box>
        <Box flex="7">
          <Content
            topRatedMovies={topRatedMovies}
            popularMovies={popularMovies}
            nowPlayingMovies={nowPlayingMovies}
          ></Content>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Home;
