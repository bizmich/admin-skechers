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
import useCreateUser from '@/services/hooks/users-hooks/useCreateUser';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

const AddUserForm = () => {
  const form = useForm<z.infer<typeof editUsersFormSchema>>({
    defaultValues: {
      name: '',
      password: '',
      phone: '',
    },
    resolver: zodResolver(editUsersFormSchema),
  });

  const handleSubmit = useCreateUser();

  return (
    <Form {...form}>
      <form
        id='add-user-form'
        onSubmit={form.handleSubmit((data) => {
          if (data.phone.length !== 9) {
            toast.error('Ошибка', {
              description: 'Номер должен содержать ровно 9 цифр.',
            });
          } else {
            handleSubmit.mutate(data);
          }
        })}
      >
        <div className='space-y-3'>
          <FormField
            control={form.control}
            name='name'
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
                <FormLabel>Пароль</FormLabel>
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

export default AddUserForm;
