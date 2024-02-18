import { Icons } from '@/components/icons';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { Product } from '@/types';
import EditSingleProductForm from './edit-product-form';

const EditProductAlert = (props: Partial<Product>) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button size='icon' variant='ghost'>
          <Icons.edit className='size-5' />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className='max-w-7xl'>
        <AlertDialogHeader>
          <AlertDialogTitle>Изменить товар</AlertDialogTitle>
          <EditSingleProductForm data={props} />
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogFooter>
            <AlertDialogCancel>Отмена</AlertDialogCancel>
            <AlertDialogAction type='submit' form='update-single-product-form'>
              Изменить
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default EditProductAlert;
