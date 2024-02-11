import SingleOrderTable from '@/components/orders/single-order-table';
import {
  Container,
  ContainerContent,
  ContainerTitle,
} from '@/components/pages-container';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

const PageSlugPage = ({ params }: { params: { orderId: string } }) => {
  return (
    <Container>
      <ContainerTitle>Заказы пользователя</ContainerTitle>
      <ContainerContent>
        <SingleOrderTable id={params.orderId} />
      </ContainerContent>
    </Container>
  );
};

export default PageSlugPage;
