import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import useCreatePage from '@/services/hooks/pages-hooks/useCreatePage';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

export const createPageFormSchema = z.object({
  title: z.string(),
  slug: z
    .string()
    .trim()
    .refine((val) => !val.includes(' '), 'Text cannot contain spaces'),
});

const CreatePageForm = () => {
  const form = useForm<z.infer<typeof createPageFormSchema>>({
    defaultValues: {
      title: '',
      slug: '',
    },
    resolver: zodResolver(createPageFormSchema),
  });

  const handleSubmit = useCreatePage();

  return (
    <Form {...form}>
      <form
        id='create-page-form'
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
            name='slug'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Slug (без пробел)</FormLabel>
                <FormControl>
                  <Input placeholder='Slug' pattern='[^\s]+' {...field} />
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

export default CreatePageForm;
