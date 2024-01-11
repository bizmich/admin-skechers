import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import useCreateSingleCategory from '@/services/hooks/categories-hooks/useCreateSingleCategory';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { CreateCategoryProps } from './create-category-alert';

export const createCategoryFormSchema = z.object({
  name: z.string(),
  href: z.string(),
  parentId: z.string().nullable(),
});

const CreateCategoryForm = ({ parentId }: CreateCategoryProps) => {
  const form = useForm<z.infer<typeof createCategoryFormSchema>>({
    defaultValues: {
      name: '',
      href: '',
      parentId: parentId || null,
    },
    resolver: zodResolver(createCategoryFormSchema),
  });

  const handleSubmit = useCreateSingleCategory();
  // toast.success('Удачно', {
  //   description: `${data.name} | ${data.tag}`,
  // });

  return (
    <Form {...form}>
      <form
        id='create-category-form'
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

export default CreateCategoryForm;
