import { z } from 'zod';

const createWatchListSchema = z.object({
  body: z.object({
    userId: z.string({ required_error: 'User ID is required' }),
    movieId: z.string({ required_error: 'Movie ID is required' }),
  }),
});

const updateWatchListSchema = z.object({
  body: z.object({
    userId: z.string().optional(),
    movieId: z.string().optional(),
  }),
});

export const WatchListValidation = {
  createWatchListSchema,
  updateWatchListSchema,
};
