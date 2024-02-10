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
import useCreateShops from '@/services/hooks/shops-hooks/useCreateShops';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const CreateShopForm = () => {
  const form = useForm<z.infer<typeof editShopsFormSchema>>({
    defaultValues: {
      title: '',
      address: '',
      email: '',
      latitude: '',
      longtitude: '',
      main: false,
      phone: '',
    },
    resolver: zodResolver(editShopsFormSchema),
  });

  const handleSubmit = useCreateShops();

  return (
    <Form {...form}>
      <form
        id='create-shop-form'
        onSubmit={form.handleSubmit((data) => {
          console.log('data:', data);

          handleSubmit.mutate(data);
        })}
      >
        <div className='grid grid-cols-2 gap-5'>
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
      </form>
    </Form>
  );
};

export default CreateShopForm;
