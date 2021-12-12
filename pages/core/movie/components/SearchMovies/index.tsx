import { Flex, Text, Spinner, Box } from '@chakra-ui/react';
import { PageComponent } from '../../../common/types/page';
import { Poster } from '../../../common/components/Poster';
import { Pagination } from '../../../common/components/Pagination';
import { useSearchMovies } from '../../hooks/getSearchMovies';

const SearchMovies = (): PageComponent => {
  const { currentPage, setCurrentPage, searchMovies, searchInput } =
    useSearchMovies();
  return (
    <>
      {searchMovies ? (
        <Flex color="lightBlue.300" flexDir="column" m={2}>
          <Text fontSize="2xl" fontStyle="italic">
            <Box as="span" fontWeight="bold" fontStyle="normal">
              {searchInput}
            </Box>{' '}
            movie results:
          </Text>
          <Poster items={searchMovies.results} />
          <Flex mb={5}>
            <Pagination
              totalPages={searchMovies.total_pages}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </Flex>
        </Flex>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default SearchMovies;
