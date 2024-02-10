'use client';

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
import { editSettingsFormSchema } from '@/lib/validations/settings-form-validation';
import useSettings from '@/services/hooks/settings-hooks/useSettings';
import useUpdateSetting from '@/services/hooks/settings-hooks/useUpdateSetting';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Icons } from '../icons';
import Dropzone, { FileWithPreview } from '../drop-zone';
import useDeleteSettingMainLogo from '@/services/hooks/settings-hooks/useDeleteSettingMainLogo';
import useDeleteSettingMainFooterLogo from '@/services/hooks/settings-hooks/useDeleteSettingMainFooterLogo';
import useUploadMainLogo from '@/services/hooks/settings-hooks/useUploadMainLogo';
import useUploadFooterLogo from '@/services/hooks/settings-hooks/useUploadFooterLogo';

const EditSettingForm = () => {
  const { data } = useSettings();
  const updateSettings = useUpdateSetting();
  const deleteLogo = useDeleteSettingMainLogo();
  const deleteFooterLogo = useDeleteSettingMainFooterLogo();

  const uploadLogo = useUploadMainLogo();
  const uploadFooterLogo = useUploadFooterLogo();

  const [logo, setLogo] = React.useState<FileWithPreview[] | null>(null);
  const [footerLogo, setFooterLogo] = React.useState<FileWithPreview[] | null>(
    null
  );

  const form = useForm<z.infer<typeof editSettingsFormSchema>>({
    resolver: zodResolver(editSettingsFormSchema),
    defaultValues: {
      companyDescription: '',
      companyName: '',
      deliveryPrice: '' || 0,
      freeDeliveryFrom: '' || 0,
      facebookLink: '',
      instagramLink: '',
      logoOriginalUrl: '',
      telegramLink: '',
      whatsappLink: '',
      logoFooterUrl: '',
    },
  });

  function onSubmit(data: z.infer<typeof editSettingsFormSchema>) {
    updateSettings.mutate(data);
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
      <form onSubmit={form.handleSubmit(onSubmit)} className='w-2/3 space-y-6'>
        <div className='space-y-3'>
          <FormField
            control={form.control}
            name='companyName'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Название компании</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type='text'
                    placeholder='Название компании'
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='companyDescription'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Описание компании</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type='text'
                    placeholder='Описание компании'
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='facebookLink'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Facebook (ссылка)</FormLabel>
                <FormControl>
                  <Input {...field} type='text' placeholder='Facebook' />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='instagramLink'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Instagram (ссылка)</FormLabel>
                <FormControl>
                  <Input {...field} type='text' placeholder='Instagram' />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='whatsappLink'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Whatsapp (ссылка)</FormLabel>
                <FormControl>
                  <Input {...field} type='text' placeholder='Whatsapp' />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='telegramLink'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Telegram (ссылка)</FormLabel>
                <FormControl>
                  <Input {...field} type='text' placeholder='Telegram' />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='freeDeliveryFrom'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Цене бесплатной доставки с:</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type='number'
                    inputMode='tel'
                    placeholder='Цена'
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='deliveryPrice'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Цена доставки</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type='number'
                    inputMode='tel'
                    placeholder='Цена'
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          {/* Main Logo */}

          <FormItem>
            <FormLabel>Главный логотип</FormLabel>
            <FormControl>
              <FormControl>
                {data?.logoOriginalUrl ? (
                  <div className='relative w-44 h-32'>
                    <Image
                      src={`https://365trends.tj/api/static/images/settings/${data.logoOriginalUrl}`}
                      alt='image'
                      fill
                    />
                    {!deleteLogo.isPending ? (
                      <Icons.trash
                        onClick={() => deleteLogo.mutate()}
                        className='absolute -top-2 -right-2 drop-shadow-lg size-5 cursor-pointer p-1 bg-white rounded-full box-content'
                      />
                    ) : (
                      <Icons.spinner className='absolute -top-2 -right-2 drop-shadow-lg size-5 cursor-pointer p-1 bg-white rounded-full box-content' />
                    )}
                  </div>
                ) : (
                  <Dropzone
                    upload={uploadLogo}
                    name='image'
                    maxFiles={3}
                    maxSize={1024 * 1024 * 4}
                    files={logo}
                    setFiles={setLogo}
                    className='bg-transparent text-black'
                  />
                )}
              </FormControl>
            </FormControl>

            <FormMessage />
          </FormItem>

          {/* Footer Logo */}

          <FormItem>
            <FormLabel>Лого в футере</FormLabel>
            <FormControl>
              <FormControl>
                {data?.logoFooterUrl ? (
                  <div className='relative w-44 h-32'>
                    <Image
                      src={`https://365trends.tj/api/static/images/settings/${data.logoFooterUrl}`}
                      alt='image'
                      fill
                    />
                    {!deleteFooterLogo.isPending ? (
                      <Icons.trash
                        onClick={() => deleteFooterLogo.mutate()}
                        className='absolute -top-2 -right-2 drop-shadow-lg size-5 cursor-pointer p-1 bg-white rounded-full box-content'
                      />
                    ) : (
                      <Icons.spinner className='absolute -top-2 -right-2 drop-shadow-lg size-5 cursor-pointer p-1 bg-white rounded-full box-content' />
                    )}
                  </div>
                ) : (
                  <Dropzone
                    upload={uploadFooterLogo}
                    name='image'
                    maxFiles={3}
                    maxSize={1024 * 1024 * 4}
                    files={footerLogo}
                    setFiles={setFooterLogo}
                    className='bg-transparent text-black'
                  />
                )}
              </FormControl>
            </FormControl>

            <FormMessage />
          </FormItem>
        </div>
        <div className='mt-10 w-full flex justify-end gap-3'>
          <Button type='button' asChild>
            <Link href='/'>Назад</Link>
          </Button>
          <Button type='submit'>Сохранить</Button>
        </div>
      </form>
    </Form>
  );
};

export default EditSettingForm;
