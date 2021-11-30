import { Flex } from '@chakra-ui/react';
import { Dispatch, SetStateAction } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { usePagination } from './usePagination';
import { PageComponent } from '../../types/page';

export interface PagiantionProps {
  currentPage: number;
  totalPages: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

export const Pagination = ({
  currentPage,
  totalPages,
  setCurrentPage,
}: PagiantionProps): PageComponent => {
  const { pagesArray, DOTS } = usePagination(currentPage, totalPages);

  return (
    <Flex>
      <Flex
        cursor="pointer"
        h={10}
        w={10}
        justifyContent="center"
        alignItems="center"
      >
        <ChevronLeftIcon
          mr={4}
          boxSize={6}
          onClick={currentPage > 1 && (() => setCurrentPage(currentPage - 1))}
        />
      </Flex>
      {pagesArray?.map((page) => {
        return (
          <Flex
            key={`${page} page`}
            cursor="pointer"
            onClick={page !== DOTS ? () => setCurrentPage(page) : null}
            bgColor={currentPage === page && '#3282B8'}
            h={10}
            w={10}
            justifyContent="center"
            alignItems="center"
            borderRadius="100%"
          >
            {page}
          </Flex>
        );
      })}
      <Flex
        cursor="pointer"
        h={10}
        w={10}
        justifyContent="center"
        alignItems="center"
      >
        <ChevronRightIcon
          // mr={4}
          boxSize={6}
          onClick={currentPage < 500 && (() => setCurrentPage(currentPage + 1))}
        />
      </Flex>
    </Flex>
  );
};

export default Pagination;
