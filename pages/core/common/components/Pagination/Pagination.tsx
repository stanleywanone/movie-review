import { Dispatch, SetStateAction, FC } from 'react';
import { Flex } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { usePagination } from './usePagination';

export interface PagiantionProps {
  currentPage: number;
  totalPages: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

export const Pagination: FC<PagiantionProps> = ({
  currentPage,
  totalPages,
  setCurrentPage,
}) => {
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
            bgColor={currentPage === page && 'darkBlue.900'}
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
          boxSize={6}
          onClick={currentPage < 500 && (() => setCurrentPage(currentPage + 1))}
        />
      </Flex>
    </Flex>
  );
};
