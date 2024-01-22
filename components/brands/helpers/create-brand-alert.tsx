import { Icons } from '@/components/icons';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import useDeleteBrand from '@/services/hooks/brand-hooks/useDeleteBrand';
import CreateBrandForm from './create-brand-form';

const CreateBrandAlert = ({ id }: { id: string }) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button size='icon' variant='ghost'>
          <Icons.edit className='size-5' />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className='max-w-2xl'>
        <AlertDialogHeader>
          <AlertDialogTitle>Изменить бренд</AlertDialogTitle>
          <CreateBrandForm parentId={id} />
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

export default CreateBrandAlert;
