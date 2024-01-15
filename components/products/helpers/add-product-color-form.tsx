import { Input } from '@/components/ui/input';

import { Icons } from '@/components/icons';
import useProductColorImage from '@/services/hooks/product-hooks/useProductColorImage';
import { ChangeEvent } from 'react';
import { ProductColorIDProps } from './add-color-images-alert';
import { Label } from '@/components/ui/label';
import { buttonVariants } from '@/components/ui/button';

const AddProductColorForm = ({ id }: ProductColorIDProps) => {
  return (
    <div>
      <div>
        <div className='space-y-3 relative'></div>
      </div>
    </div>
  );
};

export default AddProductColorForm;
