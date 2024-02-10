'use client';

import {
  Container,
  ContainerContent,
  ContainerTitle,
} from '@/components/pages-container';
import CreateSliderAlert from '@/components/sliders/helpers/create-slider-alert';
import SliderCard from '@/components/sliders/slider-card';
import useSliders from '@/services/hooks/slider-hooks/useSliders';

const SliderPage = () => {
  const { data } = useSliders();

  return (
    <Container>
      <ContainerTitle className='flex justify-between items-center'>
        Слайдеры
        <CreateSliderAlert />
      </ContainerTitle>
      <ContainerContent>{data && <SliderCard data={data} />}</ContainerContent>
    </Container>
  );
};

export default SliderPage;
