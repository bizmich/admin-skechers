import {
  Container,
  ContainerContent,
  ContainerTitle,
} from '@/components/pages-container';
import EditVideoForm from '@/components/video/helpers/edit-video-form';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

const VideoSlugPage = ({ params }: { params: { videoId: string } }) => {
  return (
    <Container>
      <ContainerTitle>Изменить</ContainerTitle>
      <ContainerContent>
        <EditVideoForm id={params.videoId} />
      </ContainerContent>
    </Container>
  );
};

export default VideoSlugPage;
