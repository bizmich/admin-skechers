import BlurredImage from '@/components/BlurredImage';
import { Icons } from '@/components/icons';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { getImageUrl } from '@/services/getImagesUrl';
import useDeleteProductColorImage from '@/services/hooks/product-hooks/useDeleteProductColorImage';
import { ProductColorGalleryProps } from '../product-color-gallery';
import AddProductColorForm from './add-product-color-form';
import { cn } from '@/lib/utils';

export interface ProductColorIDProps {
  id: string | null;
  images?: ProductColorGalleryProps[];
}

const AddProductAlert = (props: ProductColorIDProps) => {
  const deleteImage = useDeleteProductColorImage();

  const Icon = deleteImage.isPending ? Icons['spinner'] : Icons['trash'];
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button size='icon' variant='ghost'>
          <Icons.edit className='size-5' />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className='max-w-2xl'>
        <AlertDialogHeader>
          <AlertDialogTitle>Добавить</AlertDialogTitle>
          <div className='flex  flex-wrap gap-3 relative mb-10'>
            {props.images &&
              props.images.map((image) => (
                <div className='relative group size-32' key={image.id}>
                  <BlurredImage
                    image={getImageUrl.getProductImages(image.imageUrl)}
                    className='object-cover rounded-md border'
                  />
                  <span
                    onClick={() => {
                      deleteImage.mutate(image.id);
                    }}
                    className='group-hover:opacity-100 transition-all duration-150 opacity-0 absolute -right-2 -top-2'
                  >
                    <Icon
                      className={cn(
                        'size-4 rounded-full bg-white border p-1 box-content shadow-xl',
                        deleteImage.isPending && 'animate-spin'
                      )}
                    />
                  </span>
                </div>
              ))}
          </div>
          <AddProductColorForm {...props} />
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction>Готово</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AddProductAlert;
