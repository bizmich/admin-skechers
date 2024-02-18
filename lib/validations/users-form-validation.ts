import { z } from 'zod';

export const editUsersFormSchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  phone: z.string(),
  password: z.string(),
});

export interface EditUsersItems extends z.infer<typeof editUsersFormSchema> {}
