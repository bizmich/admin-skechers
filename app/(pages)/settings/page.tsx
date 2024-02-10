'use client';
import {
  Container,
  ContainerContent,
  ContainerTitle,
} from '@/components/pages-container';
import EditSettingForm from '@/components/settings/edit-setting-form';

const BrandPage = () => {
  return (
    <Container>
      <ContainerTitle className='flex justify-between items-center'>
        Настройки
      </ContainerTitle>
      <ContainerContent>
        <EditSettingForm />
      </ContainerContent>
    </Container>
  );
};

export default BrandPage;
