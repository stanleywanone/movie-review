import {
  HStack,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
  Flex,
} from '@chakra-ui/react';
import { PageComponent } from '../../common/types/page';
import { SearchIcon } from '@chakra-ui/icons';

/**Color map :1B262C, 0F4C75, 3282B8 BBE1FA */
export const Home = (): PageComponent => {
  return (
    <Flex flexDir="column" p={1} backgroundColor="#1B262C">
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
              // w="50%"
              backgroundColor="white"
              border="1px solid #3282B8"
            />{' '}
          </InputGroup>
        </HStack>
      </HStack>

      <HStack></HStack>
    </Flex>
  );
};

export default Home;
