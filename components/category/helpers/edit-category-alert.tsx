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
}

const EditCategoryAlert = (props: EditCategoryProps) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Icons.edit className='size-5' />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Изменить</AlertDialogTitle>
          <AlertDialogDescription>
            <EditCategoryForm {...props} />
          </AlertDialogDescription>
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
