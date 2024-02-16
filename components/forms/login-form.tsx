'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import type { z } from 'zod';

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

import { PasswordInput } from '@/components/password-input';

import { authSchema } from '@/lib/validations/auth';
import { signIn } from 'next-auth/react';
import { Icons } from '../icons';

type Inputs = z.infer<typeof authSchema>;

const LoginForm = () => {
  const router = useRouter();
  const [error, setError] = React.useState('');

  const [isPending, startTransition] = React.useTransition();

  // react-hook-form
  const form = useForm<Inputs>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      username: 'root',
      password: 'strongpassword',
    },
  });

  function onSubmit(data: Inputs) {
    startTransition(async () => {
      await signIn('credentials', {
        username: data.username || '',
        password: data.password || '',
        redirect: false,
      }).then((response) => {
        console.log('response:', response);

        if (!response?.error) {
          router.push('/');
        } else {
          setError('Неправильный пароль или логин');
        }
      });
    });
  }

  return (
    <Form {...form}>
      <form
        className='grid gap-4'
        onSubmit={(...args) => form.handleSubmit(onSubmit)(...args)}
      >
        <FormField
          control={form.control}
          name='username'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Логин</FormLabel>
              <FormControl>
                <Input placeholder='Логин' className='w-full' {...field} />
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
                <PasswordInput placeholder='**********' {...field} />
              </FormControl>
              <FormMessage>{error}</FormMessage>
            </FormItem>
          )}
        />
        <Button disabled={isPending}>
          {isPending && (
            <Icons.spinner
              className='mr-2 h-4 w-4 animate-spin'
              aria-hidden='true'
            />
          )}
          Вход
          <span className='sr-only'>Sign in</span>
        </Button>
      </form>
    </Form>
  );
};

export default LoginForm;
