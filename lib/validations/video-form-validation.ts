import { z } from 'zod';

export const editVideoFormSchema = z.object({
  id: z.string().optional(),
  sortOrder: z.number(),
  title: z.string(),
  youtubeUrl: z.string(),
  thumbnailUrl: z.string().optional().nullish(),
  active: z.boolean(),
});

export interface EditVideoItems extends z.infer<typeof editVideoFormSchema> {}
