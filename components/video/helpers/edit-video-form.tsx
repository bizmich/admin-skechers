'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import Dropzone, { FileWithPreview } from '@/components/drop-zone';
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
import { editVideoFormSchema } from '@/lib/validations/video-form-validation';
import useDeleteVideoLogo from '@/services/hooks/video-hooks/useDeleteVideoLogo';
import useSingleVideo from '@/services/hooks/video-hooks/useSingleVideo';
import useUpdateVideo from '@/services/hooks/video-hooks/useUpdateVideo';
import useUploadVideoLogo from '@/services/hooks/video-hooks/useUploadVideoLogo';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';

const EditVideoForm = ({ id }: { id: string }) => {
  const { data } = useSingleVideo(id ?? '');
  const updateVideo = useUpdateVideo(id ?? '');
  const deleteLogo = useDeleteVideoLogo();

  const [logo, setLogo] = React.useState<FileWithPreview[] | null>(null);
  const uploadVideoLogo = useUploadVideoLogo(id ?? '');

  const form = useForm<z.infer<typeof editVideoFormSchema>>({
    resolver: zodResolver(editVideoFormSchema),
    defaultValues: {
      active: false,
      youtubeUrl: '',
      thumbnailUrl: '',
      id: '',
      sortOrder: 1,
      title: '',
    },
  });

  function onSubmit(data: z.infer<typeof editVideoFormSchema>) {
    updateVideo.mutate(data);
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
          name='youtubeUrl'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Ссылка на видео с YouTube</FormLabel>
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
          <FormLabel>Фото</FormLabel>
          <FormControl>
            {data?.thumbnailUrl ? (
              <div className='relative w-44 h-32'>
                <Image
                  src={`https://365trends.tj/api/static/images/videos/${data?.thumbnailUrl}`}
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
                upload={uploadVideoLogo}
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

        <div className='mt-10 w-full flex justify-end gap-3'>
          <Button type='button' asChild>
            <Link href='/videos'>Назад</Link>
          </Button>
          <Button type='submit'>Сохранить</Button>
        </div>
      </form>
    </Form>
  );
};

export default EditVideoForm;
