import BlurredImage from '@/components/BlurredImage';
import { Icons } from '@/components/icons';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button, buttonVariants } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { getImageUrl } from '@/services/getImagesUrl';
import useDeleteProductColorImage from '@/services/hooks/product-hooks/useDeleteProductColorImage';
import useProductColorImage from '@/services/hooks/product-hooks/useProductColorImage';
import useUpdateProductColorImage from '@/services/hooks/product-hooks/useUpdateProductColorImage';
import { IconCirclePlus } from '@tabler/icons-react';
import { ChangeEvent } from 'react';
import { ProductColorGalleryProps } from '../product-color-gallery';
import AddProductColorForm from './add-product-color-form';
import useProductColorGallery from '@/services/hooks/product-hooks/useProductColorGallery';

export interface ProductColorIDProps {
  id: string | null;
  images?: ProductColorGalleryProps[];
}

const AddProductAlert = (props: ProductColorIDProps) => {
  const deleteImage = useDeleteProductColorImage();
  const updateImage = useUpdateProductColorImage();
  const handleSubmit = useProductColorImage(props.id || '');
  const { data } = useProductColorGallery(props.id || '');

  const uploadImage = async (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;

    const formData = new FormData();
    formData.append('image', event.target.files[0]);

    handleSubmit.mutate(formData);
  };

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
            {data &&
              data.map((image) => (
                <div key={image.id} className='border rounded-md'>
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
                  <div className='flex w-full items-center justify-between p-1'>
                    <div>
                      <select
                        onChange={(e) =>
                          updateImage.mutate({
                            id: image.id,
                            mainImage: false,
                            sortOrder: Number(e.target.value),
                          })
                        }
                        defaultValue={image.sortOrder}
                      >
                        {data?.map((i, idx) => (
                          <option key={i.id + 1} value={idx + 1}>
                            {idx + 1}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <Input
                        name='one'
                        defaultChecked={image.mainImage}
                        onChange={(e) =>
                          updateImage.mutate({
                            id: image.id,
                            mainImage: e.target.checked,
                            sortOrder: Number(e.target.value),
                          })
                        }
                        type='radio'
                        className='size-4 accent-black'
                      />
                    </div>
                  </div>
                </div>
              ))}
            <Label
              className={buttonVariants({
                variant: 'secondary',
                className: 'size-32 cursor-pointer',
              })}
            >
              {handleSubmit.isPending ? (
                <Icons.spinner className='animate-spin size-5' />
              ) : (
                <IconCirclePlus size={35} className='fill-black text-white' />
              )}
              <Input
                className='sr-only'
                type='file'
                accept='image/*'
                onChange={(event) => uploadImage(event)}
              />
            </Label>
          </div>
          <AddProductColorForm {...props} />
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction>
            {updateImage.isPending && (
              <Icons.spinner className='animate-spin size-5' />
            )}
            Готово
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AddProductAlert;
