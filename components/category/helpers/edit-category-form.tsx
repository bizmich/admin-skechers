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
import { getImageUrl } from '@/services/getImagesUrl';
import { SingleCategory } from '@/services/hooks/categories-hooks/useSingleCategory';
import useUpdateCategory from '@/services/hooks/categories-hooks/useUpdateCategory';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import UploadCategoryBannerImage from '../upload-category-banner-image';
import UploadCategoryImage from '../upload-category-image';
import { useRouter } from 'next/navigation';

export const categoryEditFormSchema = z.object({
  name: z.string(),
  href: z.string(),
  parentId: z.string().nullable(),
  active: z.boolean(),
  showInHome: z.boolean(),
  bannerUrl: z.string().nullish(),
  imageUrlForHome: z.string(),
});

const EditCategoryForm = ({
  name,
  href,
  parentId,
  id,
  bannerUrl,
  imageUrlForHome,
  active,
  showInHome,
  sortOrder,
}: Partial<SingleCategory>) => {
  const router = useRouter();
  const form = useForm<z.infer<typeof categoryEditFormSchema>>({
    defaultValues: {
      name: name ?? '',
      href: href ?? '',
      active: active ?? false,
      parentId: parentId || null,
      showInHome: showInHome ?? true,
      bannerUrl: bannerUrl ?? null,
      imageUrlForHome: imageUrlForHome ?? '',
    },
    resolver: zodResolver(categoryEditFormSchema),
  });

  const handleSubmit = useUpdateCategory(id ?? '');
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
                    defaultChecked={field.value || false}
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
                    defaultChecked={field.value || false}
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
            name='imageUrlForHome'
            render={({ field }) => (
              <FormItem className='grid grid-cols-3 items-center'>
                <FormLabel>Фото категории:</FormLabel>
                <FormControl>
                  {imageUrlForHome ? (
                    <Image
                      src={getImageUrl.getCategoryImages(imageUrlForHome)}
                      alt='image'
                      width={100}
                      height={100}
                    />
                  ) : (
                    <UploadCategoryImage id={id ?? ''} />
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
                  {bannerUrl ? (
                    <Image
                      src={getImageUrl.getCategoryImages(bannerUrl)}
                      alt='image'
                      width={100}
                      height={100}
                    />
                  ) : (
                    <UploadCategoryBannerImage id={id ?? ''} />
                  )}
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className='mt-10 w-full flex justify-end gap-3'>
          <Button type='button'>Назад</Button>
          <Button type='submit'>Сохранить</Button>
        </div>
      </form>
    </Form>
  );
};

export default EditCategoryForm;
