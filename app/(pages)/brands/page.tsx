'use client';

import BrandCard from '@/components/brands/brand-card';
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
      <ContainerTitle>Бренды</ContainerTitle>
      <ContainerContent>{data && <BrandCard data={data} />}</ContainerContent>
    </Container>
  );
};

export default BrandPage;
