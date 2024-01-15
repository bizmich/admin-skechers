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

const ProductTable = () => {
  const params = useSearchParams();

  const queries = Object.fromEntries(params.entries());

  const { data } = useProduct(getProductFilter(queries));

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className='w-[100px]'></TableHead>
          <TableHead>Наименование</TableHead>
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
              <TableCell>{p.brendId}</TableCell>
              <TableCell>{p.article}</TableCell>
              <TableCell>{p.active ? 'Да' : 'Нет'}</TableCell>

              <TableCell className='text-right'>
                <div className='flex gap-2 items-center justify-end'>
                  <Link href={`/store/products/${p.id}`}>
                    <Icons.edit className='h-5 w-5 cursor-pointer' />
                  </Link>
                </div>
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
      <TableFooter className='bg-white'>
        <TableRow>
          <TableCell colSpan={7} className='py-8'>
            {data && <Pagination totalPages={data?.total} />}
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
};

export default ProductTable;
