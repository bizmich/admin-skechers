import OrdersTable from '@/components/orders/orders-table';
import {
  Container,
  ContainerContent,
  ContainerTitle,
} from '@/components/pages-container';

const OrdersPage = () => {
  return (
    <Container>
      <ContainerTitle>Заказы</ContainerTitle>
      <ContainerContent>
        <OrdersTable />
      </ContainerContent>
    </Container>
  );
};

export default OrdersPage;
