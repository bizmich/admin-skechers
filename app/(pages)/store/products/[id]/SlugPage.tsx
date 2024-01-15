'use client';
import {
  Container,
  ContainerContent,
  ContainerTitle,
} from '@/components/pages-container';
import ProductColorTable from '@/components/products/product-color-table';
import SingleProductTable from '@/components/products/single-product-table';

import useSingleProduct from '@/services/hooks/product-hooks/useSingleProduct';

const SlugPage = ({ id }: { id: string }) => {
  const { data } = useSingleProduct(id);

  return (
    <Container>
      <ContainerTitle>Изменить товар</ContainerTitle>
      <ContainerContent className='w-full'>
        <div className='space-y-5'>
          <div>{data && <SingleProductTable data={data} />}</div>
          <div>
            <ContainerTitle className='text-xl'>Цвета</ContainerTitle>
            {data && <ProductColorTable data={data?.colors} />}
          </div>
        </div>
      </ContainerContent>
    </Container>
  );
};

export default SlugPage;
