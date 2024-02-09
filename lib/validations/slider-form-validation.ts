import { z } from 'zod';

export const editSliderFormSchema = z.object({
  id: z.string().optional(),
  sortOrder: z.number(),
  title: z.string(),
  linkTo: z.string(),
  imageUrl: z.string().optional().nullish(),
  active: z.boolean(),
});

export interface EditSliderItems extends z.infer<typeof editSliderFormSchema> {}
