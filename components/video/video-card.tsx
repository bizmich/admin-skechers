import { Video } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader } from '../ui/card';
import CreateVideoAlert from './helpers/create-video-alert';
import DeleteVideoAlert from './helpers/delete-video-alert';

const VideoCard = ({ data }: { data: Video[] }) => {
  return (
    <div className='grid grid-cols-3 gap-5'>
      {data?.map((el) => (
        <Card key={el.id} className='flex flex-col justify-between'>
          <CardHeader>
            <Image
              src={
                `https://365trends.tj/api/static/images/videos/${el.thumbnailUrl}` ??
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
              <Link href={`/videos/${el.id}`}>Изменить</Link>
            </Button>
            <DeleteVideoAlert id={el.id ?? ''} />
          </CardContent>
        </Card>
      ))}
      <Card>
        <CreateVideoAlert />
      </Card>
    </div>
  );
};

export default VideoCard;
