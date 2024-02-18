import {
  Container,
  ContainerContent,
  ContainerTitle,
} from '@/components/pages-container';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

const PageSlugPage = ({ params }: { params: { userId: string } }) => {
  return (
    <Container>
      <ContainerTitle>Заказы пользователя</ContainerTitle>
      <ContainerContent>
        {/* <SingleUserTable id={params.userId} /> */}
      </ContainerContent>
    </Container>
  );
};

export default PageSlugPage;
