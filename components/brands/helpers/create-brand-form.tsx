import { CreateCategoryProps } from '@/components/category/helpers/create-category-alert';
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
import useCreateSingleCategory from '@/services/hooks/categories-hooks/useCreateSingleCategory';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

export const createCategoryFormSchema = z.object({
  sortOrder: z.string(),
  title: z.string(),
  logoUrl: z.string().nullish(),
  bannerUrl: z.string().nullish(),
  active: z.boolean(),
});

const CreateBrandForm = ({ parentId }: CreateCategoryProps) => {
  const form = useForm<z.infer<typeof createCategoryFormSchema>>({
    defaultValues: {
      title: '',
      active: false,
      sortOrder: '',
      bannerUrl: null,
      logoUrl: null,
    },
    resolver: zodResolver(createCategoryFormSchema),
  });

  const handleSubmit = useCreateBrand();

  return (
    <Form {...form}>
      <form
        id='create-category-form'
        // onSubmit={form.handleSubmit((data) => handleSubmit.mutate(data))}
        className=''
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
            name='sortOrder'
            render={({ field }) => (
              <FormItem className='grid grid-cols-3 items-center'>
                <FormLabel>Порядок</FormLabel>
                <FormControl>
                  <select {...field} placeholder='Порядок'>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                  </select>
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='active'
            render={({ field }) => (
              <FormItem className='grid grid-cols-3 items-center'>
                <FormLabel>Активный:</FormLabel>
                <FormControl>
                  <Input
                    type='checkbox'
                    defaultChecked={field.value || false}
                    onChange={(event) => field.onChange(event.target.checked)}
                    className='size-4'
                  />
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
