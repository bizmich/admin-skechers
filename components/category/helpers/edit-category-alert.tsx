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
import EditCategoryForm from './edit-category-form';

export interface EditCategoryProps {
  name: string;
  tag: string;
  parentId: string | null;
  id: string;
}

const EditCategoryAlert = (props: EditCategoryProps) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Icons.edit className='size-5' />
        <span className='sr-only'>Edit</span>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Изменить</AlertDialogTitle>
          <EditCategoryForm {...props} />
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Отмена</AlertDialogCancel>
          <AlertDialogAction type='submit' form='my-form'>
            Изменить
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default EditCategoryAlert;
