'use client';

import {
  Container,
  ContainerContent,
  ContainerTitle,
} from '@/components/pages-container';
import TechnologyCard from '@/components/technology/technology-card';
import useTechnologies from '@/services/hooks/technology-hooks/useTechnologies';

const BrandPage = () => {
  const { data } = useTechnologies();

  return (
    <Container>
      <ContainerTitle>Технологии</ContainerTitle>
      <ContainerContent>
        {data && <TechnologyCard data={data} />}
      </ContainerContent>
    </Container>
  );
};

export default BrandPage;
