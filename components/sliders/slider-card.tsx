import { Slider } from '@/types';
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
import DeleteSliderAlert from './helpers/delete-slider-alert';

const SliderCard = ({ data }: { data: Slider[] }) => {
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
                `https://365trends.tj/api/static/images/sliders/${el.imageUrl}` ??
                ''
              }
              alt={`${el.title} logo`}
              width={250}
              height={250}
            />
          </CardContent>
          <CardFooter className='space-x-3'>
            <Button variant='secondary' className='w-full'>
              <Link href={`/sliders/${el.id}`}>Изменить</Link>
            </Button>
            <DeleteSliderAlert id={el.id ?? ''} />
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default SliderCard;
