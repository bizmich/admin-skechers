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
import { getImageUrl } from '@/services/getImagesUrl';
import useDeleteCategoryBannerImage from '@/services/hooks/categories-hooks/useDeleteCategoryBannerImage';
import useDeleteCategoryImage from '@/services/hooks/categories-hooks/useDeleteCategoryImage';
import useUpdateCategory from '@/services/hooks/categories-hooks/useUpdateCategory';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import UploadCategoryBannerImage from '../upload-category-banner-image';
import UploadCategoryImage from '../upload-category-image';

export const categoryEditFormSchema = z.object({
  name: z.string(),
  href: z.string(),
  parentId: z.string().nullable(),
  active: z.boolean(),
  isPopular: z.boolean(),
  sortOrder: z.union([z.string(), z.number()]).transform((value) => +value),
  showInHome: z.boolean(),
  bannerUrl: z.string().nullish(),
  imageUrlForHome: z.string().nullish(),
});

interface EditCategoryFormProps extends z.infer<typeof categoryEditFormSchema> {
  id: string;
}

const EditCategoryForm = ({ data }: { data: EditCategoryFormProps }) => {
  const deleteImage = useDeleteCategoryImage();
  const deleteBannerImage = useDeleteCategoryBannerImage();
  const router = useRouter();
  const form = useForm<z.infer<typeof categoryEditFormSchema>>({
    defaultValues: {
      name: '',
      href: '',
      active: false,
      parentId: null,
      showInHome: true,
      bannerUrl: null,
      imageUrlForHome: data.imageUrlForHome ?? '',
      isPopular: false,
    },
    resolver: zodResolver(categoryEditFormSchema),
  });

  useEffect(() => {
    if (data) {
      for (let [key, values] of Object.entries(data)) {
        form.setValue(key as any, values);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, form.setValue]);
  console.log('form:', form.getValues());

  const handleSubmit = useUpdateCategory(data.id ?? '');
  // toast.success('Удачно', {
  //   description: `${data.name} | ${data.tag}`,
  // });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((data) => {
          handleSubmit.mutate(data);
          router.push('/store/category');
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
            name='href'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Таг категории</FormLabel>
                <FormControl>
                  <Input {...field} type='text' placeholder='Таг категории' />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='active'
            render={({ field }) => (
              <FormItem className='grid grid-cols-3 items-center'>
                <FormLabel>Активный:</FormLabel>
                <FormControl>
                  <Input
                    type='checkbox'
                    checked={field.value}
                    onChange={(event) => field.onChange(event.target.checked)}
                    className='size-4'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='showInHome'
            render={({ field }) => (
              <FormItem className='grid grid-cols-3 items-center'>
                <FormLabel>Показать на глав. страницу:</FormLabel>
                <FormControl>
                  <Input
                    type='checkbox'
                    checked={field.value}
                    onChange={(event) => field.onChange(event.target.checked)}
                    className='size-4'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='isPopular'
            render={({ field }) => (
              <FormItem className='grid grid-cols-3 items-center'>
                <FormLabel>Показать в популярных:</FormLabel>
                <FormControl>
                  <Input
                    type='checkbox'
                    checked={field.value}
                    onChange={(event) => field.onChange(event.target.checked)}
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
              <FormItem className='grid grid-cols-3 items-center'>
                <FormLabel>Сортировка:</FormLabel>
                <FormControl>
                  <Input type='number' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='imageUrlForHome'
            render={({ field }) => (
              <FormItem className='grid grid-cols-3 items-center'>
                <FormLabel>Фото категории:</FormLabel>
                <FormControl>
                  {data.imageUrlForHome ? (
                    <div className='relative w-44 h-32'>
                      <Image
                        src={getImageUrl.getCategoryImages(
                          data.imageUrlForHome
                        )}
                        alt='image'
                        fill
                      />
                      {!deleteImage.isPending ? (
                        <Icons.trash
                          onClick={() => deleteImage.mutate(data.id)}
                          className='absolute -top-2 -right-2 drop-shadow-lg size-5 cursor-pointer p-1 bg-white rounded-full box-content'
                        />
                      ) : (
                        <Icons.spinner className='absolute -top-2 -right-2 drop-shadow-lg size-5 cursor-pointer p-1 bg-white rounded-full box-content' />
                      )}
                    </div>
                  ) : (
                    <UploadCategoryImage id={data.id ?? ''} />
                  )}
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='bannerUrl'
            render={({ field }) => (
              <FormItem className='grid grid-cols-3 items-center'>
                <FormLabel>Фото баннера:</FormLabel>
                <FormControl>
                  {data.bannerUrl ? (
                    <div className='relative col-span-2 w-full h-32'>
                      <Image
                        src={getImageUrl.getCategoryImages(data.bannerUrl)}
                        alt='image'
                        fill
                        className='object-cover'
                      />
                      {!deleteBannerImage.isPending ? (
                        <Icons.trash
                          onClick={() => deleteBannerImage.mutate(data.id)}
                          className='absolute -top-2 -right-2 drop-shadow-lg size-5 cursor-pointer p-1 bg-white rounded-full box-content'
                        />
                      ) : (
                        <Icons.spinner className='absolute -top-2 -right-2 drop-shadow-lg size-5 cursor-pointer p-1 bg-white rounded-full box-content' />
                      )}
                    </div>
                  ) : (
                    <UploadCategoryBannerImage id={data.id ?? ''} />
                  )}
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className='mt-10 w-full flex justify-end gap-3'>
          <Button type='button' asChild>
            <Link href='/store/category'>Назад</Link>
          </Button>
          <Button type='submit'>Сохранить</Button>
        </div>
      </form>
    </Form>
  );
};

export default EditCategoryForm;
