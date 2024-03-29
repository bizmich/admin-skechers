import { z } from 'zod';

export const editSettingsFormSchema = z.object({
  id: z.string().optional(),
  companyName: z.string().optional(),
  companyDescription: z.string().optional(),
  logoOriginalUrl: z.string().optional(),
  logoFooterUrl: z.string().nullish().optional(),
  facebookLink: z.string().optional(),
  instagramLink: z.string().optional(),
  whatsappLink: z.string().optional(),
  telegramLink: z.string().optional(),
  freeDeliveryFrom: z.union([z.string(), z.number()]),
  deliveryPrice: z.union([z.string(), z.number()]),
});

export interface EditSettingsItems
  extends z.infer<typeof editSettingsFormSchema> {}
