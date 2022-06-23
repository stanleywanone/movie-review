import { useMemo } from 'react';

export const range = (start: number, end: number): Array<number> => {
  return Array.from(Array(end - start + 1).keys()).map((x) => x + start);
};

interface UsePaginationReturn {
  pagesArray: Array<any>;
  DOTS: string;
}

export const usePagination = (
  currentPage: number,
  totalPages: number,
  siblingCount = 2
): UsePaginationReturn => {
  const DOTS = '...';
  const pagesArray = useMemo(() => {
    if (siblingCount + 5 >= totalPages) {
      return range(1, totalPages);
    }

    /*
      Calculate left and right sibling index and make sure they are within range 1 and totalPages
    */
    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

    /*
      Do not show dots just when there is just one page number to be inserted between the extremes of sibling and the page limits i.e 1 and totalPages.
    */
    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPages - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalPages;

    /*
      Case 2: No left dots to show, but rights dots to be shown
    */
    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 3 + 2 * siblingCount;
      const leftRange = range(1, leftItemCount);

      return [...leftRange, DOTS, totalPages];
    }

    /*
      Case 3: No right dots to show, but left dots to be shown
    */
    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 3 + 2 * siblingCount;
      const rightRange = range(totalPages - rightItemCount + 1, totalPages);

      return [firstPageIndex, DOTS, ...rightRange];
    }

    /*
      Case 4: Both left and right dots to be shown
    */
    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = range(leftSiblingIndex, rightSiblingIndex);

      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
    }

    return [];
  }, [currentPage, siblingCount, totalPages]);

  return { pagesArray, DOTS };
};
