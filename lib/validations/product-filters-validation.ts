import { z } from 'zod';

export const filterFormSchema = z.object({
  category: z.string().optional(),
  brand: z.string().optional(),
  active: z.string().optional(),
  image: z.string().optional(),
  technology: z.string().optional(),
  name: z.string().optional(),
  article: z.string().optional(),
  id: z.string().optional(),
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

// {
//   "sortOrder": 0,
//   "title": "string",
//   "description": "string",
//   "brendId": "string",
//   "newProduct": true,
//   "hit": true,
//   "active": true,
//   "categoryIds": [
//     "string"
//   ],
//   "technologyIds": [
//     "string"
//   ]
// }
