import * as React from 'react';

import { IconCirclePlus } from '@tabler/icons-react';
import { buttonVariants } from './ui/button';
import { Label } from './ui/label';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const FileInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <Label
        className={buttonVariants({
          variant: 'secondary',
          className: 'size-32 cursor-pointer',
        })}
      >
        <IconCirclePlus size={35} className='fill-black text-white' />
        <FileInput
          className='sr-only'
          ref={ref}
          type='file'
          {...props}
          accept='image/*'
        />
      </Label>
    );
  }
);
FileInput.displayName = 'FileInput';

export { FileInput };
