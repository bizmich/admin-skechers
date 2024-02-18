import { Table, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Color } from '@/types';
import { useEffect, useState } from 'react';
import ColorDndKit from './dnd-kit/color-dnd-kit';

const ProductColorTable = ({
  data,
  productId,
}: {
  data: Color[];
  productId: string;
}) => {
  const [items, setItems] = useState<Color[]>([]);

  useEffect(() => {
    if (data) {
      setItems(data);
    }
  }, [data]);
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead></TableHead>
          <TableHead className='w-28'>Фото</TableHead>
          <TableHead>Цвет</TableHead>
          <TableHead>Фото (шт)</TableHead>
          <TableHead className='w-52'>Размеры</TableHead>
          <TableHead>Цена</TableHead>
          <TableHead>Цена со скидкой</TableHead>
          <TableHead>Активный</TableHead>
          <TableHead className='text-right'>Действия</TableHead>
        </TableRow>
      </TableHeader>
      <ColorDndKit items={items} setItems={setItems} productId={productId} />
    </Table>
  );
};

export default ProductColorTable;
