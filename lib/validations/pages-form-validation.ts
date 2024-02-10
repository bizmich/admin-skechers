import { z } from 'zod';

export const editPagesFormSchema = z.object({
  id: z.string().optional(),
  sortOrder: z.number(),
  title: z.string(),
  slug: z
    .string()
    .trim()
    .refine((val) => !val.includes(' '), {
      message: 'Без пробелов',
    }),
  description: z.string(),
  bannerUrl: z.string().optional().nullish(),
  active: z.boolean().default(false),
  showInFooter: z.boolean().default(false),
});

export interface EditPagesItems extends z.infer<typeof editPagesFormSchema> {}
