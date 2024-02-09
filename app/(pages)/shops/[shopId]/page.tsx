import {
  Container,
  ContainerContent,
  ContainerTitle,
} from '@/components/pages-container';
import EditShopForm from '@/components/shops/helpers/edit-shop-form';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

const VideoSlugPage = ({ params }: { params: { shopId: string } }) => {
  return (
    <Container>
      <ContainerTitle>Изменить</ContainerTitle>
      <ContainerContent>
        <EditShopForm id={params.shopId} />
      </ContainerContent>
    </Container>
  );
};

export default VideoSlugPage;
