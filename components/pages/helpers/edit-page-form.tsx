'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import Dropzone, { FileWithPreview } from '@/components/drop-zone';
import EditorInput from '@/components/editor-input';
import { Icons } from '@/components/icons';
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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { editPagesFormSchema } from '@/lib/validations/pages-form-validation';
import useDeletePageBannerImage from '@/services/hooks/pages-hooks/useDeletePageBannerImage';
import useSinglePage from '@/services/hooks/pages-hooks/useSinglePage';
import useUpdatePage from '@/services/hooks/pages-hooks/useUpdatePage';
import useUploadPageBanner from '@/services/hooks/pages-hooks/useUploadPageBanner';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';

const EditPageForm = ({ id }: { id: string }) => {
  const { data } = useSinglePage(id ?? '');
  const updatePage = useUpdatePage(id ?? '');
  const deleteBanner = useDeletePageBannerImage();
  const uploadPageBanner = useUploadPageBanner(id ?? '');
  const [banner, setBanner] = React.useState<FileWithPreview[] | null>(null);

  const form = useForm<z.infer<typeof editPagesFormSchema>>({
    resolver: zodResolver(editPagesFormSchema),
    defaultValues: {
      active: false,
      description: '',
      bannerUrl: '',
      showInFooter: false,
      slug: '',
      sortOrder: 1,
      title: '',
    },
  });

  function onSubmit(data: z.infer<typeof editPagesFormSchema>) {
    console.log('update');
    updatePage.mutate(data);
  }

  console.log('form:', form.getValues());
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
      <form onSubmit={form.handleSubmit(onSubmit)} className=' space-y-6'>
        <FormField
          control={form.control}
          name='title'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Название</FormLabel>
              <FormControl>
                <Input placeholder='Название' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='active'
          render={({ field }) => (
            <FormItem className='flex gap-2 space-y-0 items-center'>
              <FormLabel>Активный:</FormLabel>
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
        <FormField
          control={form.control}
          name='showInFooter'
          render={({ field }) => (
            <FormItem className='flex gap-2 space-y-0 items-center'>
              <FormLabel>Показать в футере:</FormLabel>
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

        <FormField
          control={form.control}
          name='sortOrder'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Порядок</FormLabel>
              <FormControl>
                <Select
                  onValueChange={(e) => field.onChange(+e)}
                  defaultValue={String(field.value)}
                  value={String(field.value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder='Выберите порядок' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value='1'>1</SelectItem>
                      <SelectItem value='2'>2</SelectItem>
                      <SelectItem value='3'>3</SelectItem>
                      <SelectItem value='4'>4</SelectItem>
                      <SelectItem value='5'>5</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormItem>
          <FormLabel>Баннер</FormLabel>
          <FormControl>
            <FormControl>
              {data?.bannerUrl ? (
                <div className='relative w-full h-32'>
                  <Image
                    src={`https://365trends.tj/api/static/images/pages/${data.bannerUrl}`}
                    alt='image'
                    fill
                    className='object-cover'
                  />
                  {!deleteBanner.isPending ? (
                    <Icons.trash
                      onClick={() => deleteBanner.mutate(id)}
                      className='absolute -top-2 -right-2 drop-shadow-lg size-5 cursor-pointer p-1 bg-white rounded-full box-content'
                    />
                  ) : (
                    <Icons.spinner className='absolute -top-2 -right-2 drop-shadow-lg size-5 cursor-pointer p-1 bg-white rounded-full box-content' />
                  )}
                </div>
              ) : (
                <Dropzone
                  upload={uploadPageBanner}
                  name='image'
                  maxFiles={3}
                  maxSize={1024 * 1024 * 4}
                  files={banner}
                  setFiles={setBanner}
                />
              )}
            </FormControl>
          </FormControl>

          <FormMessage />
        </FormItem>
        <FormField
          control={form.control}
          name='description'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Описание</FormLabel>
              <FormControl>
                <EditorInput {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className='mt-10 w-full flex justify-end gap-3'>
          <Button type='button' asChild>
            <Link href='/pages'>Назад</Link>
          </Button>
          <Button type='submit'>Сохранить</Button>
        </div>
      </form>
    </Form>
  );
};

export default EditPageForm;
