import { truncate } from '@/lib/utils';
import { Pages } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';

const PagesCard = ({ data }: { data: Pages[] }) => {
  return (
    <div className='grid grid-cols-3 gap-5'>
      {data?.map((el) => (
        <Card key={el.id} className='flex flex-col justify-between'>
          <CardHeader>
            <CardTitle>{el.title}</CardTitle>
          </CardHeader>
          <CardContent className='flex flex-col justify-center  gap-3'>
            <div className='relative h-36 w-full'>
              <Image
                src={
                  `https://365trends.tj/api/static/images/pages/${el.bannerUrl}` ??
                  ''
                }
                alt={`${el.title} logo`}
                fill
              />
            </div>
            <div className='space-y-2'>
              <div className='space-x-2'>
                <span className='font-semibold'>Описание:</span>
                <span>{truncate(el?.description, 20)}</span>
              </div>
              <div className='space-x-2'>
                <span className='font-semibold'>Slug:</span>
                <span>{el.slug}</span>
              </div>
              <div className='space-x-2'>
                <span className='font-semibold'>Показать в футере:</span>
                <span>{el.showInFooter ? 'ДА' : 'НЕТ'}</span>
              </div>
              <div className='space-x-2'>
                <span className='font-semibold'>Активный:</span>
                <span>{el.active ? 'ДА' : 'НЕТ'}</span>
              </div>
              <div className='space-x-2'>
                <span className='font-semibold'>Порядок:</span>
                <span>{el.sortOrder}</span>
              </div>
            </div>
          </CardContent>
          <CardFooter className='space-x-3'>
            <Button variant='secondary' className='w-full' asChild>
              <Link href={`/pages/${el.slug}`}>Изменить</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default PagesCard;
