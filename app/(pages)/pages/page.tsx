'use client';

import {
  Container,
  ContainerContent,
  ContainerTitle,
} from '@/components/pages-container';
import PagesCard from '@/components/pages/pages-card';
import usePages from '@/services/hooks/pages-hooks/usePages';

const PagesPage = () => {
  const { data } = usePages();

  return (
    <Container>
      <ContainerTitle className='flex justify-between items-center'>
        Страницы
      </ContainerTitle>
      <ContainerContent>{data && <PagesCard data={data} />}</ContainerContent>
    </Container>
  );
};

export default PagesPage;
