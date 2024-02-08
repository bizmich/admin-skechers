'use client';

import EditCategoryForm from '@/components/category/helpers/edit-category-form';
import {
  Container,
  ContainerContent,
  ContainerTitle,
} from '@/components/pages-container';
import useSingleCategory, {
  SingleCategory,
} from '@/services/hooks/categories-hooks/useSingleCategory';

const SingleCategoryPage = ({
  id,
  initialData,
}: {
  id: string;
  initialData: SingleCategory;
}) => {
  const { data } = useSingleCategory(id, initialData);

  return (
    <Container>
      <ContainerTitle>Изменить категорию</ContainerTitle>

      <ContainerContent>
        {data && <EditCategoryForm data={data} />}
      </ContainerContent>
    </Container>
  );
};

export default SingleCategoryPage;
