'use client';
import {
  Container,
  ContainerContent,
  ContainerTitle,
} from '@/components/pages-container';
import ProductColorTable from '@/components/products/product-color-table';

import useSingleProduct from '@/services/hooks/product-hooks/useSingleProduct';

const SlugPage = ({ id }: { id: string }) => {
  const { data } = useSingleProduct(id);

  console.log('data:', data);

  return (
    <Container>
      <ContainerTitle>Изменить товар</ContainerTitle>
      <ContainerContent className='w-3/5'>
        <div className='grid grid-cols-3'>
          <div>{}</div>
          <div className='col-span-3'>
            <ContainerTitle className='text-2xl'>Цвета</ContainerTitle>
            {data && <ProductColorTable data={data?.colors} />}
          </div>
        </div>
      </ContainerContent>
    </Container>
  );
};

export default SlugPage;
