'use client';

import {
  Container,
  ContainerContent,
  ContainerTitle,
} from '@/components/pages-container';
import CreateVideoAlert from '@/components/video/helpers/create-video-alert';
import VideoCard from '@/components/video/video-card';
import useVideos from '@/services/hooks/video-hooks/useVideos';

const VideoPage = () => {
  const { data } = useVideos();

  return (
    <Container>
      <ContainerTitle className='flex justify-between items-center'>
        Видео
        <CreateVideoAlert />
      </ContainerTitle>
      <ContainerContent>{data && <VideoCard data={data} />}</ContainerContent>
    </Container>
  );
};

export default VideoPage;
