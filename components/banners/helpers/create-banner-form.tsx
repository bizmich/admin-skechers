import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import useCreateBanner from '@/services/hooks/banner-hooks/useCreateBanner';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

export const createBannerFormSchema = z.object({
  title: z.string(),
});

const CreateBannerForm = () => {
  const form = useForm<z.infer<typeof createBannerFormSchema>>({
    defaultValues: {
      title: '',
    },
    resolver: zodResolver(createBannerFormSchema),
  });

  const handleSubmit = useCreateBanner();

  return (
    <Form {...form}>
      <form
        id='create-banner-form'
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
        </div>
      </form>
    </Form>
  );
};

export default CreateBannerForm;
