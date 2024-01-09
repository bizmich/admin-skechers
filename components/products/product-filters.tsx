'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '../ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { createUrl } from '@/lib/utils';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const FormSchema = z.object({
  category: z.string().optional(),
  brand: z.string().optional(),
  active: z.string().optional(),
  image: z.string().optional(),
  technology: z.string().optional(),
  name: z.string().optional(),
  article: z.string().optional(),
  id: z.string().optional(),
});

const ProductFilter = () => {
  const params = useSearchParams();
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const form = useForm<z.infer<typeof FormSchema>>({
    defaultValues: {
      active: '',
      article: '',
      brand: '',
      category: '',
      id: '',
      image: '',
      name: '',
      technology: '',
    },
    resolver: zodResolver(FormSchema),
  });

  function onSubmit() {
    const data: Record<string, string> = form.getValues();

    const newParams = new URLSearchParams(searchParams.toString());

    for (const key in data) {
      if (key && data[key]) {
        newParams.set(key, data[key]);
      } else {
        newParams.delete(data[key]);
      }
    }

    router.push(createUrl(pathname, newParams), { scroll: false });
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='grid grid-cols-4 gap-5'
      >
        <FormField
          control={form.control}
          name='category'
          render={({ field }) => (
            <FormItem>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder='Категории' />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value='m@example.com'>m@example.com</SelectItem>
                  <SelectItem value='m@google.com'>m@google.com</SelectItem>
                  <SelectItem value='m@support.com'>m@support.com</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='brand'
          render={({ field }) => (
            <FormItem>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder='Бренды' />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value='m@example.com'>m@example.com</SelectItem>
                  <SelectItem value='m@google.com'>m@google.com</SelectItem>
                  <SelectItem value='m@support.com'>m@support.com</SelectItem>
                </SelectContent>
              </Select>
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
                  <SelectItem value='yes'>Да</SelectItem>
                  <SelectItem value='no'>Нет</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='image'
          render={({ field }) => (
            <FormItem>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder='С картинками' />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value='all'>Все</SelectItem>
                  <SelectItem value='yes'>Да</SelectItem>
                  <SelectItem value='no'>Нет</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='technology'
          render={({ field }) => (
            <FormItem>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder='Технологии' />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value='m@example.com'>m@example.com</SelectItem>
                  <SelectItem value='m@google.com'>m@google.com</SelectItem>
                  <SelectItem value='m@support.com'>m@support.com</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder='Названия' />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value='m@example.com'>m@example.com</SelectItem>
                  <SelectItem value='m@google.com'>m@google.com</SelectItem>
                  <SelectItem value='m@support.com'>m@support.com</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='article'
          render={({ field }) => (
            <Input {...field} type='text' placeholder='Артикул' />
          )}
        />
        <FormField
          control={form.control}
          name='id'
          render={({ field }) => (
            <Input {...field} type='text' placeholder='Внешний код' />
          )}
        />
        <div className='col-span-4 text-right'>
          <Button type='submit' className=' w-auto'>
            Найти
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ProductFilter;
