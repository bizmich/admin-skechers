import { Color } from '@/types';
import { HTMLAttributes } from 'react';
import ColorItem from './color-items';

type Props = {
  item: Color;
  galleries: any[];
  name: string;
  sizes: any[];
  price: string;
  salePrice: string;
  id: string;
  active: boolean;
} & HTMLAttributes<HTMLDivElement>;

const ColorSortableItem = ({
  item,
  galleries,
  id,
  name,
  price,
  salePrice,
  sizes,
  active,
}: Props) => {
  return (
    <ColorItem
      active={active}
      galleries={galleries}
      name={name}
      price={price}
      salePrice={salePrice}
      sizes={sizes}
      id={id}
      item={item}
    />
  );
};

export default ColorSortableItem;
