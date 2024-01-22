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

const DeleteBrandAlert = ({ id }: { id: string }) => {
  const deleteBrand = useDeleteBrand();
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant='ghost'>
          <Icons.trash className='size-5' />
          <span className='sr-only'>Delete</span>
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Удалить</AlertDialogTitle>
          <AlertDialogDescription>Вы уверенны?</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Отмена</AlertDialogCancel>
          <AlertDialogAction
            onClick={() => {
              deleteBrand.mutate(id);
            }}
          >
            Удалить
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteBrandAlert;
