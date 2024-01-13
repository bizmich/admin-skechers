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

const ProductColorTable = ({ data }: { data: Color[] }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className='w-28'>Фото</TableHead>
          <TableHead>Цвет</TableHead>
          <TableHead>Фото (шт)</TableHead>

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
              <TableCell className='truncate'>Черный</TableCell>
              <TableCell>{p.galleries.length}</TableCell>
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
