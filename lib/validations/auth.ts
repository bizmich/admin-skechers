import * as z from 'zod';

export const authSchema = z.object({
  username: z.string(),
  password: z.string(),
});
