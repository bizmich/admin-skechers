import { Brands } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader } from '../ui/card';
import { Icons } from '../icons';
import { PlusIcon } from 'lucide-react';
import CreateBrandAlert from './helpers/create-brand-alert';
import DeleteBrandAlert from './helpers/delete-brand-alert';

const BrandCard = ({ data }: { data: Brands[] }) => {
  return (
    <div className='grid grid-cols-3 gap-5'>
      {data?.map((el) => (
        <Card key={el.id} className='flex flex-col justify-between'>
          <CardHeader>
            <Image
              src={
                `https://365trends.tj/api/static/images/brends/${el.logoUrl}` ??
                ''
              }
              alt={`${el.title} logo`}
              width={200}
              height={120}
            />
            <CardDescription>{el.title}</CardDescription>
          </CardHeader>
          <CardContent className='space-y-3'>
            <Button variant='secondary' className='w-full'>
              <Link href={`/brands/${el.id}`}>Изменить</Link>
            </Button>
            <DeleteBrandAlert id={el.id} />
          </CardContent>
        </Card>
      ))}
      <Card>
        <CreateBrandAlert />
      </Card>
    </div>
  );
};

export default BrandCard;
