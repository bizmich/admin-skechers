import OrdersFilter from '@/components/orders/orders-filter';
import OrdersTable from '@/components/orders/orders-table';
import {
  Container,
  ContainerContent,
  ContainerFilters,
  ContainerTitle,
} from '@/components/pages-container';

const OrdersPage = () => {
  return (
    <Container>
      <ContainerTitle>Заказы</ContainerTitle>
      <ContainerFilters>
        <OrdersFilter />
      </ContainerFilters>
      <ContainerContent>
        <OrdersTable />
      </ContainerContent>
    </Container>
  );
};

export default OrdersPage;
