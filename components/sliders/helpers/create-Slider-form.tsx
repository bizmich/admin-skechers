import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import useCreateSlider from '@/services/hooks/slider-hooks/useCreateSlider';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

export const createSliderFormSchema = z.object({
  title: z.string(),
  id: z.string(),
});

const CreateSliderForm = () => {
  const form = useForm<z.infer<typeof createSliderFormSchema>>({
    defaultValues: {
      title: '',
      id: '',
    },
    resolver: zodResolver(createSliderFormSchema),
  });

  const handleSubmit = useCreateSlider();

  return (
    <Form {...form}>
      <form
        id='create-slider-form'
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

export default CreateSliderForm;
