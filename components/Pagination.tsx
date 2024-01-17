'use client';

import React from 'react';
import { PaginationButton } from './pagination-button';
interface PaginationButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  pageCount: number;
  page?: string;
  perPage?: string;
  createQueryString: (params: Record<string, string | number | null>) => string;
  siblingCount?: number;
}

const Pagination = ({
  pageCount = 100,
  page,
  createQueryString,
  perPage,
}: PaginationButtonProps) => {
  if (!pageCount && pageCount === 0) return null;

  return (
    <div className='flex w-full flex-wrap justify-center gap-10 md:justify-between'>
      <PaginationButton
        pageCount={Math.ceil(Number(pageCount) / Number(perPage))}
        page={String(page)}
        perPage={perPage}
        createQueryString={createQueryString}
      />
     
    </div>
  );
};
export default Pagination;
