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
import useSingleOrder from '@/services/hooks/orders-hooks/useSingleOrder';
import useUpdateOrderStatus from '@/services/hooks/orders-hooks/useUpdateOrderStatus';

import Image from 'next/image';
import Link from 'next/link';
import { Label } from '../ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

const SingleOrderTable = ({ id }: { id: string }) => {
  const { data } = useSingleOrder(id);
  const updateStatus = useUpdateOrderStatus(id);

  return (
    <div>
      <div className='grid grid-cols-[minmax(200px,_300px)_1fr] gap-5'>
        <div className='space-y-5 border p-10'>
          <div>
            <p className='text-sm text-primary'>Пользователь</p>
            <p>{data?.user.name}</p>
          </div>
          <div>
            <p className='text-sm text-primary'>Номер заказа</p>
            <p>№ {data?.orderNo}</p>
          </div>
          <div>
            <p className='text-sm text-primary'>Дата и время заказа</p>
            <p>{formatDate(data?.createdAt ?? '') ?? 'Не указан'}</p>
          </div>
          <div>
            <p className='text-sm text-primary'>Статус заказа</p>
            <p>{getStatus(data?.status ?? 'Не указан')}</p>
          </div>
          <div>
            <p className='text-sm text-primary'>Стоимость заказа</p>
            <p>{data?.orderSum} сомони</p>
          </div>
          <div>
            <p className='text-sm text-primary'>Адрес доставки</p>
            <p>{data?.address ? data?.address : 'Не указан'}</p>
          </div>
          <div>
            <p className='text-sm text-primary'>Способ оплаты</p>
            <p>Наличным</p>
          </div>
          <div className='space-y-3'>
            <Label className='text-sm text-primary'>Изменить статус</Label>
            <Select
              onValueChange={(e) => {
                updateStatus.mutate({
                  status: e,
                });
              }}
              defaultValue={data?.status}
              value={data?.status}
            >
              <SelectTrigger>
                <SelectValue placeholder='Активные' />
              </SelectTrigger>

              <SelectContent>
                {statuses.map((el) => (
                  <SelectItem key={el.value} value={el.value}>
                    {el.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Button asChild>
              <Link href='/orders' className='size-full'>
                Заказы
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
                  Артикул
                </TableHead>
                <TableHead className='font-bold text-primary'>
                  Название
                </TableHead>
                <TableHead className='font-bold text-primary'>
                  Стоимость
                </TableHead>
                <TableHead className='font-bold text-primary'>
                  Количество
                </TableHead>
                <TableHead className='font-bold text-primary'>Всего</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data &&
                data?.orderItems?.map((el) => (
                  <TableRow key={el.id}>
                    <TableCell className='font-medium'>
                      <Image
                        src={`https://365trends.tj/api/static/images/products/${el.imageUrl}`}
                        width={80}
                        height={80}
                        style={{
                          width: 80,
                          height: 80,
                        }}
                        alt='images'
                      />
                    </TableCell>
                    <TableCell>{el.article}</TableCell>
                    <TableCell>
                      {el.productTitle}
                      <div className='flex flex-col gap-1'>
                        <p className='text-xs font-normal'>
                          Цвет:{' '}
                          <span className='text-[#737373]'>
                            {el?.productColorName}
                          </span>
                        </p>
                        <p className='text-xs font-normal'>
                          Размер:{' '}
                          <span className='font-bold text-[#909090]'>
                            {el?.productSize}
                          </span>
                        </p>
                      </div>
                    </TableCell>
                    <TableCell>{el.soldPrice} cомони</TableCell>
                    <TableCell>{el.quantity}</TableCell>
                    <TableCell>{el.amount}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default SingleOrderTable;

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
