'use client';

import {
  Container,
  ContainerContent,
  ContainerTitle,
} from '@/components/pages-container';
import ShopCard from '@/components/shops/shop-card';
import useShops from '@/services/hooks/shops-hooks/useShops';

const VideoPage = () => {
  const { data } = useShops();

  return (
    <Container>
      <ContainerTitle>Магазины</ContainerTitle>
      <ContainerContent>{data && <ShopCard data={data} />}</ContainerContent>
    </Container>
  );
};

export default VideoPage;
