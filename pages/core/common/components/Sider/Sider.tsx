import router from 'next/router';
import {
  Text,
  Input,
  InputGroup,
  InputLeftElement,
  Flex,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { PageComponent } from '../../types/page';
import { Button } from '../Button';
import { Select } from '../Select';
import { userGernresMoives } from '../../../movie/hooks/getGenresMoives';

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

export const Sider = (): PageComponent => {
  const { selectGenre, setSelectGenre } = userGernresMoives();
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
      <Select
        options={genresOptions}
        value={selectGenre}
        onChange={(e) => setSelectGenre(e.target.value) as any}
      />
      <Flex w={'full'} justifyContent="flex-end" mt={2}>
        {' '}
        <Button
          onClick={() =>
            router.push(
              `/core/movie/components/GenreMovies?genres=${selectGenre}&page=1`
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
