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
import { PlusIcon } from 'lucide-react';
import CreateBrandForm from './create-brand-form';

const CreateBrandAlert = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <div className='flex justify-center items-center size-full'>
          <PlusIcon className='size-16' />
        </div>
      </AlertDialogTrigger>
      <AlertDialogContent className='max-w-2xl'>
        <AlertDialogHeader>
          <AlertDialogTitle>Добавить бренд</AlertDialogTitle>
        </AlertDialogHeader>
        <CreateBrandForm />
        <AlertDialogFooter>
          <AlertDialogFooter>
            <AlertDialogCancel>Отмена</AlertDialogCancel>
            <AlertDialogAction type='submit' form='create-brand-form'>
              Добавить
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default CreateBrandAlert;
