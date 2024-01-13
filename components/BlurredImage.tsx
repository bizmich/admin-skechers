import Image from 'next/image';
import { cn } from '../lib/utils';

import { useState } from 'react';

export const BlurredImage = ({
  image,
  className,
  ...props
}: {
  image: string;
  className: string;
}) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <Image
      unoptimized
      alt='images'
      src={image}
      fill
      sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
      className={cn(
        'object-cover duration-700 ease-in-out group-hover:opacity-75',
        className,
        isLoading
          ? 'scale-110 blur-2xl grayscale'
          : 'scale-100 blur-0 grayscale-0'
      )}
      onLoad={() => setLoading(false)}
      {...props}
    />
  );
};

export default BlurredImage;
