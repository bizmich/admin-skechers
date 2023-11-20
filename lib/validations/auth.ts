import * as z from "zod";

export const authSchema = z.object({
  phone: z.string().min(9, { message: "Не менее 9 цифр" }),
  password: z.string(),
});

export const registrationSchema = z
  .object({
    phone: z.string().min(9, { message: "Не менее 9 цифр" }),
    email: z.string().email(),
    password: z.string().min(8),
    password_confirmation: z.string().min(8),
  })
  .superRefine(({ password_confirmation, password }, ctx) => {
    if (password_confirmation !== password) {
      ctx.addIssue({
        code: "custom",
        message: "Пароли не совпадают",
      });
    }
  });

export const verifyEmailSchema = z.object({
  code: z
    .string()
    .min(6, {
      message: "Verification code must be 6 characters long",
    })
    .max(6),
});

export const checkEmailSchema = z.object({
  email: authSchema.shape.phone,
});
