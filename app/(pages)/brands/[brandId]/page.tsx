import EditBrandForm from '@/components/brands/helpers/edit-brand-form';
import {
  Container,
  ContainerContent,
  ContainerTitle,
} from '@/components/pages-container';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

const BrandSlugPage = ({ params }: { params: { brandId: string } }) => {
  return (
    <Container>
      <ContainerTitle>Изменить бренд</ContainerTitle>
      <ContainerContent>
        <EditBrandForm id={params.brandId} />
      </ContainerContent>
    </Container>
  );
};

export default BrandSlugPage;
