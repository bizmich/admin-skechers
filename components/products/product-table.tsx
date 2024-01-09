import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import Image from 'next/image';
import { Icons } from '../icons';

const invoices = [
  {
    invoice: 'INV001',
    paymentStatus: 'Paid',
    totalAmount: '$250.00',
    paymentMethod: 'Credit Card',
  },
  {
    invoice: 'INV002',
    paymentStatus: 'Pending',
    totalAmount: '$150.00',
    paymentMethod: 'PayPal',
  },
  {
    invoice: 'INV003',
    paymentStatus: 'Unpaid',
    totalAmount: '$350.00',
    paymentMethod: 'Bank Transfer',
  },
  {
    invoice: 'INV004',
    paymentStatus: 'Paid',
    totalAmount: '$450.00',
    paymentMethod: 'Credit Card',
  },
  {
    invoice: 'INV005',
    paymentStatus: 'Paid',
    totalAmount: '$550.00',
    paymentMethod: 'PayPal',
  },
  {
    invoice: 'INV006',
    paymentStatus: 'Pending',
    totalAmount: '$200.00',
    paymentMethod: 'Bank Transfer',
  },
  {
    invoice: 'INV007',
    paymentStatus: 'Unpaid',
    totalAmount: '$300.00',
    paymentMethod: 'Credit Card',
  },
];

const ProductTable = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className='w-[100px]'></TableHead>
          <TableHead>Наименование</TableHead>
          <TableHead>Категории</TableHead>
          <TableHead>Бренд</TableHead>
          <TableHead>Артикул</TableHead>
          <TableHead>Активный</TableHead>
          <TableHead className='text-right'>Действия</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className='font-medium'>
              <Image
                src='/card-slider-images/1.png'
                alt='placeholder'
                className=''
                width={300}
                height={300}
              />
            </TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell>{invoice.totalAmount}</TableCell>
            <TableCell>{invoice.totalAmount}</TableCell>
            <TableCell>{invoice.totalAmount}</TableCell>
            <TableCell className='text-right justify-end flex gap-2 items-center'>
              <Icons.edit className='h-5 w-5 cursor-pointer' />
              <Icons.trash className='h-5 w-5 cursor-pointer' />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter className='bg-white'>
        <TableRow>
          <TableCell colSpan={7} className='py-8'>
            Pagination will be here
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
};

export default ProductTable;
