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
import CreateCategoryForm from './create-category-form';

export interface CreateCategoryProps {
  parentId: string | null;
}

const CreateCategoryAlert = (props: CreateCategoryProps) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button size='sm' className='w-full' variant='ghost'>
          Добавить
          <Icons.add className='size-5' />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Добавить</AlertDialogTitle>
        </AlertDialogHeader>
        <CreateCategoryForm {...props} />
        <AlertDialogFooter>
          <AlertDialogCancel>Отмена</AlertDialogCancel>
          <AlertDialogAction type='submit' form='create-category-form'>
            Создать
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default CreateCategoryAlert;
