'use client';
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { getProductFilter } from '@/lib/utils';
import useProduct from '@/services/hooks/product-hooks/useProduct';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Icons } from '../icons';
import { getImageUrl } from '@/services/getImagesUrl';
import Pagination from '../Pagination';
import { useCallback } from 'react';
import NoFound from '../no-found';
import LoadingOverlay from '../loading-overlay';

const ProductTable = () => {
  const searchParams = useSearchParams();
  const page = searchParams.get('page') ?? '1';
  const perPage = searchParams?.get('per_page') ?? '50';
  const keyword = searchParams?.get('keyword') ?? '';

  const queries = Object.fromEntries(searchParams.entries());

  const { data, isLoading } = useProduct(getProductFilter(queries), {
    page,
    keyword,
    perPage,
  });

  const createQueryString = useCallback(
    (params: Record<string, string | number | null>) => {
      const newSearchParams = new URLSearchParams();

      for (const [key, value] of Object.entries(params)) {
        if (value === null) {
          newSearchParams.delete(key);
        } else {
          newSearchParams.set(key, String(value));
        }
      }

      return newSearchParams.toString();
    },
    []
  );

  return (
    <div className='relative'>
      {isLoading && <LoadingOverlay visible={isLoading} />}
      <Table className='table-fixed'>
        <TableHeader>
          <TableRow>
            <TableHead className='w-[100px]'></TableHead>
            <TableHead className='truncate'>Наименование</TableHead>
            <TableHead>Категории</TableHead>
            <TableHead>Бренд</TableHead>
            <TableHead>Артикул</TableHead>
            <TableHead>Активный</TableHead>
            <TableHead className='text-right'>Действия</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data &&
            data.items.map((p) => (
              <TableRow key={p.id}>
                <TableCell className='font-medium'>
                  <Image
                    src={
                      p.colors[0].imageUrl
                        ? getImageUrl.getProductImages(p.colors[0].imageUrl)
                        : '/no_image_placeholder.png'
                    }
                    alt='placeholder'
                    className=''
                    width={100}
                    height={100}
                  />
                </TableCell>
                <TableCell className='truncate'>{p.title}</TableCell>
                <TableCell>{p.article}</TableCell>
                <TableCell>{p.brend.title}</TableCell>
                <TableCell>{p.article}</TableCell>
                <TableCell>{p.active ? 'Да' : 'Нет'}</TableCell>
                <TableCell>
                  <div className='flex gap-2 items-center justify-end'>
                    <Link href={`/store/products/${p.id}`}>
                      <Icons.edit className='h-5 w-5 cursor-pointer' />
                    </Link>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          {data?.items.length === 0 && (
            <TableRow>
              <TableCell colSpan={7} className='text-center'>
                По вашему запросу ничего не найдено. Попробуйте найти что то
                другое
              </TableCell>
            </TableRow>
          )}
        </TableBody>
        <TableFooter className='bg-white'>
          <TableRow>
            <TableCell colSpan={7} className='py-8'>
              {data && (
                <Pagination
                  pageCount={data?.total}
                  createQueryString={createQueryString}
                  page={page}
                  perPage={perPage}
                />
              )}
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};

export default ProductTable;
