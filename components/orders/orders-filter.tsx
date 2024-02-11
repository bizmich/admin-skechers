'use client';
import { cn, createUrl } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { Button } from '../ui/button';
import { Calendar } from '../ui/calendar';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '../ui/form';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { statuses } from './single-order-table';

const OrdersFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const usersFilterFormSchema = z.object({
    createdDateFrom: z.date().optional(),
    createDateTo: z.date().optional(),
    status: z.string().optional(),
  });

  const form = useForm<z.infer<typeof usersFilterFormSchema>>({
    resolver: zodResolver(usersFilterFormSchema),
    defaultValues: {
      status: '',
    },
  });

  function onSubmit() {
    const data: Record<string, any> = form.getValues();

    for (let value in data) {
      if (
        data[value] &&
        (value === 'createdDateFrom' || value === 'createDateTo')
      )
        data[value] = format(data[value], 'yyyy-MM-dd');
    }
    console.log('data:', data);

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
          name='createdDateFrom'
          render={({ field }) => (
            <FormItem className='flex flex-col'>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={'outline'}
                      className={cn(
                        'text-left font-normal',
                        !field.value && 'text-muted-foreground'
                      )}
                    >
                      {field.value ? (
                        format(field.value, 'yyyy-MM-dd')
                      ) : (
                        <span>Дата с</span>
                      )}
                      <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className='w-auto p-0' align='start'>
                  <Calendar
                    mode='single'
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date('1900-01-01')
                    }
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='createDateTo'
          render={({ field }) => (
            <FormItem className='flex flex-col'>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={'outline'}
                      className={cn(
                        'text-left font-normal',
                        !field.value && 'text-muted-foreground'
                      )}
                    >
                      {field.value ? (
                        format(field.value, 'yyyy-MM-dd')
                      ) : (
                        <span>Дата до</span>
                      )}
                      <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className='w-auto p-0' align='start'>
                  <Calendar
                    mode='single'
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date('1900-01-01')
                    }
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='status'
          render={({ field }) => (
            <FormItem>
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger>
                  <SelectValue placeholder='Выбрать статус' />
                </SelectTrigger>

                <SelectContent>
                  {statuses.map((el) => (
                    <SelectItem key={el.value} value={el.value}>
                      {el.title}
                    </SelectItem>
                  ))}
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

export default OrdersFilter;
