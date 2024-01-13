import { Input } from '@/components/ui/input';

import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { ProductColorIDProps } from './add-color-images-alert';
import useProductColorImage from '@/services/hooks/product-hooks/useProductColorImage';
import { Icons } from '@/components/icons';

const AddColorForm = ({ id }: ProductColorIDProps) => {
  const handleSubmit = useProductColorImage(id || '');

  // toast.success('Удачно', {
  //   description: `${data.name} | ${data.tag}`,
  // });

  const uploadImage = async (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;

    const formData = new FormData();
    formData.append('image', event.target.files[0]);

    handleSubmit.mutate(formData);
  };

  return (
    <div>
      <div className=''>
        <div className='space-y-3 relative'>
          {handleSubmit.isPending ? (
            <Icons.spinner className='animate-spin size-5' />
          ) : (
            <Input
              type='file'
              accept='image/*'
              onChange={(event) => uploadImage(event)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default AddColorForm;
