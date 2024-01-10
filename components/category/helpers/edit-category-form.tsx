import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';
import { EditCategoryProps } from './edit-category-alert';

export const categoryEditFormSchema = z.object({
  name: z.string(),
  tag: z.string(),
});

const EditCategoryForm = ({ name, tag }: EditCategoryProps) => {
  const form = useForm<z.infer<typeof categoryEditFormSchema>>({
    defaultValues: {
      name: name ?? '',
      tag: tag ?? '',
    },
    resolver: zodResolver(categoryEditFormSchema),
  });
  const handleSubmit = (data: z.infer<typeof categoryEditFormSchema>) => {
    toast.success('Удачно', {
      description: `${data.name} | ${data.tag}`,
    });
  };

  return (
    <Form {...form}>
      <form
        id='my-form'
        onSubmit={form.handleSubmit(handleSubmit)}
        className=''
      >
        <div className='space-y-3'>
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Название</FormLabel>
                <FormControl>
                  <Input {...field} type='text' placeholder='Название' />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='tag'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Таг категории</FormLabel>
                <FormControl>
                  <Input {...field} type='text' placeholder='Таг категории' />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </form>
    </Form>
  );
};

export default EditCategoryForm;
