import { PageComponent } from '../../common/types/page';

import {
  VStack,
  Text,
  CheckboxGroup,
  Checkbox,
  Input,
  InputGroup,
  InputLeftElement,
  Flex,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

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

export const SearchSideBar = (): PageComponent => {
  return (
    <Flex m={1} flexDir="column" alignItems="flex-start" color="#BBE1FA">
      <InputGroup w="100%">
        <InputLeftElement
          pointerEvents="none"
          // eslint-disable-next-line react/no-children-prop
          children={<SearchIcon color="gray.300" />}
        />
        <Input
          placeholder="Search..."
          backgroundColor="white"
          border="1px solid #3282B8"
        />{' '}
      </InputGroup>
      <Text fontWeight="bold">Genres</Text>
      <CheckboxGroup colorScheme="green">
        <VStack alignItems="flex-start">
          {genresOptions.map((genre) => {
            return (
              <Checkbox value={genre.value} key={genre.value}>
                {genre.label}
              </Checkbox>
            );
          })}
        </VStack>
      </CheckboxGroup>
    </Flex>
  );
};
