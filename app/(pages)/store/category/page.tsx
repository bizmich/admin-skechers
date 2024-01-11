'use client';

import CategoryTabs from '@/components/category/category-tabs';
import {
  Container,
  ContainerContent,
  ContainerTitle,
} from '@/components/pages-container';
import useCategory from '@/services/hooks/categories-hooks/useCategory';

const CategoryPage = () => {
  const { data } = useCategory();

  return (
    <Container>
      <ContainerTitle>Категории</ContainerTitle>

      <ContainerContent>
        {data && <CategoryTabs data={data} />}
      </ContainerContent>
    </Container>
  );
};

export default CategoryPage;
