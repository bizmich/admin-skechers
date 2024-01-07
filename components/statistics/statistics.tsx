'use client';
import { createUrl } from '@/lib/utils';
import axiosInstance from '@/services/axiosInstance';
import { useQuery } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Icons } from '../icons';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import Text from '../ui/text';

export default function Statistics() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const type = searchParams
    ? searchParams.get('type')?.toString()
    : 'groups_for_today';

  // console.log("session:", session);

  const { data: group } = useQuery<Root>({
    queryKey: ['groups/stat'],
    queryFn: () => axiosInstance.get('groups/stat').then((res) => res.data),
  });

  const { data: courses } = useQuery<Root>({
    queryKey: ['config/courses/stat'],
    queryFn: () =>
      axiosInstance.get('config/courses/stat').then((res) => res.data),
  });
  const { data: employees } = useQuery<Root>({
    queryKey: ['users/stat'],
    queryFn: () => axiosInstance.get('users/stat').then((res) => res.data),
  });
  const { data: payments } = useQuery<Root>({
    queryKey: ['payments/stat'],
    queryFn: () => axiosInstance.get('payments/stat').then((res) => res.data),
  });

  function onSubmit(e: string) {
    const val = e;
    const newParams = new URLSearchParams(searchParams.toString());

    if (val) {
      newParams.set('type', val);
    } else {
      newParams.delete('type');
    }

    router.push(createUrl(pathname, newParams), { scroll: false });
  }

  return (
    <div>
      <div className='mb-8 rounded-md bg-gray-50 p-5 '>
        <Select onValueChange={(e) => onSubmit(e)}>
          <SelectTrigger className='w-[180px]'>
            <SelectValue placeholder='Select a fruit' />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value='groups_for_today'>День</SelectItem>
              <SelectItem value='groups_for_week'>Неделя</SelectItem>
              <SelectItem value='groups_for_month'>Месяц</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className='grid grid-cols-3 gap-5'>
        <StatisticsCard data={group} type={type || ''} title='Групп' />
        <StatisticsCard data={courses} type={type || ''} title='Курсы' />
        <StatisticsCard
          data={employees}
          type={type || ''}
          title='Сотрудников'
        />
        <StatisticsCard data={payments} type={type || ''} title='Учеников' />
        <StatisticsCard
          data={payments}
          type={type || ''}
          title='Задолженности'
        />
      </div>
    </div>
  );
}

const StatisticsCard = ({
  data,
  type,
  title,
}: {
  data: any;
  type: string;
  title: string;
}) => {
  return (
    <div className='flex flex-col rounded-md bg-background drop-shadow-md '>
      {type && data && (
        <div className='flex gap-2 px-4 py-3'>
          <div className='flex items-center justify-center rounded-md bg-blue-500 px-4 py-3 text-white'>
            <Icons.group />
          </div>
          <div className='space-y-1'>
            <Text>{title}</Text>
            <div className='flex items-end gap-3'>
              <Text className='text-2xl'>{data[type]?.today}</Text>
              <Text>{data[type]?.diff}</Text>
            </div>
          </div>
        </div>
      )}
      <div className='bg-secondary px-4 py-3'>Все</div>
    </div>
  );
};

export interface Root {
  groups_for_today: GroupsForToday;
  groups_for_week: GroupsForWeek;
  groups_for_month: GroupsForMonth;
}

export interface GroupsForToday {
  today: number;
  diff: number;
}

export interface GroupsForWeek {
  total_groups_for_week: number;
  diff: number;
}

export interface GroupsForMonth {
  total_groups_for_month: number;
  diff: number;
}
