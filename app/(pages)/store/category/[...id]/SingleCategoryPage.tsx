'use client';

import CategoryTabs from '@/components/category/category-tabs';
import EditCategoryForm from '@/components/category/helpers/edit-category-form';
import {
  Container,
  ContainerContent,
  ContainerTitle,
} from '@/components/pages-container';
import useSingleCategory from '@/services/hooks/categories-hooks/useSingleCategory';

const SingleCategoryPage = ({ id }: { id: string }) => {
  const { data } = useSingleCategory(id);

  return (
    <Container>
      <ContainerTitle></ContainerTitle>

      <ContainerContent>
        {data && <EditCategoryForm {...data} />}
      </ContainerContent>
    </Container>
  );
};

export default SingleCategoryPage;
