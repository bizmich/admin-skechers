'use client';

import {
  Container,
  ContainerContent,
  ContainerTitle,
} from '@/components/pages-container';
import VideoCard from '@/components/video/video-card';
import useVideos from '@/services/hooks/video-hooks/useVideos';

const VideoPage = () => {
  const { data } = useVideos();

  return (
    <Container>
      <ContainerTitle>Видео</ContainerTitle>
      <ContainerContent>{data && <VideoCard data={data} />}</ContainerContent>
    </Container>
  );
};

export default VideoPage;
