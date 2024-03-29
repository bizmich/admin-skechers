import { Banner } from '@/types';
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
import DeleteBannerAlert from './helpers/delete-banner-alert';

const BannerCard = ({ data }: { data: Banner[] }) => {
  return (
    <div className='grid grid-cols-3 gap-5'>
      {data?.map((el) => (
        <Card key={el.id} className='flex flex-col justify-between'>
          <CardHeader>
            <CardTitle>{el.title}</CardTitle>
          </CardHeader>
          <CardContent className='flex justify-center'>
            <Image
              src={
                `https://365trends.tj/api/static/images/banners/${el.imageUrl}` ??
                ''
              }
              alt={`${el.title} logo`}
              width={400}
              height={400}
            />
          </CardContent>

          <CardFooter className='space-x-3'>
            <Button variant='secondary' className='w-full'>
              <Link href={`/banners/${el.id}`}>Изменить</Link>
            </Button>
            {/* <DeleteBannerAlert id={el.id ?? ''} /> */}
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default BannerCard;
