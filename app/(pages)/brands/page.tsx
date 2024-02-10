'use client';

import BrandCard from '@/components/brands/brand-card';
import CreateBrandAlert from '@/components/brands/helpers/create-brand-alert';
import {
  Container,
  ContainerContent,
  ContainerTitle,
} from '@/components/pages-container';
import useBrands from '@/services/hooks/brand-hooks/useBrands';

const BrandPage = () => {
  const { data } = useBrands();

  return (
    <Container>
      <ContainerTitle className='flex justify-between items-center'>
        Бренды
        <CreateBrandAlert />
      </ContainerTitle>
      <ContainerContent>{data && <BrandCard data={data} />}</ContainerContent>
    </Container>
  );
};

export default BrandPage;
