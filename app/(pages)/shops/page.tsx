'use client';

import {
  Container,
  ContainerContent,
  ContainerTitle,
} from '@/components/pages-container';
import CreateShopAlert from '@/components/shops/helpers/create-shop-alert';
import ShopCard from '@/components/shops/shop-card';
import useShops from '@/services/hooks/shops-hooks/useShops';

const VideoPage = () => {
  const { data } = useShops();

  return (
    <Container>
      <ContainerTitle className='flex justify-between items-center'>
        Магазины
        <CreateShopAlert />
      </ContainerTitle>
      <ContainerContent>{data && <ShopCard data={data} />}</ContainerContent>
    </Container>
  );
};

export default VideoPage;
