import {
  Container,
  ContainerContent,
  ContainerFilters,
  ContainerTitle,
} from '@/components/pages-container';
import ProductFilter from '@/components/products/product-filters';
import ProductTable from '@/components/products/product-table';

const CategoryPage = () => {
  return (
    <Container>
      <ContainerTitle>Продукты</ContainerTitle>
      <ContainerFilters>
        <ProductFilter />
      </ContainerFilters>
      <ContainerContent>
        <ProductTable />
      </ContainerContent>
    </Container>
  );
};

export default CategoryPage;
