import {
  Container,
  ContainerContent,
  ContainerTitle,
} from '@/components/pages-container';
import EditSliderForm from '@/components/sliders/helpers/edit-slider-form';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

const SliderSlugPage = ({ params }: { params: { sliderId: string } }) => {
  return (
    <Container>
      <ContainerTitle>Изменить</ContainerTitle>
      <ContainerContent>
        <EditSliderForm id={params.sliderId} />
      </ContainerContent>
    </Container>
  );
};

export default SliderSlugPage;
