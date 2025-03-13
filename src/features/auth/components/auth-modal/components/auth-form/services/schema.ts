import { object, string, InferType } from 'yup';

export const authSchema = object({
  email: string().min(5).max(30).email('Введите корректный email').required(),
});

export type TAuthSchema = InferType<typeof authSchema>;
