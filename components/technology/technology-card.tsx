import { Technologies } from '@/types';
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
import DeleteTechAlert from './helpers/delete-tech-alert';

const TechnologyCard = ({ data }: { data: Technologies[] }) => {
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
                  `https://365trends.tj/api/static/images/technologies/${el.imageUrl}` ??
                  ''
                }
                alt={`${el.title} logo`}
                fill
                className='object-cover'
              />
            </div>
          </CardContent>
          <CardFooter className='space-x-3'>
            <Button variant='secondary' className='w-full'>
              <Link href={`/technologies/${el.id}`}>Изменить</Link>
            </Button>
            <DeleteTechAlert id={el.id} />
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default TechnologyCard;
