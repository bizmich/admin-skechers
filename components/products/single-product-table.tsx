import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Product } from '@/types';
import EditProductAlert from './helpers/edit-product-alert';

const SingleProductTable = ({ data }: { data: Partial<Product> }) => {
  console.log('data:', data);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Название</TableHead>
          <TableHead>Описание</TableHead>
          <TableHead>Бренд</TableHead>
          <TableHead>Новый продукт</TableHead>
          <TableHead>Xит</TableHead>
          <TableHead>Активный</TableHead>
          <TableHead>Категории</TableHead>
          <TableHead>Технологии</TableHead>
          <TableHead>Цвета</TableHead>
          <TableHead className='text-right'>Действия</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data && (
          <TableRow>
            <TableCell className='font-medium truncate'>{data.title}</TableCell>
            <TableCell className='truncate max-w-10'>
              {data.description}
            </TableCell>
            <TableCell className='truncate'>{data.brendId}</TableCell>
            <TableCell className='truncate'>
              {data.newProduct ? 'Да' : 'Нет'}
            </TableCell>
            <TableCell className='truncate'>
              {' '}
              {data.hit ? 'Да' : 'Нет'}
            </TableCell>
            <TableCell className='truncate'>
              {' '}
              {data.active ? 'Да' : 'Нет'}
            </TableCell>
            <TableCell className='truncate flex flex-col'>
              {data.categories?.map((cat) => (
                <span key={cat.id}>{cat.name}</span>
              ))}
            </TableCell>
            <TableCell>
              <div className='flex flex-col'>
                {data.technologies?.map((tech) => (
                  <div key={tech.id}>{tech.title}</div>
                ))}
              </div>
            </TableCell>
            <TableCell className='truncate'>{data.colors?.length}</TableCell>

            <TableCell className='text-right'>
              <EditProductAlert {...data} />
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default SingleProductTable;
