'use client';
import { createUrl } from '@/lib/utils';
import { filterFormSchema } from '@/lib/validations/product-filters-validation';
import { zodResolver } from '@hookform/resolvers/zod';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import CategorySelector from '../category-selector';
import TechnologiesSelector from '../technologies-selector';
import { Button } from '../ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import { BrandMultiSelect } from '../brands-selector';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

const ProductFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const form = useForm<z.infer<typeof filterFormSchema>>({
    defaultValues: {
      active: '',
      brendIds: [],
      categoryIds: [],
      keyword: '',
      technologyIds: [],
    },
    resolver: zodResolver(filterFormSchema),
  });

  function onSubmit() {
    const data: Record<string, any> = form.getValues();

    console.log('data:', data);

    const newSearchParams = new URLSearchParams(searchParams.toString());
    for (const [key, value] of Object.entries(data)) {
      console.log('value:', value);

      if ((Array.isArray(value) && value.length === 0) || !value) {
        newSearchParams.delete(key);
      } else {
        newSearchParams.set(key, String(value));
      }
    }

    // for (const key in data) {
    //   if (data[key]) {
    //     if (Array.isArray(data[key]) && data[key].length === 0) {
    //       delete data[key];
    //     } else {
    //       newParams.set(key, data[key]);
    //     }
    //   } else {
    //     newParams.delete(data[key]);
    //   }
    // }

    router.push(createUrl(pathname, newSearchParams), { scroll: false });
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='grid grid-cols-4 gap-3'
      >
        <FormField
          control={form.control}
          name='categoryIds'
          render={({ field }) => (
            <FormItem>
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
            <FormItem>
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
          name='brendIds'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <BrandMultiSelect
                  onChange={field.onChange}
                  value={field.value || []}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='active'
          render={({ field }) => (
            <FormItem>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder='Активные' />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value='all'>Все</SelectItem>
                  <SelectItem value='1'>Да</SelectItem>
                  <SelectItem value='0'>Нет</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='keyword'
          render={({ field }) => (
            <Input
              {...field}
              type='text'
              placeholder='Название, артикул, ключевое слово'
            />
          )}
        />

        <div className='col-span-4 text-right space-x-2'>
          <Button
            type='button'
            variant='ghost'
            onClick={() => {
              form.reset();
              router.push(pathname);
            }}
            className=' w-auto'
          >
            Очистить фильтр
          </Button>
          <Button type='submit' className=' w-auto'>
            Найти
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ProductFilter;
