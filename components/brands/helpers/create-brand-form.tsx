import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import useCreateBrand from '@/services/hooks/brand-hooks/useCreateBrand';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

export const createCategoryFormSchema = z.object({
  title: z.string(),
  id: z.string(),
});

const CreateBrandForm = () => {
  const form = useForm<z.infer<typeof createCategoryFormSchema>>({
    defaultValues: {
      title: '',
      id: '',
    },
    resolver: zodResolver(createCategoryFormSchema),
  });

  const handleSubmit = useCreateBrand();

  return (
    <Form {...form}>
      <form
        id='create-brand-form'
        onSubmit={form.handleSubmit((data) => {
          handleSubmit.mutate(data);
        })}
      >
        <div className='space-y-3'>
          <FormField
            control={form.control}
            name='title'
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
            name='id'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Slug</FormLabel>
                <FormControl>
                  <Input {...field} type='text' placeholder='Slug' />
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

export default CreateBrandForm;
