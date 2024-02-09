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
import CreateSliderForm from './create-Slider-form';

const CreateSliderAlert = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <div className='flex justify-center items-center size-full'>
          <PlusIcon className='size-16' />
        </div>
      </AlertDialogTrigger>
      <AlertDialogContent className='max-w-2xl'>
        <AlertDialogHeader>
          <AlertDialogTitle>Добавить слайдер</AlertDialogTitle>
        </AlertDialogHeader>
        <CreateSliderForm />
        <AlertDialogFooter>
          <AlertDialogFooter>
            <AlertDialogCancel>Отмена</AlertDialogCancel>
            <AlertDialogAction type='submit' form='create-slider-form'>
              Добавить
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default CreateSliderAlert;
