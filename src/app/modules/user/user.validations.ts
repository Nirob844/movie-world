import { z } from 'zod';

const updateUserSchema = z.object({
  body: z.object({
    username: z.string().min(3).max(50).optional(),
    email: z.string().email().optional(),
    password: z.string().min(6).optional(),
    role: z.enum(['customer', 'admin']).optional(),
  }),
});

export const UserValidation = {
  updateUserSchema,
};
