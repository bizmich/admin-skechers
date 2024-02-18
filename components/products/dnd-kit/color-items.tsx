import { Switch } from '@/components/ui/switch';
import { TableBody, TableCell, TableRow } from '@/components/ui/table';
import useToggleColorActive from '@/services/hooks/product-hooks/useToggleColorActive';
import { Color } from '@/types';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { IconGripHorizontal } from '@tabler/icons-react';
import { HTMLAttributes, forwardRef } from 'react';
import AddProductAlert from '../helpers/add-color-images-alert';
import ProductColorGallery from '../product-color-gallery';

type Props = {
  galleries: any[];
  name: string;
  sizes: any[];
  price: string;
  salePrice: string;
  id: string;
  active: boolean;
  item: Color;
  isOpacityEnabled?: boolean;
  isDragging?: boolean;
} & HTMLAttributes<HTMLDivElement>;

const ColorItem = forwardRef<HTMLDivElement, Props>(
  ({
    item,
    galleries,
    id,
    name,
    price,
    salePrice,
    sizes,
    active,

    ...props
  }) => {
    const toggleActive = useToggleColorActive();
    const { attributes, listeners, setNodeRef, transform, transition } =
      useSortable({
        id: item.id,
      });
    const style = {
      transform: CSS.Transform.toString(transform),
      transition,
    };

    return (
      <TableBody ref={setNodeRef} style={style} {...props}>
        <TableRow>
          <TableCell className='truncate cursor-grab'>
            <IconGripHorizontal {...listeners} {...attributes} />
          </TableCell>
          <TableCell className='font-medium'>
            <ProductColorGallery data={galleries} />
          </TableCell>
          <TableCell className='truncate'>{name}</TableCell>
          <TableCell>{galleries.length}</TableCell>
          <TableCell className='grid grid-cols-2'>
            {sizes.map((el) => (
              <div key={el.id}>
                <span>{el.value}: </span>
                <span>{el.quantity} шт,</span>
              </div>
            ))}
          </TableCell>
          <TableCell>{price}</TableCell>
          <TableCell>{salePrice}</TableCell>
          <TableCell>
            <Switch
              defaultChecked={active}
              disabled={toggleActive.isPending}
              onCheckedChange={(event: boolean) =>
                toggleActive.mutate({ id: id, active: event })
              }
            />
          </TableCell>
          <TableCell className='text-right'>
            <AddProductAlert images={galleries} id={id} />
          </TableCell>
        </TableRow>
      </TableBody>
    );
  }
);
ColorItem.displayName = 'ColorItem';
export default ColorItem;
