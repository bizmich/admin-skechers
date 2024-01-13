import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { getImageUrl } from '@/services/getImagesUrl';

import Image from 'next/image';

export interface ProductColorGalleryProps {
  id: string;
  sortOrder: number;
  imageUrl: string;
}

const ProductColorGallery = ({
  data,
}: {
  data: ProductColorGalleryProps[];
}) => {
  if (data.length === 0)
    return (
      <Image
        src='/no_image_placeholder.png'
        alt='placeholder'
        width={300}
        height={300}
      />
    );
  return (
    <Carousel
      opts={{ loop: true }}
      className='w-[200px] h-[150px] overflow-hidden'
    >
      <CarouselContent>
        {data &&
          data.map((image) => (
            <CarouselItem key={image.id}>
              <Image
                src={getImageUrl.getProductImages(image.imageUrl)}
                alt='IMAGE'
                width={200}
                height={200}
                className='object-cover'
              />
            </CarouselItem>
          ))}
      </CarouselContent>
      <CarouselPrevious className='size-5 left-2' />
      <CarouselNext className='size-5 right-2' />
    </Carousel>
  );
};

export default ProductColorGallery;
