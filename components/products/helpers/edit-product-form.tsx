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
import { z } from 'zod';

import CategorySelector from '@/components/category-selector';
import useUpdateSingleProduct from '@/services/hooks/product-hooks/useUpdateSingleProduct';
import { Product, SingleProduct } from '@/types';

import { BrandsSelector } from '@/components/brands-selector';
import TechnologiesSelector from '@/components/technologies-selector';
import { Textarea } from '@/components/ui/textarea';
import EditorInput from '@/components/editor-input';

export const singleProductEditFormSchema = z.object({
  title: z.string().optional(),
  description: z.string(),
  brendId: z.string().optional(),
  newProduct: z.boolean().nullish().optional(),
  hit: z.boolean().nullish().optional(),
  active: z.boolean().nullish().optional(),
  archived: z.boolean().nullish().optional(),
  categoryIds: z.array(z.string()).optional(),
  technologyIds: z.array(z.string()).optional(),
});

const EditSingleProductForm = ({ data }: { data: Partial<SingleProduct> }) => {
  const {
    title,
    active,
    brendId,
    description,
    hit,
    newProduct,
    categories,
    technologies,
    archived,
    id,
  } = data;

  const form = useForm<z.infer<typeof singleProductEditFormSchema>>({
    defaultValues: {
      title: title,
      description: description,
      brendId: brendId,
      active: active,
      archived: archived,
      hit: hit,
      newProduct: newProduct,
      technologyIds: technologies?.map((tech) => tech.id),
      categoryIds: categories?.map((cat) => cat.id),
    },
    resolver: zodResolver(singleProductEditFormSchema),
  });

  const handleSubmit = useUpdateSingleProduct(id || '');

  return (
    <Form {...form}>
      <form
        id='update-single-product-form'
        onSubmit={form.handleSubmit((data) => handleSubmit.mutate(data))}
      >
        <div className='flex gap-10'>
          <div className='space-y-3 basis-1/3'>
            <FormField
              control={form.control}
              name='categoryIds'
              render={({ field }) => (
                <FormItem className='grid grid-cols-2 items-center'>
                  <FormLabel>Категории:</FormLabel>
                  <FormControl>
                    <CategorySelector
                      onChange={(e) => field.onChange(e)}
                      value={field.value || []}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='technologyIds'
              render={({ field }) => (
                <FormItem className='grid grid-cols-2 items-center'>
                  <FormLabel>Технологии:</FormLabel>
                  <FormControl>
                    <TechnologiesSelector
                      onChange={(e) => field.onChange(e)}
                      value={field.value || []}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='brendId'
              render={({ field }) => (
                <FormItem className='grid grid-cols-2 items-center'>
                  <FormLabel>Бренд:</FormLabel>
                  <FormControl>
                    <BrandsSelector
                      onChange={field.onChange}
                      value={field.value || ''}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='title'
              render={({ field }) => (
                <FormItem className='grid grid-cols-2 items-center'>
                  <FormLabel>Название:</FormLabel>
                  <FormControl>
                    <Input {...field} type='text' placeholder='Название' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='active'
              render={({ field }) => (
                <FormItem className='grid grid-cols-2 items-center'>
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
            <FormField
              control={form.control}
              name='archived'
              render={({ field }) => (
                <FormItem className='grid grid-cols-2 items-center'>
                  <FormLabel>Заархивировать:</FormLabel>
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
            <FormField
              control={form.control}
              name='hit'
              render={({ field }) => (
                <FormItem className='grid grid-cols-2 items-center'>
                  <FormLabel>Xит:</FormLabel>
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
            <FormField
              control={form.control}
              name='newProduct'
              render={({ field }) => (
                <FormItem className='grid grid-cols-2 items-center'>
                  <FormLabel>Новый продукт:</FormLabel>
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
          <div className='flex-auto'>
            <FormField
              control={form.control}
              name='description'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Описание:</FormLabel>
                  <FormControl className='col-span-2'>
                    <EditorInput {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
      </form>
    </Form>
  );
};

export default EditSingleProductForm;
