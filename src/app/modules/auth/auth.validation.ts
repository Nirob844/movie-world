import { z } from 'zod';

const registrationSchema = z.object({
  body: z.object({
    username: z
      .string({ required_error: 'User name is required' })
      .min(3)
      .max(50),
    email: z.string({ required_error: 'Email is required' }).email(),
    password: z.string({ required_error: 'Password is required' }).min(6),
    role: z.enum(['customer', 'admin']),
  }),
});

const loginSchema = z.object({
  body: z.object({
    email: z.string({ required_error: 'Email is required' }).email(),
    password: z.string({ required_error: 'Password is required' }).min(6),
  }),
});

export const AuthValidation = {
  registrationSchema,
  loginSchema,
};
