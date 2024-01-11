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
import CreateCategoryForm from './create-category-form';
import { Button } from '@/components/ui/button';

export interface CreateCategoryProps {
  parentId: string | null;
}

const CreateCategoryAlert = (props: CreateCategoryProps) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button size='sm' className='w-full' variant='outline'>
          Добавить
          <Icons.add className='size-5' />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Изменить</AlertDialogTitle>
          <AlertDialogDescription>
            <CreateCategoryForm {...props} />
          </AlertDialogDescription>
        </AlertDialogHeader>
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
