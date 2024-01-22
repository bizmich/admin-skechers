import AddProductAlert from '@/components/products/helpers/add-color-images-alert';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Color } from '@/types';
import ProductColorGallery from './product-color-gallery';
import useToggleColorActive from '@/services/hooks/product-hooks/useToggleColorActive';
import { Switch } from '../ui/switch';

const ProductColorTable = ({ data }: { data: Color[] }) => {
  const toggleActive = useToggleColorActive();
  return (
    <Table>
      <TableHeader>
        <TableRow>
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
      <TableBody>
        {data &&
          data.map((p) => (
            <TableRow key={p.id}>
              <TableCell className='font-medium'>
                <ProductColorGallery data={p.galleries} />
              </TableCell>
              <TableCell className='truncate'>{p.name}</TableCell>
              <TableCell>{p.galleries.length}</TableCell>
              <TableCell className='grid grid-cols-2'>
                {p.sizes.map((el) => (
                  <div key={el.id}>
                    <span>{el.value}: </span>
                    <span>{el.quantity} шт,</span>
                  </div>
                ))}
              </TableCell>
              <TableCell>{p.price}</TableCell>
              <TableCell>{p.salePrice}</TableCell>
              <TableCell>
                <Switch
                  defaultChecked={p.active}
                  disabled={toggleActive.isPending}
                  onCheckedChange={(event: boolean) =>
                    toggleActive.mutate({ id: p.id, active: event })
                  }
                />
              </TableCell>
              <TableCell className='text-right'>
                <AddProductAlert images={p.galleries} id={p.id} />
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
};

export default ProductColorTable;
