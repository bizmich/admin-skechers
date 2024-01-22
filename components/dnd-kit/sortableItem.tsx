import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

import { HTMLAttributes } from 'react';
import Item from './items';
import { TItem } from './dnd-kit';
import { Icons } from '../icons';
import { cn } from '@/lib/utils';

type Props = {
  onDelete: (id: string) => void;
  item: TItem;
} & HTMLAttributes<HTMLDivElement>;

const SortableItem = ({ item, onDelete, ...props }: Props) => {
  console.log('item:=>', item);

  const {
    attributes,
    isDragging,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({
    id: item.id,
  });

  const styles = {
    transform: CSS.Transform.toString(transform),
    transition: transition || undefined,
  };

  return (
    <div className='relative group'>
      <Item
        onDelete={onDelete}
        item={item}
        ref={setNodeRef}
        style={styles}
        isOpacityEnabled={isDragging}
        {...props}
        {...attributes}
        {...listeners}
      />
      <span
        onClick={() => {
          onDelete(item.id);
        }}
        className='group-hover:opacity-100 z-50 transition-all duration-150 opacity-0 absolute -right-2 -top-2'
      >
        <Icons.trash
          className={cn(
            'size-4 rounded-full bg-white border p-1 box-content shadow-xl'
          )}
        />
      </span>
    </div>
  );
};

export default SortableItem;
