'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import Dropzone, { FileWithPreview } from '@/components/drop-zone';
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
import { editBrandFormSchema } from '@/lib/validations/brand-form-validation';
import useSingleBrands from '@/services/hooks/brand-hooks/useSingleBrands';
import useUploadBrandBanner from '@/services/hooks/brand-hooks/useUploadBrandBanner';
import useUploadBrandLogo from '@/services/hooks/brand-hooks/useUploadBrandLogo';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import useUpdateBrand from '@/services/hooks/brand-hooks/useUpdateBrand';
import useDeleteBrandLogo from '@/services/hooks/brand-hooks/useDeleteBrandLogo';
import useDeleteBrandBannerImage from '@/services/hooks/brand-hooks/useDeleteBrandBannerImage';
import { Icons } from '@/components/icons';

const EditBrandForm = ({ id }: { id: string }) => {
  const { data } = useSingleBrands(id ?? '');
  const updateBrand = useUpdateBrand(id ?? '');
  const deleteLogo = useDeleteBrandLogo();
  const deleteBanner = useDeleteBrandBannerImage();

  const [logo, setLogo] = React.useState<FileWithPreview[] | null>(null);
  const [banner, setBanner] = React.useState<FileWithPreview[] | null>(null);
  const uploadBrandLogo = useUploadBrandLogo(id ?? '');
  const uploadBrandBanner = useUploadBrandBanner(id ?? '');

  const form = useForm<z.infer<typeof editBrandFormSchema>>({
    resolver: zodResolver(editBrandFormSchema),
    defaultValues: {
      active: false,
      bannerUrl: null,
      logoUrl: null,
      sortOrder: 1,
      title: '',
    },
  });

  function onSubmit(data: z.infer<typeof editBrandFormSchema>) {
    console.log('update');
    updateBrand.mutate(data);
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
      <form
        onSubmit={form.handleSubmit((e) => {
          console.log('e:', e);

          onSubmit(e);
        })}
        className='w-2/3 space-y-6'
      >
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
          <FormLabel>Логотип</FormLabel>
          <FormControl>
            {data?.logoUrl ? (
              <div className='relative w-44 h-32'>
                <Image
                  src={`https://365trends.tj/api/static/images/brends/${data.logoUrl}`}
                  alt='image'
                  fill
                />
                {!deleteLogo.isPending ? (
                  <Icons.trash
                    onClick={() => deleteLogo.mutate(id)}
                    className='absolute -top-2 -right-2 drop-shadow-lg size-5 cursor-pointer p-1 bg-white rounded-full box-content'
                  />
                ) : (
                  <Icons.spinner className='absolute -top-2 -right-2 drop-shadow-lg size-5 cursor-pointer p-1 bg-white rounded-full box-content' />
                )}
              </div>
            ) : (
              <Dropzone
                upload={uploadBrandLogo}
                name='file'
                maxFiles={3}
                maxSize={1024 * 1024 * 4}
                files={logo}
                setFiles={setLogo}
              />
            )}
          </FormControl>

          <FormMessage />
        </FormItem>
        <FormItem>
          <FormLabel>Баннер</FormLabel>
          <FormControl>
            <FormControl>
              {data?.bannerUrl ? (
                <div className='relative w-full h-32'>
                  <Image
                    src={`https://365trends.tj/api/static/images/brends/${data.bannerUrl}`}
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
                  upload={uploadBrandBanner}
                  name='image'
                  maxFiles={3}
                  maxSize={1024 * 1024 * 4}
                  files={banner}
                  setFiles={setBanner}
                  className='bg-transparent text-black'
                />
              )}
            </FormControl>
          </FormControl>

          <FormMessage />
        </FormItem>
        <div className='mt-10 w-full flex justify-end gap-3'>
          <Button type='button' asChild>
            <Link href='/brands'>Назад</Link>
          </Button>
          <Button type='submit'>Сохранить</Button>
        </div>
      </form>
    </Form>
  );
};

export default EditBrandForm;
