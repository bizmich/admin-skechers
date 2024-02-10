import {
  Container,
  ContainerContent,
  ContainerTitle,
} from '@/components/pages-container';
import EditPageForm from '@/components/pages/helpers/edit-page-form';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

const PageSlugPage = ({ params }: { params: { pageId: string } }) => {
  return (
    <Container>
      <ContainerTitle>Изменить страницу</ContainerTitle>
      <ContainerContent>
        <EditPageForm id={params.pageId} />
      </ContainerContent>
    </Container>
  );
};

export default PageSlugPage;
