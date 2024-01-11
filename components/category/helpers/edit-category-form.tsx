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
import useUpdateCategory from '@/services/hooks/categories-hooks/useUpdateCategory';

export const categoryEditFormSchema = z.object({
  name: z.string(),
  href: z.string(),
  parentId: z.string().nullable(),
  active: z.boolean(),
});

const EditCategoryForm = ({ name, tag, parentId, id }: EditCategoryProps) => {
  const form = useForm<z.infer<typeof categoryEditFormSchema>>({
    defaultValues: {
      name: name ?? '',
      href: tag ?? '',
      active: false,
      parentId: parentId || null,
    },
    resolver: zodResolver(categoryEditFormSchema),
  });

  const handleSubmit = useUpdateCategory(id);
  // toast.success('Удачно', {
  //   description: `${data.name} | ${data.tag}`,
  // });

  return (
    <Form {...form}>
      <form
        id='my-form'
        onSubmit={form.handleSubmit((data) => handleSubmit.mutate(data))}
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
            name='href'
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