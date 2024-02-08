import { z } from 'zod';

export const editBrandFormSchema = z.object({
  id: z.string().optional(),
  sortOrder: z.number(),
  title: z.string(),
  logoUrl: z.string().optional().nullish(),
  bannerUrl: z.string().optional().nullish(),
  active: z.boolean(),
});

export interface EditBrandItems extends z.infer<typeof editBrandFormSchema> {}
