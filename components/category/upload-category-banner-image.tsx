import { useUploadCategoryBannerImage } from '@/services/hooks/categories-hooks/useUploadCategoryBannerImage';
import { IconCirclePlus } from '@tabler/icons-react';
import { ChangeEvent } from 'react';
import { Icons } from '../icons';
import { buttonVariants } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

const UploadCategoryBannerImage = ({ id }: { id: string }) => {
  const upload = useUploadCategoryBannerImage(id);

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

export default UploadCategoryBannerImage;
