import { Banner, Slider } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader } from '../ui/card';
import CreateBannerAlert from './helpers/create-banner-alert';
import DeleteBannerAlert from './helpers/delete-banner-alert';

const BannerCard = ({ data }: { data: Banner[] }) => {
  return (
    <div className='grid grid-cols-3 gap-5'>
      {data?.map((el) => (
        <Card key={el.id} className='flex flex-col justify-between'>
          <CardHeader>
            <Image
              src={
                `https://365trends.tj/api/static/images/banners/${el.imageUrl}` ??
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
              <Link href={`/banners/${el.id}`}>Изменить</Link>
            </Button>
            <DeleteBannerAlert id={el.id ?? ''} />
          </CardContent>
        </Card>
      ))}
      <Card>
        <CreateBannerAlert />
      </Card>
    </div>
  );
};

export default BannerCard;
