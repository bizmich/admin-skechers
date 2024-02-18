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
import EditUserForm from './edit-user-form';

const EditUserAlert = ({ id }: { id: string }) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant='ghost'>Изменить</Button>
      </AlertDialogTrigger>
      <AlertDialogContent className='max-w-2xl'>
        <AlertDialogHeader>
          <AlertDialogTitle>Изменить пользователя</AlertDialogTitle>
        </AlertDialogHeader>
        <EditUserForm id={id} />
        <AlertDialogFooter>
          <AlertDialogFooter>
            <AlertDialogCancel>Отмена</AlertDialogCancel>
            <AlertDialogAction type='submit' form='edit-user-form'>
              Изменить
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default EditUserAlert;
