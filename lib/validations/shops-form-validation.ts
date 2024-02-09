import { z } from 'zod';

export const editShopsFormSchema = z.object({
  id: z.string().optional(),
  title: z.string(),
  phone: z.string(),
  address: z.string(),
  email: z.string(),
  longtitude: z.string(),
  latitude: z.string(),
  main: z.boolean().default(false),
});

export interface EditShopsItems extends z.infer<typeof editShopsFormSchema> {}
