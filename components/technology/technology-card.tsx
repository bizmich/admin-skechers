import { Brands, Technologies } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader } from '../ui/card';
import CreateTechAlert from './helpers/create-tech-alert';
import DeleteTechAlert from './helpers/delete-tech-alert';

const TechnologyCard = ({ data }: { data: Technologies[] }) => {
  return (
    <div className='grid grid-cols-3 gap-5'>
      {data?.map((el) => (
        <Card key={el.id} className='flex flex-col justify-between'>
          <CardHeader>
            <Image
              src={
                `https://365trends.tj/api/static/images/technologies/${el.imageUrl}` ??
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
              <Link href={`/technologies/${el.id}`}>Изменить</Link>
            </Button>
            <DeleteTechAlert id={el.id} />
          </CardContent>
        </Card>
      ))}
      <Card>
        <CreateTechAlert />
      </Card>
    </div>
  );
};

export default TechnologyCard;