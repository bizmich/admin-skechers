'use client';

import { Button } from '@/components/ui/button';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useMemo } from 'react';

const tags = [
  ['react', 'javascript', 'game', 'back-end'],
  [
    'react',
    'javascript',
    'node',
    'fullstack',
    'front-end',
    'back-end',
    'web',
    'mvc',
  ],
  [
    'react',
    'javascript',
    'react-native',
    'front-end',
    'mobile',
    'android',
    'ios',
  ],
  ['react', 'javascript', 'monaco', 'front-end'],
  [
    'react',
    'javascript',
    'ruby',
    'front-end',
    'back-end',
    'fullstack',
    'ruby-on-rails',
    'mvc',
  ],
];

interface Posts {
  albumId: number;
  id: number;
  thumbnailUrl: string;
  title: string;
  url: string;
  tags: string[];
}

const MainPage = () => {
  const params = useSearchParams();
  const paramTag = params.get('tag') || '';
  const { data } = useQuery<Posts[]>({
    queryKey: ['posts'],
    queryFn: async () =>
      await axios
        .get('https://jsonplaceholder.typicode.com/photos?_limit=10')
        .then((res) => res.data),
    refetchOnWindowFocus: false,
    select: (data) => {
      return data.map((post) => {
        const randomNumber = Math.floor(Math.random() * 5);

        return { ...post, tags: tags[randomNumber] };
      });
    },
  });
  const filteredByTags = useMemo(() => {
    return data ? data.filter((el) => el.tags.includes(paramTag)) : data;
  }, [data, paramTag]);

  return (
    <div>
      <div>
        <div>
          {paramTag
            ? params
                .toString()
                .split(',')
                .map((el) => <span key={el}>{el}</span>)
            : null}
        </div>
        <ul className='grid-cols-4 text-balance grid gap-3'>
          {filteredByTags?.map((post) => (
            <li key={post.id} className='rounded-md border p-2 overflow-hidden'>
              {post.title}

              <div className='flex pt-3 flex-wrap gap-2'>
                {post.tags.map((tag) => (
                  <Button
                    variant='secondary'
                    className='rounded h-5 text-xs'
                    size='sm'
                    key={tag}
                    asChild
                  >
                    <Link href={`/?tag=${tag}`}>{tag}</Link>
                  </Button>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MainPage;
