'use client';

import {
  Container,
  ContainerContent,
  ContainerTitle,
} from '@/components/pages-container';
import SliderCard from '@/components/sliders/slider-card';
import useSliders from '@/services/hooks/slider-hooks/useSliders';

const BrandPage = () => {
  const { data } = useSliders();

  return (
    <Container>
      <ContainerTitle>Слайдеры</ContainerTitle>
      <ContainerContent>{data && <SliderCard data={data} />}</ContainerContent>
    </Container>
  );
};

export default BrandPage;
