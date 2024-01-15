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
import { Input } from '@/components/ui/input';
import useUpdateProductColorImage from '@/services/hooks/product-hooks/useUpdateProductColorImage';

export interface ProductColorIDProps {
  id: string | null;
  images?: ProductColorGalleryProps[];
}

const AddProductAlert = (props: ProductColorIDProps) => {
  const deleteImage = useDeleteProductColorImage();
  const updateImage = useUpdateProductColorImage();

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
                <div key={image.id} className='border rounded-md '>
                  <div className='relative group size-32'>
                    <BlurredImage
                      image={getImageUrl.getProductImages(image.imageUrl)}
                      className='object-cover rounded-t-md'
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
                  {/* <div className='flex w-full items-center justify-between p-1'>
                    <div>
                      <select
                      // onChange={(e) =>
                      //   updateImage.mutate(image.id, {
                      //     sortOrder: e.target.value,
                      //   })
                      // }
                      >
                        {props.images?.map((i, idx) => (
                          <option key={i.id + 1} value={idx + 1}>
                            {idx + 1}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <Input type='checkbox' className='size-4 accent-black' />
                    </div>
                  </div> */}
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
