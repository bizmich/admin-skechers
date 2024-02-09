import { Slider } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader } from '../ui/card';
import CreateSliderAlert from './helpers/create-slider-alert';
import DeleteSliderAlert from './helpers/delete-slider-alert';

const SliderCard = ({ data }: { data: Slider[] }) => {
  return (
    <div className='grid grid-cols-3 gap-5'>
      {data?.map((el) => (
        <Card key={el.id} className='flex flex-col justify-between'>
          <CardHeader>
            <Image
              src={
                `https://365trends.tj/api/static/images/sliders/${el.imageUrl}` ??
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
              <Link href={`/sliders/${el.id}`}>Изменить</Link>
            </Button>
            <DeleteSliderAlert id={el.id ?? ''} />
          </CardContent>
        </Card>
      ))}
      <Card>
        <CreateSliderAlert />
      </Card>
    </div>
  );
};

export default SliderCard;
