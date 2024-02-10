'use client';

import {
  Container,
  ContainerContent,
  ContainerTitle,
} from '@/components/pages-container';
import CreatePageAlert from '@/components/pages/helpers/create-page-alert';
import PagesCard from '@/components/pages/pages-card';
import usePages from '@/services/hooks/pages-hooks/usePages';

const PagesPage = () => {
  const { data } = usePages();

  return (
    <Container>
      <ContainerTitle className='flex justify-between items-center'>
        Страницы
        <CreatePageAlert />
      </ContainerTitle>
      <ContainerContent>{data && <PagesCard data={data} />}</ContainerContent>
    </Container>
  );
};

export default PagesPage;
