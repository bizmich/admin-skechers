import {
  Container,
  ContainerContent,
  ContainerFilters,
  ContainerTitle,
} from '@/components/pages-container';
import AddUserAlert from '@/components/users/helpers/create-user/add-user-form-alert';
import UsersFilter from '@/components/users/users-filter';
import UsersTable from '@/components/users/users-table';

const UsersPage = () => {
  return (
    <Container>
      <ContainerTitle className='flex justify-between items-center'>
        Пользователи
        <AddUserAlert />
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
