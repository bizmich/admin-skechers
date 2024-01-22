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
import { ChangeEvent, useEffect, useState } from 'react';
import { ProductColorGalleryProps } from '../product-color-gallery';
import AddProductColorForm from './add-product-color-form';
import useProductColorGallery from '@/services/hooks/product-hooks/useProductColorGallery';
import { Gallery } from '@/types';
import DndKit from '@/components/dnd-kit/dnd-kit';

export interface ProductColorIDProps {
  id: string | null;
  images?: ProductColorGalleryProps[];
}

const AddProductAlert = (props: ProductColorIDProps) => {
  const deleteImage = useDeleteProductColorImage();
  const updateImage = useUpdateProductColorImage();
  const handleSubmit = useProductColorImage(props.id || '');
  const { data } = useProductColorGallery(props.id || '');
  const [todos, setTodos] = useState<Gallery[]>([]);

  useEffect(() => {
    if (data) {
      setTodos(data);
    }
  }, [data]);

  const uploadImage = async (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;

    const formData = new FormData();
    formData.append('image', event.target.files[0]);

    handleSubmit.mutate(formData);
  };

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
            {todos && (
              <DndKit
                onDelete={(id) => deleteImage.mutate(id)}
                items={todos ?? []}
                setItems={setTodos}
              />
            )}
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
          <AlertDialogAction
            onClick={() => {
              if (!props.id && !todos) return null;
              updateImage.mutate({
                id: props.id ?? '',
                galleries: todos,
              });
            }}
          >
            {(updateImage.isPending || deleteImage.isPending) && (
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
