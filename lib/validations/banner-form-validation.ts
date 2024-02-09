import { z } from 'zod';

export const editBannerFormSchema = z.object({
  id: z.string().optional(),
  sortOrder: z.number(),
  title: z.string(),
  linkTo: z.string(),
  page: z.string(),
  imageUrl: z.string().optional().nullish(),
  active: z.boolean(),
});

export interface EditBannerItems extends z.infer<typeof editBannerFormSchema> {}
