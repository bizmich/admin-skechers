import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader } from '../ui/card';
import { Button } from '../ui/button';
import { Icons } from '../icons';
import { Brands } from '@/types';
import DeleteBrandAlert from './helpers/delete-brand-alert';
import CreateBrandAlert from './helpers/create-brand-alert';

const BrandCard = ({ data }: { data: Brands[] }) => {
  return (
    <div className='grid grid-cols-4 gap-5'>
      {data?.map((el) => (
        <Card key={el.id}>
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
          <CardContent>
            <div className='grid grid-cols-2'>
              <CreateBrandAlert id={el.id} />
              <DeleteBrandAlert id={el.id} />
              <div></div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default BrandCard;
