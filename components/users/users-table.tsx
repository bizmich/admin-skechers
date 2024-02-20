'use client';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { getRole } from '@/lib/utils';
import useBlockUser from '@/services/hooks/users-hooks/useBlockUser';
import useUnblockUser from '@/services/hooks/users-hooks/useUnblockUser';
import useUsers from '@/services/hooks/users-hooks/useUsers';
import { IconDots, IconSearch } from '@tabler/icons-react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Button } from '../ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Switch } from '../ui/switch';
import DeleteUserAlert from './helpers/delete-user-alert';
import EditUserAlert from './helpers/edit-user/edit-user-form-alert';

export default function UsersTable() {
  const { data: session } = useSession();
  const searchParams = useSearchParams();
  const keyword = searchParams.get('keyword') ?? null;
  const role = searchParams?.get('role') ?? null;
  const { data } = useUsers({ keyword, role });
  const blockUser = useBlockUser();
  const unblockUser = useUnblockUser();

  return (
    <Table>
      <TableCaption>{data?.items.length === 0 && 'Не найдено'}</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Имя</TableHead>
          <TableHead>Телефон</TableHead>
          <TableHead>Роль</TableHead>
          <TableHead>Активный</TableHead>
          <TableHead className='text-center'>Кол. заказов</TableHead>
          <TableHead className='text-right'>Просмотр</TableHead>
          <TableHead className='text-right'>Действия</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data &&
          data.items?.map((user) => (
            <TableRow key={user.id}>
              <TableCell className='font-medium'>
                {user.name || 'Не указан'}
              </TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell>{getRole(user.role)}</TableCell>
              <TableCell title={user.active ? 'Активный' : ' Не активный'}>
                <Switch
                  defaultChecked={user.active}
                  disabled={blockUser.isPending || unblockUser.isPending}
                  onCheckedChange={(event: boolean) => {
                    if (event === false) {
                      blockUser.mutate(user.id);
                    } else {
                      unblockUser.mutate(user.id);
                    }
                  }}
                />
                <span className='sr-only'>active</span>
              </TableCell>
              <TableCell className='text-center'>
                {user.ordersQuantity}
              </TableCell>
              <TableCell className='text-right'>
                <Link href={`/users/${user.id}`}>
                  <IconSearch className='mr-0 ml-auto' />
                </Link>
              </TableCell>
              <TableCell className='text-right'>
                <Popover>
                  <PopoverTrigger
                    disabled={session?.user?.user?.role !== 'ADMINISTRATOR'}
                    asChild
                  >
                    <Button
                      variant='ghost'
                      size='icon'
                      className='rounded-full'
                    >
                      <IconDots className='cursor-pointer' />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent
                    align='end'
                    className='w-auto flex flex-col p-2'
                  >
                    <EditUserAlert id={user.id} />
                    <DeleteUserAlert id={user.id} />
                  </PopoverContent>
                </Popover>
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
}
