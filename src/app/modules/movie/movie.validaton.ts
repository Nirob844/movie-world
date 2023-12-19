import { z } from 'zod';

const createMovieSchema = z.object({
  body: z.object({
    title: z.string({ required_error: 'Title is required' }),
    creators: z.string({ required_error: 'Creators is required' }),
    description: z.string({ required_error: 'Description is required' }),
    status: z.enum(['upcoming', 'released']).optional(),
    episode: z.number().positive().optional(),
    video: z.number().positive().optional(),
    photo: z.number().positive().optional(),
    banner: z.string().optional(),
    movieLink: z.string().optional(),
    userId: z.string({ required_error: 'User ID is required' }),
    categoryId: z.string({ required_error: 'Category ID is required' }),
    trailerId: z.string({ required_error: 'Trailer ID is required' }),
  }),
});

const updateMovieSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    creators: z.string().optional(),
    description: z.string().optional(),
    status: z.enum(['upcoming', 'released']).optional(),
    episode: z.number().positive().optional(),
    video: z.number().positive().optional(),
    photo: z.number().positive().optional(),
    banner: z.string().optional(),
    movieLink: z.string().optional(),
    userId: z.string().optional(),
    categoryId: z.string().optional(),
    trailerId: z.string().optional(),
  }),
});

export const MovieValidation = {
  createMovieSchema,
  updateMovieSchema,
};
