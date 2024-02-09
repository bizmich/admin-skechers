import { Shops } from '@/types';
import Link from 'next/link';
import { Button } from '../ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';
import CreateShopAlert from './helpers/create-shop-alert';
import DeleteShopAlert from './helpers/delete-shop-alert';

const ShopCard = ({ data }: { data: Shops[] }) => {
  return (
    <div className='grid grid-cols-3 gap-5'>
      {data?.map((el) => (
        <Card key={el.id} className='flex flex-col justify-between'>
          <CardHeader>
            <CardTitle>{el.title}</CardTitle>
          </CardHeader>
          <CardContent className='space-y-3 text-sm'>
            <div className='space-x-2'>
              <span className='font-semibold'>Адрес:</span>
              <span>{el.address}</span>
            </div>
            <div className='space-x-2'>
              <span className='font-semibold'>Email:</span>
              <span>{el.email}</span>
            </div>
            <div className='space-x-2'>
              <span className='font-semibold'>Телефон:</span>
              <span>{el.phone}</span>
            </div>
            <div className='space-x-2'>
              <span className='font-semibold'>Широта:</span>
              <span>{el.latitude}</span>
            </div>
            <div className='space-x-2'>
              <span className='font-semibold'>Долгота:</span>
              <span>{el.longtitude}</span>
            </div>
            <div className='space-x-2'>
              <span className='font-semibold'>Главный магазин:</span>
              <span>{el.main ? 'ДА' : 'НЕТ'}</span>
            </div>
          </CardContent>
          <CardFooter className='flex items-center gap-2'>
            <Button variant='secondary' className='w-full'>
              <Link href={`/shops/${el.id}`}>Изменить</Link>
            </Button>
            <DeleteShopAlert id={el.id ?? ''} />
          </CardFooter>
        </Card>
      ))}
      <Card>
        <CreateShopAlert />
      </Card>
    </div>
  );
};

export default ShopCard;
