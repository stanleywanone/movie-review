import { FC } from 'react';
import router from 'next/router';
import {
  Text,
  Input,
  InputGroup,
  InputLeftElement,
  Flex,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { Button } from '../Button';
import { Select } from '../Select';
import { useGernresMoives } from '@/core/components/movie/hooks/getGenresMoives';

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

export const Sider: FC = () => {
  const { selectGenre, setSelectGenre } = useGernresMoives();
  const onSearch = (event): void => {
    if (event.key === 'Enter')
      router.push(
        `/core/components/movie/components/SearchMovies?query=${event.target.value}`
      );
  };
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
          onKeyDown={onSearch}
        />{' '}
      </InputGroup>
      <Text fontWeight="bold" color={'lightBlue.300'} mt={2}>
        Genres
      </Text>
      <Select
        options={genresOptions}
        value={selectGenre}
        onChange={(e) => setSelectGenre(e.target.value) as any}
      />
      <Flex w={'full'} justifyContent="flex-end" mt={2}>
        {' '}
        <Button
          onClick={() =>
            selectGenre &&
            router.push(
              `/core/components/movie/components/GenreMovies?genres=${selectGenre}&page=1`
            )
          }
        >
          <Text>Apply</Text>
        </Button>
      </Flex>
    </Flex>
  );
};

Sider.displayName = 'Sider';
