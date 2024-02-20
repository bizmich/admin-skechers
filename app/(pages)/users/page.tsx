'use client';
import {
  Container,
  ContainerContent,
  ContainerFilters,
  ContainerTitle,
} from '@/components/pages-container';
import AddUserAlert from '@/components/users/helpers/create-user/add-user-form-alert';
import UsersFilter from '@/components/users/users-filter';
import UsersTable from '@/components/users/users-table';
import { useSession } from 'next-auth/react';

const UsersPage = () => {
  const { data } = useSession();
  return (
    <Container>
      <ContainerTitle className='flex justify-between items-center'>
        Пользователи
        {data?.user?.user?.role === 'ADMINISTRATOR' && <AddUserAlert />}
      </ContainerTitle>
      <ContainerFilters>
        <UsersFilter />
      </ContainerFilters>
      <ContainerContent>
        <UsersTable />
      </ContainerContent>
    </Container>
  );
};

export default UsersPage;
