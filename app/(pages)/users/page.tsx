import {
  Container,
  ContainerContent,
  ContainerFilters,
  ContainerTitle,
} from '@/components/pages-container';
import UsersFilter from '@/components/users/users-filter';
import UsersTable from '@/components/users/users-table';

const UsersPage = () => {
  return (
    <Container>
      <ContainerTitle>Пользователи</ContainerTitle>
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
