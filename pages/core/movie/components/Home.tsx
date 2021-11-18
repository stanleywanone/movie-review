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
import { Content } from './Content';
import { useGetMovies } from '../hooks/getMovies';

/**Color map :1B262C, 0F4C75, 3282B8 BBE1FA */
export const Home = (): PageComponent => {
  const { popularMovies } = useGetMovies();
  console.log('popularMovies, ', popularMovies);
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
      <Flex overflow="scroll" height={'100%'}>
        <Box flex="1" h={'full'} bgColor={'#0F4C75'}></Box>
        <Box flex="7">
          <Content popularMovies={popularMovies}></Content>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Home;
