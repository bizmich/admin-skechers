import { getImageUrl } from '@/services/getImagesUrl';
import { CSSProperties, forwardRef, HTMLAttributes } from 'react';
import BlurredImage from '../BlurredImage';
import { TItem } from './dnd-kit';

type Props = {
  onDelete: (id: string) => void;
  item: TItem;
  isOpacityEnabled?: boolean;
  isDragging?: boolean;
} & HTMLAttributes<HTMLDivElement>;

const Item = forwardRef<HTMLDivElement, Props>(
  ({ item, isOpacityEnabled, isDragging, style, onDelete, ...props }, ref) => {
    const styles: CSSProperties = {
      opacity: isOpacityEnabled ? '0.4' : '1',
      cursor: isDragging ? 'grabbing' : 'grab',
      lineHeight: '0.5',
      transform: isDragging ? 'scale(1.05)' : 'scale(1)',
      ...style,
    };

    return (
      <div
        ref={ref}
        style={styles}
        {...props}
        className='relative group size-32'
      >
        <BlurredImage
          image={getImageUrl.getProductImages(item.imageUrl)}
          className='object-cover rounded-t-md'
        />
      </div>
    );
  }
);
Item.displayName = 'Item';
export default Item;
