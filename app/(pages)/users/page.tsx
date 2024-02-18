import {
  Container,
  ContainerContent,
  ContainerFilters,
  ContainerTitle,
} from '@/components/pages-container';

const UsersPage = () => {
  return (
    <Container>
      <ContainerTitle>Пользователи</ContainerTitle>
      <ContainerFilters>{/* <UsersFilter /> */}</ContainerFilters>
      <ContainerContent>{/* <UsersTable /> */}</ContainerContent>
    </Container>
  );
};

export default UsersPage;
