'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { editShopsFormSchema } from '@/lib/validations/shops-form-validation';
import useSingleShop from '@/services/hooks/shops-hooks/useSingleShop';
import useUpdateShop from '@/services/hooks/shops-hooks/useUpdateShop';
import Link from 'next/link';
import { useEffect } from 'react';

const EditShopForm = ({ id }: { id: string }) => {
  const { data } = useSingleShop(id ?? '');
  const updateShop = useUpdateShop(id ?? '');

  const form = useForm<z.infer<typeof editShopsFormSchema>>({
    resolver: zodResolver(editShopsFormSchema),
    defaultValues: {
      title: '',
      address: '',
      email: '',
      id: '',
      latitude: '',
      longtitude: '',
      main: false,
      phone: '',
    },
  });

  function onSubmit(data: z.infer<typeof editShopsFormSchema>) {
    updateShop.mutate(data);
  }

  useEffect(() => {
    if (data) {
      for (let [key, value] of Object.entries(data)) {
        form.setValue(key as any, value);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((e) => {
          console.log('e:', e);

          onSubmit(e);
        })}
        className='w-2/3 space-y-6'
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
            name='phone'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Телефон</FormLabel>
                <FormControl>
                  <Input {...field} type='text' placeholder='Телефон' />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Адрес email</FormLabel>
                <FormControl>
                  <Input {...field} type='email' placeholder='Адрес email' />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='address'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Адрес</FormLabel>
                <FormControl>
                  <Input {...field} type='text' placeholder='Адрес' />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='longtitude'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Долгота</FormLabel>
                <FormControl>
                  <Input {...field} type='text' placeholder='Долгота' />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='latitude'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Широта</FormLabel>
                <FormControl>
                  <Input {...field} type='text' placeholder='Широта' />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='main'
            render={({ field }) => (
              <FormItem className='flex gap-2 space-y-0 items-center'>
                <FormLabel>Главный:</FormLabel>
                <FormControl>
                  <Input
                    type='checkbox'
                    checked={field.value}
                    onChange={(e) => field.onChange(e.target.checked)}
                    className='size-4'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className='mt-10 w-full flex justify-end gap-3'>
          <Button type='button' asChild>
            <Link href='/shops'>Назад</Link>
          </Button>
          <Button type='submit'>Сохранить</Button>
        </div>
      </form>
    </Form>
  );
};

export default EditShopForm;
