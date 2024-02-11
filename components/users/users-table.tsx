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
import useBlockUser from '@/services/hooks/users-hooks/useBlockUser';
import useUnblockUser from '@/services/hooks/users-hooks/useUnblockUser';
import useUsers from '@/services/hooks/users-hooks/useUsers';
import { IconSearch } from '@tabler/icons-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Switch } from '../ui/switch';

export default function UsersTable() {
  const searchParams = useSearchParams();
  const keyword = searchParams.get('keyword') ?? null;
  const role = searchParams?.get('role') ?? null;
  const { data } = useUsers({ keyword, role });
  const blockUser = useBlockUser();
  const unblockUser = useUnblockUser();

  return (
    <Table>
      <TableCaption>{data?.length === 0 && 'Не найдено'}</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Имя</TableHead>
          <TableHead>Телефон</TableHead>
          <TableHead>Роль</TableHead>
          <TableHead>Активный</TableHead>
          <TableHead className='text-center'>Кол. заказов</TableHead>
          <TableHead className='text-right'>Просмотр</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data &&
          data?.map((user) => (
            <TableRow key={user.id}>
              <TableCell className='font-medium'>
                {user.name || 'Не указан'}
              </TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell>
                {user.role == 'CUSTOMER' ? 'Клиент' : 'Администратор'}
              </TableCell>
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
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
}
