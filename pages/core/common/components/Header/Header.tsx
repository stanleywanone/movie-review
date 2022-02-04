import { FC } from 'react';
import { useRouter } from 'next/router';
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
/**Color map :1B262C, 0F4C75, 3282B8 BBE1FA */
export const Header: FC = () => {
  const router = useRouter();

  const onSearch = (event): void => {
    if (event.key === 'Enter')
      router.push(
        `/core/components/movie/components/SearchMovies?query=${event.target.value}`
      );
  };
  return (
    <Flex flexDir="column">
      <Flex justifyContent="space-between">
        <HStack color={'darkBlue.900'}>
          <Text
            cursor="pointer"
            fontSize="32px"
            fontWeight="bold"
            onClick={() => router.push(`/`)}
          >
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
              border="1px solid darkBlue.900"
              onKeyDown={onSearch}
            />{' '}
          </InputGroup>
        </HStack>
      </Flex>
      <Flex>
        <Flex
          justifyContent="space-between"
          mr={2}
          color="lightBlue.300"
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
                      `/core/components/movie/components/GenreMovies?genres=${genre.value}&page=1`
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

Header.displayName = 'Header';
