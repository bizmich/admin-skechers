import { Input } from '@/components/ui/input';

import { Icons } from '@/components/icons';
import useProductColorImage from '@/services/hooks/product-hooks/useProductColorImage';
import { ChangeEvent } from 'react';
import { ProductColorIDProps } from './add-color-images-alert';
import { Label } from '@/components/ui/label';
import { buttonVariants } from '@/components/ui/button';

const AddProductColorForm = ({ id }: ProductColorIDProps) => {
  const handleSubmit = useProductColorImage(id || '');

  const uploadImage = async (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;

    const formData = new FormData();
    formData.append('image', event.target.files[0]);

    handleSubmit.mutate(formData);
  };

  return (
    <div>
      <div>
        <div className='space-y-3 relative'>
          <Label
            className={buttonVariants({
              variant: 'secondary',
            })}
          >
            {handleSubmit.isPending && (
              <Icons.spinner className='animate-spin size-5' />
            )}
            Добавить
            <Input
              className='sr-only'
              type='file'
              accept='image/*'
              onChange={(event) => uploadImage(event)}
            />
          </Label>
        </div>
      </div>
    </div>
  );
};

export default AddProductColorForm;
