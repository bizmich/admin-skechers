'use client';
import { createUrl } from '@/lib/utils';

import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';

import ReactPaginate from 'react-paginate';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Button, buttonVariants } from './ui/button';

const Pagination = ({ totalPages }: { totalPages: string | number }) => {
  const { push } = useRouter();
  const params = useSearchParams();
  const pathname = usePathname();
  const activePage: number = params.get('skip')
    ? Number(params.get('skip'))
    : 0;

  const handleClick = ({ selected }: { selected: number }) => {
    const value = selected + 1;

    if (value) {
      const newParams = new URLSearchParams(params.toString());

      if (value) {
        newParams.set('skip', String(value));
      } else {
        newParams.delete('skip');
      }

      push(createUrl(pathname, newParams));
    }
  };

  if (!totalPages && totalPages === 0) return null;

  return (
    <div className='flex w-full justify-end'>
      <ReactPaginate
        pageClassName={buttonVariants({
          variant: 'ghost',
          size: 'sm',
        })}
        disableInitialCallback={true}
        initialPage={activePage}
        activeClassName='!bg-secondary '
        className='flex gap-2'
        breakLabel='...'
        nextLabel={
          <Button size='sm' variant='secondary'>
            <IconChevronRight size={20} />
          </Button>
        }
        onPageChange={handleClick}
        marginPagesDisplayed={1}
        pageRangeDisplayed={5}
        pageCount={Number(Math.ceil(Number(totalPages) / 50))}
        previousLabel={
          <Button size='sm' variant='secondary'>
            <IconChevronLeft size={20} />
          </Button>
        }
        renderOnZeroPageCount={null}
      />
    </div>
  );
};
export default Pagination;
