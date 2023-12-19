import { z } from 'zod';

const createCategorySchema = z.object({
  body: z.object({
    title: z.string({ required_error: 'Title is required' }),
    image: z.string({ required_error: 'Image URL is required' }),
  }),
});

const updateCategorySchema = z.object({
  body: z.object({
    title: z.string({ required_error: 'Title is required' }).optional(),
    image: z.string({ required_error: 'Image URL is required' }).optional(),
  }),
});

export const CategoryValidation = {
  createCategorySchema,
  updateCategorySchema,
};
