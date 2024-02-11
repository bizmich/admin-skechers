'use client';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { formatDate, getStatus } from '@/lib/utils';

import useSingleUser from '@/services/hooks/users-hooks/useSingleUser';
import Link from 'next/link';

const SingleUserTable = ({ id }: { id: string }) => {
  const { data } = useSingleUser(id);

  return (
    <div>
      <div className='grid grid-cols-[minmax(100px,_300px)_1fr] gap-5'>
        <div className='space-y-5 border p-10'>
          <div>
            <p className='text-sm text-primary font-semibold'>Имя</p>
            <p>{data?.name}</p>
          </div>
          <div>
            <p className='text-sm text-primary font-semibold'>Роль</p>
            <p>{data?.role == 'CUSTOMER' ? 'Клиент' : 'Администратор'}</p>
          </div>
          <div>
            <p className='text-sm text-primary font-semibold'>Номер телефона</p>
            <p>{data?.phone}</p>
          </div>
          <div>
            <p className='text-sm text-primary font-semibold'>Активный</p>
            <p>{data?.active ? 'Да' : 'Нет'}</p>
          </div>

          <div className='space-y-3'>
            <Button asChild>
              <Link href='/users' className='size-full'>
                Пользователи
              </Link>
            </Button>
          </div>
        </div>
        <div className='border p-5'>
          <Table>
            <TableCaption>{!data && 'Список пусть'}</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className='font-bold text-primary'>#</TableHead>
                <TableHead className='font-bold text-primary'>
                  Дата создание
                </TableHead>
                <TableHead className='font-bold text-primary'>
                  Дата обновление
                </TableHead>
                <TableHead className='font-bold text-primary'>Адрес</TableHead>
                <TableHead className='font-bold text-primary'>Статус</TableHead>
                <TableHead className='font-bold text-primary'>
                  Цена доставки
                </TableHead>
                <TableHead className='font-bold text-primary'>Всего</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data &&
                data?.orders?.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell className='font-medium'>
                      {order.orderNo}
                    </TableCell>
                    <TableCell>{formatDate(order.createdAt ?? '')}</TableCell>
                    <TableCell>{formatDate(order.updatedAt ?? '')}</TableCell>
                    <TableCell>{order.address || 'Не указана'}</TableCell>
                    <TableCell>{getStatus(order.status ?? '')}</TableCell>
                    <TableCell>{order.deliveryPrice}</TableCell>
                    <TableCell>{order.orderSum}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default SingleUserTable;

const statuses = [
  {
    title: 'Новый заказ',
    value: 'NEW_ORDER',
  },
  {
    title: 'В процессе',
    value: 'PROCESSING',
  },
  {
    title: 'Доставлен',
    value: 'DELIVERED',
  },
  {
    title: 'Отклонен',
    value: 'REJECTED',
  },
];
