import { usePathname, useRouter } from 'next/navigation';
import * as React from 'react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react';

interface PaginationButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  pageCount: number;
  page?: string;
  perPage?: string;
  createQueryString: (params: Record<string, string | number | null>) => string;
  siblingCount?: number;
}

export function PaginationButton({
  pageCount,
  page,
  perPage,
  createQueryString,
  siblingCount = 1,
  className,
  ...props
}: PaginationButtonProps) {
  const router = useRouter();
  const pathName = usePathname();

  const [isPending, startTransition] = React.useTransition();

  // Memoize pagination range to avoid unnecessary re-renders
  const paginationRange = React.useMemo(() => {
    const delta = siblingCount + 2;

    const range = [];
    for (
      let i = Math.max(2, Number(page) - delta);
      i <= Math.min(pageCount - 1, Number(page) + delta);
      i++
    ) {
      range.push(i);
    }

    if (Number(page) - delta > 2) {
      range.unshift('...');
    }
    if (Number(page) + delta < pageCount - 1) {
      range.push('...');
    }

    range.unshift(1);
    if (pageCount !== 1) {
      range.push(pageCount);
    }

    return range;
  }, [pageCount, page, siblingCount]);

  return (
    <div
      className={cn(
        'flex flex-wrap items-center justify-center gap-2',
        className
      )}
      {...props}
    >
      <Button
        aria-label='Go to first page'
        variant='outline'
        size='icon'
        className='hidden size-8 lg:flex'
        onClick={() => {
          startTransition(() => {
            router.push(
              `${pathName}?${createQueryString({
                page: 1,
                per_page: perPage ?? null,
              })}`
            );
          });
        }}
        disabled={Number(page) === 1 || isPending}
      >
        <ChevronsLeft className='size-4' aria-hidden='true' />
      </Button>
      <Button
        aria-label='Go to previous page'
        variant='outline'
        size='icon'
        className='size-8'
        onClick={() => {
          startTransition(() => {
            router.push(
              `${pathName}?${createQueryString({
                page: Number(page) - 1,
                per_page: perPage ?? null,
              })}`
            );
          });
        }}
        disabled={Number(page) === 1 || isPending}
      >
        <ChevronLeftIcon className='size-4' aria-hidden='true' />
      </Button>
      {paginationRange.map((pageNumber, i) =>
        pageNumber === '...' ? (
          <Button
            aria-label='Page separator'
            key={i}
            variant='outline'
            size='icon'
            className='size-8'
            disabled
          >
            ...
          </Button>
        ) : (
          <Button
            aria-label={`Page ${pageNumber}`}
            key={i}
            variant={Number(page) === pageNumber ? 'default' : 'outline'}
            size='icon'
            className='size-8'
            onClick={() => {
              startTransition(() => {
                router.push(
                  `${pathName}?${createQueryString({
                    page: pageNumber,
                    per_page: perPage ?? null,
                  })}`
                );
              });
            }}
            disabled={isPending}
          >
            {pageNumber}
          </Button>
        )
      )}
      <Button
        aria-label='Go to next page'
        variant='outline'
        size='icon'
        className='size-8'
        onClick={() => {
          startTransition(() => {
            router.push(
              `${pathName}?${createQueryString({
                page: Number(page) + 1,
                per_page: perPage ?? null,
              })}`
            );
          });
        }}
        disabled={Number(page) === (pageCount ?? 10) || isPending}
      >
        <ChevronRightIcon className='size-4' aria-hidden='true' />
      </Button>
      <Button
        aria-label='Go to last page'
        variant='outline'
        size='icon'
        className='hidden size-8 lg:flex'
        onClick={() => {
          router.push(
            `${pathName}?${createQueryString({
              page: pageCount ?? 10,
              per_page: perPage ?? null,
            })}`
          );
        }}
        disabled={Number(page) === (pageCount ?? 10) || isPending}
      >
        <ChevronsRight className='size-4' aria-hidden='true' />
      </Button>
    </div>
  );
}
