'use client';

import BannerCard from '@/components/banners/banner-card';
import {
  Container,
  ContainerContent,
  ContainerTitle,
} from '@/components/pages-container';
import useBanners from '@/services/hooks/banner-hooks/useBanners';

const BannerPage = () => {
  const { data } = useBanners();

  return (
    <Container>
      <ContainerTitle className='flex justify-between items-center'>
        Баннеры
        {/* <CreateBannerAlert /> */}
      </ContainerTitle>
      <ContainerContent>{data && <BannerCard data={data} />}</ContainerContent>
    </Container>
  );
};

export default BannerPage;
