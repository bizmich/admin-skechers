import {
  Container,
  ContainerContent,
  ContainerTitle,
} from '@/components/pages-container';
import EditTechForm from '@/components/technology/helpers/edit-tech-form';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

const TechSlugPage = ({ params }: { params: { techId: string } }) => {
  return (
    <Container>
      <ContainerTitle>Изменить</ContainerTitle>
      <ContainerContent>
        <EditTechForm id={params.techId} />
      </ContainerContent>
    </Container>
  );
};

export default TechSlugPage;
