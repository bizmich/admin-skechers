import { useUploadCategoryImage } from '@/services/hooks/categories-hooks/useUploadCategoryImage';
import { buttonVariants } from '../ui/button';
import { Label } from '../ui/label';
import { Icons } from '../icons';
import { IconCirclePlus } from '@tabler/icons-react';
import { Input } from '../ui/input';
import { ChangeEvent } from 'react';

const UploadCategoryImage = ({ id }: { id: string }) => {
  const upload = useUploadCategoryImage(id);

  const uploadImage = async (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;

    const formData = new FormData();
    formData.append('image', event.target.files[0]);

    upload.mutate(formData);
  };
  return (
    <Label
      className={buttonVariants({
        variant: 'secondary',
        className: 'size-20 cursor-pointer',
      })}
    >
      {upload.isPending ? (
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
  );
};

export default UploadCategoryImage;
