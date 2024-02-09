import EditBannerForm from '@/components/banners/helpers/edit-banner-form';
import {
  Container,
  ContainerContent,
  ContainerTitle,
} from '@/components/pages-container';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

const BannerSlugPage = ({ params }: { params: { bannerId: string } }) => {
  return (
    <Container>
      <ContainerTitle>Изменить</ContainerTitle>
      <ContainerContent>
        <EditBannerForm id={params.bannerId} />
      </ContainerContent>
    </Container>
  );
};

export default BannerSlugPage;
