'use client';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { editUsersFormSchema } from '@/lib/validations/users-form-validation';
import useSingleUser from '@/services/hooks/users-hooks/useSingleUser';
import useUpdateUser from '@/services/hooks/users-hooks/useUpdateUser';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

const EditUserForm = ({ id }: { id: string }) => {
  const { data } = useSingleUser(id);
  const updateUser = useUpdateUser(id);

  const form = useForm<z.infer<typeof editUsersFormSchema>>({
    defaultValues: {
      name: '',
      password: '',
      phone: '',
    },
    resolver: zodResolver(editUsersFormSchema),
  });

  function onSubmit(data: z.infer<typeof editUsersFormSchema>) {
    if (data.phone.length !== 9) {
      toast.error('Ошибка', {
        description: 'Номер должен содержать ровно 9 цифр.',
      });
    } else {
      updateUser.mutate(data);
    }
  }

  useEffect(() => {
    if (data) {
      form.setValue('name', data.name);
      form.setValue('phone', data.phone);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <Form {...form}>
      <form id='edit-user-form' onSubmit={form.handleSubmit(onSubmit)}>
        <div className='space-y-3'>
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Имя пользователя</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type='text'
                    placeholder='Имя пользователя'
                  />
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
                  <Input {...field} type='number' placeholder='Телефон' />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Новый пароль</FormLabel>
                <FormControl>
                  <Input {...field} type='text' placeholder='Пароль' />
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

export default EditUserForm;
