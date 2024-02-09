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
import useDeleteTech from '@/services/hooks/technology-hooks/useDeleteTech';

const DeleteTechAlert = ({ id }: { id: string }) => {
  const deleteTech = useDeleteTech();
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant='destructive' className='w-full'>
          <Icons.trash className='size-5' />
          Удалить
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
              deleteTech.mutate(id);
            }}
          >
            {deleteTech.isPending && <Icons.spinner />}
            Удалить
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteTechAlert;
