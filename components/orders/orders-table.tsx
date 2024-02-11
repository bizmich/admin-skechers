'use client';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import useOrders from '@/services/hooks/orders-hooks/useOrders';
import { IconSearch } from '@tabler/icons-react';
import { useSearchParams } from 'next/navigation';
import { useCallback } from 'react';
import Pagination from '../Pagination';
import { formatDate, getStatus } from '@/lib/utils';
import Link from 'next/link';

export default function OrdersTable() {
  const searchParams = useSearchParams();
  const page = searchParams.get('page') ?? '1';
  const perPage = searchParams?.get('per_page') ?? '10';

  const { data, isLoading } = useOrders({ page, perPage: perPage });

  const createQueryString = useCallback(
    (params: Record<string, string | number | null>) => {
      const newSearchParams = new URLSearchParams(searchParams?.toString());

      for (const [key, value] of Object.entries(params)) {
        if (value === null) {
          newSearchParams.delete(key);
        } else {
          newSearchParams.set(key, String(value));
        }
      }

      return newSearchParams.toString();
    },
    [searchParams]
  );

  return (
    <Table>
      <TableCaption>
        {data && data?.total >= Number(perPage) && (
          <Pagination
            createQueryString={createQueryString}
            pageCount={data?.total}
            page={page}
            perPage={perPage}
          />
        )}
        {data?.total === 0 && 'Не найдено'}
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>№</TableHead>
          <TableHead>Дата создание</TableHead>
          <TableHead>Цена</TableHead>
          <TableHead className='text-right'>Статус</TableHead>
          <TableHead className='text-right'>Просмотр</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data &&
          data?.items?.map((order) => (
            <TableRow key={order.id}>
              <TableCell className='font-medium'>{order.orderNo}</TableCell>
              <TableCell>{formatDate(order.createdAt)}</TableCell>
              <TableCell>{order.orderSum}</TableCell>
              <TableCell className='text-right'>
                {getStatus(order.status)}
              </TableCell>
              <TableCell className='text-right'>
                <Link href={`/orders/${order.id}`}>
                  <IconSearch className='mr-0 ml-auto' />
                </Link>
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
}
