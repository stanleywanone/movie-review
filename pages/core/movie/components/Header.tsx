import {
  HStack,
  Text,
  Flex,
  InputGroup,
  InputLeftElement,
  Input,
} from '@chakra-ui/react';
import { PageComponent } from '../../common/types/page';
import { SearchIcon } from '@chakra-ui/icons';

/**Color map :1B262C, 0F4C75, 3282B8 BBE1FA */
export const Header = (): PageComponent => {
  return (
    <Flex justifyContent="space-between">
      <HStack color="#3282B8">
        <Text fontSize="32px" fontWeight="bold">
          MOVIES SEARCH
        </Text>
      </HStack>
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
    </Flex>
  );
};

export default Header;
