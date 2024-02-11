'use client';

import { createUrl } from '@/lib/utils';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { Label } from './ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';

const ItemsPerPage = () => {
  const { push } = useRouter();
  const searchParams = useSearchParams();

  const pathname = usePathname();
  const perPage = searchParams?.get('per_page') ?? '10';

  const handleClick = (selected: string, query: string) => {
    if (selected) {
      const newParams = new URLSearchParams(searchParams.toString());

      if (selected) {
        newParams.set(query, String(selected));
        newParams.delete('page');
      } else {
        newParams.delete(query);
      }

      push(createUrl(pathname, newParams));
    }
  };
  return (
    <div className='flex items-center gap-2'>
      <Label>Количество постов:</Label>
      <Select
        defaultValue={String(perPage)}
        onValueChange={(e) => handleClick(e, 'per_page')}
      >
        <SelectTrigger className='w-auto'>
          <SelectValue placeholder='Количество постов' />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='10'>10</SelectItem>
          <SelectItem value='20'>20</SelectItem>
          <SelectItem value='50'>50</SelectItem>
          <SelectItem value='100'>100</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default ItemsPerPage;
