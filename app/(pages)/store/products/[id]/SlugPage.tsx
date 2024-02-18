'use client';
import {
  Container,
  ContainerContent,
  ContainerTitle,
} from '@/components/pages-container';
import EditProductAlert from '@/components/products/helpers/edit-product-alert';
import ProductColorTable from '@/components/products/product-color-table';
import SingleProductTable from '@/components/products/single-product-table';

import useSingleProduct from '@/services/hooks/product-hooks/useSingleProduct';

const SlugPage = ({ id }: { id: string }) => {
  const { data } = useSingleProduct(id);

  return (
    <Container>
      <ContainerTitle className='flex items-center gap-2'>
        Изменить товар
        <div>
          <EditProductAlert {...data} />
        </div>
      </ContainerTitle>
      <ContainerContent className='w-full'>
        <div className='space-y-5'>
          <div>{data && <SingleProductTable data={data} />}</div>
          <div>
            <ContainerTitle className='text-xl'>Цвета</ContainerTitle>
            {data && <ProductColorTable data={data?.colors} productId={id} />}
          </div>
        </div>
      </ContainerContent>
    </Container>
  );
};

export default SlugPage;
