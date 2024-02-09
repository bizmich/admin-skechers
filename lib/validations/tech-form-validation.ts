import { z } from 'zod';

export const editTechFormSchema = z.object({
  id: z.string().optional(),
  sortOrder: z.number(),
  title: z.string(),
  imageUrl: z.string().optional().nullish(),
  active: z.boolean(),
});

export interface EditTechItems extends z.infer<typeof editTechFormSchema> {}
