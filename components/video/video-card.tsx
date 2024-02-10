import { Video } from '@/types';
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
import CreateVideoAlert from './helpers/create-video-alert';
import DeleteVideoAlert from './helpers/delete-video-alert';

const VideoCard = ({ data }: { data: Video[] }) => {
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
                `https://365trends.tj/api/static/images/videos/${el.thumbnailUrl}` ??
                ''
              }
              alt={`${el.title} logo`}
              width={250}
              height={250}
            />
          </CardContent>
          <CardFooter className='space-y-3'>
            <Button variant='secondary' className='w-full'>
              <Link href={`/videos/${el.id}`}>Изменить</Link>
            </Button>
            <DeleteVideoAlert id={el.id ?? ''} />
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default VideoCard;
