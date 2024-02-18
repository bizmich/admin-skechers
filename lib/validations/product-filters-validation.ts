import { z } from 'zod';

export const filterFormSchema = z.object({
  categoryIds: z.array(z.string()).optional(),
  brendIds: z.array(z.string()).optional(),
  active: z.string().optional(),
  image: z.string().optional(),
  technologyIds: z.array(z.string()).optional(),
  keyword: z.string().optional(),
  skip: z.string().optional(),
  sizeZero: z.boolean().optional(),
  archived: z.boolean().optional(),
});

export type filterFormTypes = z.infer<typeof filterFormSchema>;

export const filterEditFormSchema = z.object({
  categoriesIds: z.string(),
  brendId: z.string(),
  title: z.string(),
  description: z.string(),
  newProduct: z.boolean(),
  hit: z.boolean(),
  active: z.boolean(),
  image: z.string(),
  technology: z.string(),
  name: z.string(),
  article: z.string(),
  id: z.string(),
});

export type filterEditFormTypes = z.infer<typeof filterEditFormSchema>;
