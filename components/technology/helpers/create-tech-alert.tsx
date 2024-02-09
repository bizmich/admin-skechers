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
import { PlusIcon } from 'lucide-react';
import CreateTechForm from './create-tech-form';

const CreateTechAlert = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <div className='flex justify-center items-center size-full'>
          <PlusIcon className='size-16' />
        </div>
      </AlertDialogTrigger>
      <AlertDialogContent className='max-w-2xl'>
        <AlertDialogHeader>
          <AlertDialogTitle>Добавить технологию</AlertDialogTitle>
        </AlertDialogHeader>
        <CreateTechForm />
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

export default CreateTechAlert;
