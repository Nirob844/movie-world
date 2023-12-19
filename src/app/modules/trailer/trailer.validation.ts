import { z } from 'zod';

const createTrailerSchema = z.object({
  body: z.object({
    title: z.string({ required_error: 'Title is required' }),
    image: z.string({ required_error: 'Image URL is required' }),
    trailerLink: z.string({ required_error: 'Trailer link is required' }),
  }),
});

const updateTrailerSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    image: z.string().optional(),
    trailerLink: z.string().optional(),
  }),
});

export const TrailerValidation = {
  createTrailerSchema,
  updateTrailerSchema,
};
