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
import Image from 'next/image';
import { Icons } from '../icons';
import useProduct from '@/services/hooks/useProduct';
import DeleteProductAlert from './helpers/delete-product-alert';
import { useSearchParams } from 'next/navigation';
import { filterFormTypes } from '@/lib/validations/product-filters-validation';
import { getProductFilter } from '@/lib/utils';
import Link from 'next/link';

const ProductTable = () => {
  const params = useSearchParams();

  const queries = Object.fromEntries(params.entries());

  const { data } = useProduct(getProductFilter(queries));

  console.log('data:', data);

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
                  src='/card-slider-images/1.png'
                  alt='placeholder'
                  className=''
                  width={300}
                  height={300}
                />
              </TableCell>
              <TableCell className='truncate'>{p.title}</TableCell>
              <TableCell>{p.article}</TableCell>
              <TableCell>{p.brend.title}</TableCell>
              <TableCell>{p.article}</TableCell>
              <TableCell>{p.active ? 'Да' : 'Нет'}</TableCell>
              <TableCell className='text-right'>
                <div className='flex gap-2 items-center justify-end'>
                  <Link href={`/store/products/${p.id}`}>
                    <Icons.edit className='h-5 w-5 cursor-pointer' />
                  </Link>
                  <DeleteProductAlert id={p.id} />
                </div>
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
      <TableFooter className='bg-white'>
        <TableRow>
          <TableCell colSpan={7} className='py-8'>
            Pagination will be here
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
};

export default ProductTable;
