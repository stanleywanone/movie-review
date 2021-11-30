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
  Button,
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

export const Side = (): PageComponent => {
  return (
    <Flex
      m={1}
      flexDir="column"
      alignItems="flex-start"
      color={'ligthBlue.300'}
    >
      <InputGroup w="100%">
        <InputLeftElement
          pointerEvents="none"
          // eslint-disable-next-line react/no-children-prop
          children={<SearchIcon color="gray.300" />}
        />
        <Input
          placeholder="Search..."
          backgroundColor="white"
          border="1px solid darkBlue.900"
        />{' '}
      </InputGroup>
      <Text fontWeight="bold" color={'lightBlue.300'} mt={2}>
        Genres
      </Text>
      <CheckboxGroup>
        <VStack alignItems="flex-start">
          {genresOptions.map((genre) => {
            return (
              <Checkbox value={genre.value} key={genre.value}>
                <Text color={'lightBlue.300'}>{genre.label}</Text>
              </Checkbox>
            );
          })}
        </VStack>
      </CheckboxGroup>
      <Flex w={'full'} justifyContent="flex-end" mt={2}>
        {' '}
        <Button size="sm" bgColor="darkBlue.900">
          <Text>Apply</Text>
        </Button>
      </Flex>
    </Flex>
  );
};

export default Side;
