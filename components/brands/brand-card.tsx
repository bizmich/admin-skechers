import { Brands } from '@/types';
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
import DeleteBrandAlert from './helpers/delete-brand-alert';

const BrandCard = ({ data }: { data: Brands[] }) => {
  return (
    <div className='grid grid-cols-3 gap-5'>
      {data?.map((el) => (
        <Card key={el.id} className='flex flex-col justify-between'>
          <CardHeader>
            <CardTitle>{el.title}</CardTitle>
          </CardHeader>
          <CardContent className='flex justify-center'>
            <div className='h-44 relative w-full'>
              <Image
                src={
                  `https://365trends.tj/api/static/images/brends/${el.logoUrl}` ??
                  ''
                }
                alt={`${el.title} logo`}
                fill
                className='object-cover'
              />
            </div>
          </CardContent>
          <CardFooter className='space-x-3'>
            <Button variant='secondary' className='w-full' asChild>
              <Link href={`/brands/${el.id}`}>Изменить</Link>
            </Button>
            <DeleteBrandAlert id={el.id} />
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default BrandCard;
