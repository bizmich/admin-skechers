import {
  Container,
  ContainerTitle,
  ContainerContent,
  ContainerFilters,
} from '@/components/pages-container';
import ProductFilter from '@/components/products/product-filters';
import ProductTable from '@/components/products/product-table';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

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
