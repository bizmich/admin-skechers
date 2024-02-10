'use client';

import {
  Container,
  ContainerContent,
  ContainerTitle,
} from '@/components/pages-container';
import CreateTechAlert from '@/components/technology/helpers/create-tech-alert';
import TechnologyCard from '@/components/technology/technology-card';
import useTechnologies from '@/services/hooks/technology-hooks/useTechnologies';

const BrandPage = () => {
  const { data } = useTechnologies();

  return (
    <Container>
      <ContainerTitle className='flex justify-between items-center'>
        Технологии
        <CreateTechAlert />
      </ContainerTitle>
      <ContainerContent>
        {data && <TechnologyCard data={data} />}
      </ContainerContent>
    </Container>
  );
};

export default BrandPage;
