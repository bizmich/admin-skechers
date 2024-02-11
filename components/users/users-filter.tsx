'use client';
import { createUrl } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
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

const UsersFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const usersFilterFormSchema = z.object({
    role: z.string().optional(),
    keyword: z.string().optional(),
  });

  const form = useForm<z.infer<typeof usersFilterFormSchema>>({
    defaultValues: {
      role: '',
      keyword: '',
    },
    resolver: zodResolver(usersFilterFormSchema),
  });

  function onSubmit() {
    const data: Record<string, any> = form.getValues();

    const newSearchParams = new URLSearchParams(searchParams.toString());
    for (const [key, value] of Object.entries(data)) {
      if ((Array.isArray(value) && value.length === 0) || !value) {
        newSearchParams.delete(key);
      } else {
        newSearchParams.set(key, String(value));
      }
    }

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
          name='keyword'
          render={({ field }) => (
            <Input {...field} type='text' placeholder='Поиск по имени' />
          )}
        />
        <FormField
          control={form.control}
          name='role'
          render={({ field }) => (
            <FormItem>
              <Select
                onValueChange={field.onChange}
                defaultValue={'all'}
                value={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder='Выбрать роль' />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value='CUSTOMER'>Клиент</SelectItem>
                  <SelectItem value='ADMINISTRATOR'>Администратор</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
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

export default UsersFilter;
