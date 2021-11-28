import {
  HStack,
  Text,
  Flex,
  InputGroup,
  InputLeftElement,
  Input,
  Link,
  Box,
} from '@chakra-ui/react';

import { PageComponent } from '../../common/types/page';
import { SearchIcon } from '@chakra-ui/icons';
import { useRouter } from 'next/router';

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
export const Header = (): PageComponent => {
  const router = useRouter();
  return (
    <Flex flexDir="column">
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
      <Flex>
        <Flex
          justifyContent="space-between"
          mr={2}
          color="#BBE1FA"
          w={'full'}
          mt={2}
        >
          {genresOptions.map((genre) => {
            return (
              <Box key={genre.value} h={10} mt={1} ml={2}>
                <Link
                  key={genre.value}
                  onClick={() =>
                    router.push(
                      `/core/movie/components/Search?genres=${genre.value}`
                    )
                  }
                >
                  {genre.label}
                </Link>
              </Box>
            );
          })}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Header;
