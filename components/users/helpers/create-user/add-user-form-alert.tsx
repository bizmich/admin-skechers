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
import { PlusIcon } from 'lucide-react';
import AddUserForm from './add-user-form';

const AddUserAlert = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant='secondary'>
          <PlusIcon className='size-4' />
          Добавить
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className='max-w-2xl'>
        <AlertDialogHeader>
          <AlertDialogTitle>Добавить пользователя</AlertDialogTitle>
        </AlertDialogHeader>
        <AddUserForm />
        <AlertDialogFooter>
          <AlertDialogFooter>
            <AlertDialogCancel>Отмена</AlertDialogCancel>
            <AlertDialogAction type='submit' form='add-user-form'>
              Добавить
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AddUserAlert;
